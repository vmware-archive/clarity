/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('tree-view', child => {
  gemini.suite('Tree Node', child => {
    child
      .setUrl('/tree-view/basic-tree-node')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree Node - Expanded', child => {
    child
      .setUrl('/tree-view/basic-tree-node-expanded')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree View - Basic Selection', child => {
    child
      .setUrl('/tree-view/basic-selection-tree')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree View - Child Selection', child => {
    child
      .setUrl('/tree-view/child-node-selected')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree View Dynamically Generated', child => {
    child
      .setUrl('/tree-view/tree-node-dynamic')
      .before((actions, find) => {
        actions.waitForElementToShow('.row', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.row')
      .capture('default');
  });

  gemini.suite('Recursive Selectable Tree', child => {
    child
      .setUrl('/tree-view/recursive-selectable-tree')
      .before((actions, find) => {
        actions.wait(WAIT_TIME);
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
