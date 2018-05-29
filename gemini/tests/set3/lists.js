/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('lists', child => {
  gemini.suite('lists-ul', child => {
    child
      .setUrl('/lists/lists-ul')
      .before((actions, find) => {
        actions.waitForElementToShow('.list', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.list')
      .capture('default');
  });

  gemini.suite('lists-unstyled', child => {
    child
      .setUrl('/lists/lists-unstyled')
      .before((actions, find) => {
        actions.waitForElementToShow('.list-unstyled', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.list-unstyled')
      .capture('default');
  });

  gemini.suite('lists-ol', child => {
    child
      .setUrl('/lists/lists-ol')
      .before((actions, find) => {
        actions.waitForElementToShow('.list', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.list')
      .capture('default');
  });

  gemini.suite('lists-mixed', child => {
    child
      .setUrl('/lists/lists-mixed')
      .before((actions, find) => {
        actions.waitForElementToShow('.list-unstyled', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.list-unstyled')
      .capture('default');
  });

  gemini.suite('lists-compact', child => {
    child
      .setUrl('/lists/lists-compact')
      .before((actions, find) => {
        actions.waitForElementToShow('.list', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.list')
      .capture('default');
  });

  gemini.suite('lists-in-cards', child => {
    child
      .setUrl('/lists/lists-in-cards')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.row')
      .capture('default');
  });

  // gemini.suite('old-lists-in-cards', (child) => {
  //     child.setUrl('/lists/old-lists-in-cards')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('.card', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('.row')
  //         .capture('default');
  // });
});
