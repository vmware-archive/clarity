/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('password', child => {
  child
    .setUrl('/password')
    .before((actions, find) => {
      actions.waitForElementToShow('.gemini-capture', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
    })
    .setCaptureElements('.content-area')
    .capture('default');
});
