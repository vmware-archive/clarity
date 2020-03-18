/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('timeline', child => {
  gemini.suite('static', child => {
    child
      .setUrl('/timeline/static')
      .before((actions, find) => {
        actions.waitForElementToShow('.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.content-area')
      .ignoreElements({ every: '.gemini-ignore' })
      .capture('default');
  });

  gemini.suite('angular', child => {
    child
      .setUrl('/timeline/angular')
      .before((actions, find) => {
        actions.waitForElementToShow('.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.content-area')
      .ignoreElements({ every: '.gemini-ignore' })
      .capture('default');
  });
});
