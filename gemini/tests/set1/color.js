/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('color', child => {
  gemini.suite('color-palette', child => {
    child
      .setUrl('/color/color-palette')
      .before((actions, find) => {
        actions.waitForElementToShow('.card-swatch', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.row')
      .capture('default');
  });

  gemini.suite('color-luminance', child => {
    child
      .setUrl('/color/color-luminance')
      .before((actions, find) => {
        actions.waitForElementToShow('.colordemo-luminance', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.colordemo-luminance')
      .capture('default');
  });

  gemini.suite('color-contrast', child => {
    child
      .setUrl('/color/color-contrast')
      .before((actions, find) => {
        actions.waitForElementToShow('.colordemo-textcolor', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.colordemo-textcolor')
      .capture('default');
  });
});
