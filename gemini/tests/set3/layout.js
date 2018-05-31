/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 2000;

gemini.suite('layout', child => {
  gemini.suite('layout-all', child => {
    child
      .setUrl('/layout/layout-all')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-no-subnav', child => {
    child
      .setUrl('/layout/layout-no-subnav')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-no-sidenav', child => {
    child
      .setUrl('/layout/layout-no-sidenav')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-only-header', child => {
    child
      .setUrl('/layout/layout-only-header')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-subnav-primary', child => {
    child
      .setUrl('/layout/layout-subnav-primary')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-sidenav-primary', child => {
    child
      .setUrl('/layout/layout-sidenav-primary')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout-additional-sections', child => {
    child
      .setUrl('/layout/layout-additional-sections')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
