/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('login', child => {
  gemini.suite('layout', child => {
    child
      .setUrl('/login')
      .before((actions, find) => {
        actions.waitForElementToShow('.login-wrapper', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.login-wrapper')
      .capture('default');
  });
});
