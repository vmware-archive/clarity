/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('tabs', child => {
  gemini.suite('static', child => {
    child
      .setUrl('/tabs/static')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('angular', child => {
    child
      .setUrl('/tabs/angular')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('overflowing', (actions, find) => {
        actions.executeJS(function (window) {
          document.getElementById('toggleOverflow').click();
          document.querySelector('.tabs-overflow button').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('vertical-hover', (actions, find) => {
        actions.mouseMove(find('.tabs-vertical .nav-item'));
        actions.wait(WAIT_LOAD_TIME);
      });
  });
});
