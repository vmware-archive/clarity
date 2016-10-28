function create_window_in_test(t, srcdoc) {
  let p = new Promise((resolve) => {
    let f = document.createElement('iframe');
    srcdoc = srcdoc || '';
    // srcdoc = `<script src="../../../../../../dist/CustomElementsV1.min.js"></script>\n` +
    srcdoc = `<script src="../../../../../../src/CustomElements/v1/CustomElements.js"></script>\n` +
             `<script>customElements.enableFlush = true;</script>\n` + srcdoc;
    f.srcdoc = srcdoc;
    f.onload = (event) => {
      let w = f.contentWindow;
      t.add_cleanup(() => f.parentNode && f.remove());
      resolve(w);
    };
    document.body.appendChild(f);
  });
  return p;
}

function test_with_window(f, name, srcdoc) {
  promise_test((t) => {
    return create_window_in_test(t, srcdoc)
    .then((w) => {
      f(w);
    });
  }, name);
}

function assert_throws_dom_exception(global_context, code, func, description) {
  let exception;
  assert_throws(code, () => {
    try {
      func.call(this);
    } catch(e) {
      exception = e;
      throw e;
    }
  }, description);
  assert_true(exception instanceof global_context.DOMException, 'DOMException on the appropriate window');
}

function assert_array_equals_callback_invocations(actual, expected, description) {
  assert_equals(actual.length, expected.length);
  for (let len=actual.length, i=0; i<len; ++i) {
    let callback = expected[i][0];
    assert_equals(actual[i][0], expected[i][0], callback + ' callback should be invoked');
    assert_equals(actual[i][1], expected[i][1], callback + ' should be invoked on the element ' + expected[i][1]);
    assert_array_equals(actual[i][2], expected[i][2], callback + ' should be invoked with the arguments ' + expected[i][2]);
  }
}

function assert_is_upgraded(element, className, description) {
  assert_true(element.matches(':defined'), description);
  assert_equals(Object.getPrototypeOf(element), className.prototype, description);
}
