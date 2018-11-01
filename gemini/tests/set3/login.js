/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('login', child => {
  gemini.suite('layout', child => {
    child
      .setUrl('/login/layout')
      .before((actions, find) => {
        actions.waitForElementToShow('.login-wrapper', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.login-wrapper')
      .capture('default');
  });
  gemini.suite('deprecated', child => {
    child
      .setUrl('/login/deprecated')
      .before((actions, find) => {
        actions.waitForElementToShow('.login-wrapper', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.login-wrapper')
      .capture('default');
  });
});
