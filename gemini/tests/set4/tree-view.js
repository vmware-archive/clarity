/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('tree-view', child => {
  gemini.suite('Eager declarative tree', child => {
    child
      .setUrl('/tree-view/eager-declarative')
      .before((actions, find) => {
        actions.waitForElementToShow('#expanded-node', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('#expanded-node')
      .capture('default');
  });

  gemini.suite('Eager recursive tree', child => {
    child
      .setUrl('/tree-view/eager-recursive')
      .before((actions, find) => {
        actions.waitForElementToShow('#expanded-node', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('#expanded-node')
      .capture('default');
  });

  gemini.suite('Lazy declarative tree', child => {
    child
      .setUrl('/tree-view/lazy-declarative')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Lazy recursive tree', child => {
    child
      .setUrl('/tree-view/lazy-recursive')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree with icons', child => {
    child
      .setUrl('/tree-view/nodes-with-icons')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Pre-selection', child => {
    child
      .setUrl('/tree-view/pre-selection')
      .before((actions, find) => {
        actions.waitForElementToShow('#consistent-pre-selection', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('#consistent-pre-selection')
      .capture('default');
  });

  gemini.suite('Children pre-selection', child => {
    child
      .setUrl('/tree-view/pre-selection')
      .before((actions, find) => {
        actions.waitForElementToShow('#children-pre-selection', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('#children-pre-selection')
      .capture('default');
  });
});
