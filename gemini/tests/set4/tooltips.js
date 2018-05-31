/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 2000;

gemini.suite('tooltips', child => {
  gemini.suite('sizes', child => {
    child
      .setUrl('/tooltips/sizes')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('hover', function(actions, find) {
        actions.mouseMove(find('.tooltip'));
        actions.wait(WAIT_TIME);
      });
  });

  gemini.suite('directions', child => {
    child
      .setUrl('/tooltips/directions')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('hover', function(actions, find) {
        actions.mouseMove(find('.tooltip'));
        actions.wait(WAIT_TIME);
      });
  });

  gemini.suite('angular', child => {
    child
      .setUrl('/tooltips/angular')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('hover', function(actions, find) {
        actions.mouseMove(find('.tooltip'));
        actions.wait(WAIT_TIME);
      });
  });
});
