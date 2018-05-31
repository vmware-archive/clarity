/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;

gemini.suite('badges', child => {
  gemini.suite('color-options', child => {
    child
      .setUrl('/badges/color-options')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('status', child => {
    child
      .setUrl('/badges/status')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
