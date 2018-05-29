/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('forms-deprecated', child => {
  gemini.suite('form-fields', child => {
    child
      .setUrl('/forms-deprecated/form-fields')
      .before((actions, find) => {
        actions.waitForElementToShow('.form-block', WAIT_TIME);
      })
      .setCaptureElements('.form-block')
      .capture('default');
  });

  gemini.suite('form-test', child => {
    child
      .setUrl('/forms-deprecated/form-test')
      .before((actions, find) => {
        actions.waitForElementToShow('.form-block', WAIT_TIME);
      })
      .setCaptureElements('.form-block')
      .capture('default');
  });

  gemini.suite('form-validation', child => {
    child
      .setUrl('/forms-deprecated/form-validation')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('form-compact', child => {
    child
      .setUrl('/forms-deprecated/form-compact')
      .before((actions, find) => {
        actions.waitForElementToShow('.form-block', WAIT_TIME);
      })
      .setCaptureElements('.form-block')
      .capture('default');
  });

  gemini.suite('form-grid', child => {
    child
      .setUrl('/forms-deprecated/form-grid')
      .before((actions, find) => {
        actions.waitForElementToShow('.form-block', WAIT_TIME);
      })
      .setCaptureElements('.form-block')
      .capture('default');
  });
});
