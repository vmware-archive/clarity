/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('textarea', child => {
  child
    .setUrl('/textarea')
    .before((actions, find) => {
      actions.waitForElementToShow('.content-area', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
    })
    .setCaptureElements('.content-area')
    .capture('default');
});
