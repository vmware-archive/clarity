/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('color', child => {
  gemini.suite('color-palette', child => {
    child
      .setUrl('/color/color-palette')
      .before((actions, find) => {
        actions.waitForElementToShow('.card-swatch', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-row')
      .capture('default');
  });
});
