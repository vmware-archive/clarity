/*
 * mojo-helpers contains extensions to testharness.js useful for consuming
 * and mocking Mojo services directly within test code.
 */
'use strict';

// Fix up the global window.define, since all baked-in Mojo modules expect to
// find it there. This define() also returns a promise to the module.
let define = (function(){
  let moduleCache = new Map();

  return function(name, deps, factory) {
    let promise = moduleCache.get(name);
    if (promise === undefined) {
      // This promise must be cached as mojo.define will only call the factory
      // function the first time the module is defined.
      promise = new Promise(resolve => {
        mojo.define(name, deps, (...modules) => {
          let result = factory(...modules);
          resolve(result);
          return result;
        });
      });
      moduleCache.set(name, promise);
    }
    return promise;
  }
})();

define('Mojo Helpers', [
    'mojo/public/js/core',
    'mojo/public/js/router',
    'mojo/public/js/support',
    'content/public/renderer/frame_interfaces',
    'content/public/renderer/interfaces',
], (core, router, support, frameInterfaces, interfaces) => {
  let tearDown = () => {
    frameInterfaces.clearInterfaceOverridesForTesting();
    interfaces.clearInterfaceOverridesForTesting();
  };
  addEventListener('unload', tearDown);
  if (window.add_completion_callback)
    add_completion_callback(tearDown);

  return {
    core,
    router,
    support,
    frameInterfaces,
    interfaces,
  };
});

// Returns a promise to an object that exposes common Mojo module interfaces.
// Additional modules to load can be specified in the |modules| parameter. The
// result will contain them, in the same order, in the |modules| field.
function loadMojoModules(name, modules = []) {
  return define('Mojo modules: ' + name,
                [ 'Mojo Helpers' ].concat(modules),
                (mojo, ...rest) => {
    mojo.modules = rest
    return mojo;
  });
}

// Runs a promise_test which depends on the Mojo system API modules available to
// all layout tests. The test implementation function is called with an Object
// that exposes common Mojo module interfaces.
function mojo_test(func, name, properties) {
  promise_test(() => loadMojoModules(name).then(mojo => {
    return Promise.resolve(func(mojo));
  }), name, properties);
}

// Waits for a message to become available on a pipe.
function mojo_wait_for_incoming_message(mojo, pipe) {
  return new Promise((resolve, reject) => {
    mojo.support.asyncWait(pipe, mojo.core.HANDLE_SIGNAL_READABLE, result => {
      if (result != mojo.core.RESULT_OK) {
        reject(result);
        return;
      }
      let buffer, handles;
      ({ result, buffer, handles } = mojo.core.readMessage(pipe, 0));
      if (result !== mojo.core.RESULT_OK) {
        reject(result);
        return;
      }
      resolve({ buffer, handles });
    });
  });
};
