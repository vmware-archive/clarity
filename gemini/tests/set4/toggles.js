/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('toggles', child => {
  child
    .setUrl('/toggles')
    .before((actions, find) => {
      actions.waitForElementToShow('clr-toggles-demo form', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
    })
    .setCaptureElements('clr-toggles-demo form')
    .capture('default');
});
