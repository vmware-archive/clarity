/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('images', child => {
  child
    .setUrl('/images')
    .before((actions, find) => {
      actions.waitForElementToShow('.clr-example', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
    })
    .setCaptureElements('.clr-example')
    .capture('default');
});
