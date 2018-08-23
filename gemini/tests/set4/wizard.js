/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;

gemini.suite('wizard', child => {
  gemini.suite('basic', child => {
    child
      .setUrl('/wizard/basic')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
      })
      .setCaptureElements('.modal') // want to include modal-backdrop for this test
      .capture('default');
  });

  gemini.suite('lastpage', child => {
    child
      .setUrl('/wizard/basic')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.waitForElementToShow('.content-for-page-2', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('form-validation', child => {
    child
      .setUrl('/wizard/form-validation')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('#nameInput', WAIT_TIME);
        actions.click(find('#nameInput'));
        actions.click(find('#favInput'));
        actions.waitForElementToShow('label.invalid', WAIT_TIME);
        actions.click(find('#nameInput'));
        actions.waitForElementToShow('.tooltip-content', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .ignoreElements('#nameInput')
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('form-alert', child => {
    child
      .setUrl('/wizard/async-validation')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('.alert-item', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('custom-danger-button', child => {
    child
      .setUrl('/wizard/custom-buttons')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.waitForElementToShow('.content-for-page-2', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.waitForElementToShow('.content-for-page-3', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('default-header-actions', child => {
    child
      .setUrl('/wizard/header-actions')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
      })
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('page-header-actions', child => {
    child
      .setUrl('/wizard/header-actions')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .setCaptureElements('.modal-content-wrapper')
      .capture('default');
  });

  gemini.suite('static-wizard', child => {
    child
      .setUrl('/wizard/inline')
      .before((actions, find) => {
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
      })
      .setCaptureElements('.content-container')
      .capture('default');
  });

  gemini.suite('static-wizard-shortcontent', child => {
    child
      .setUrl('/wizard/inline')
      .before((actions, find) => {
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.waitForElementToShow('.content-for-page-2', WAIT_TIME);
        actions.click(find('.clr-wizard-btn--primary'));
        actions.wait(WAIT_TIME); // wait for animations to complete
      })
      .setCaptureElements('.content-container')
      .capture('default');
  });

  gemini.suite('dynamic-wizard', child => {
    child
      .setUrl('/wizard/force-forward')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.wait(WAIT_TIME); // wait for modal to fully load
        actions.waitForElementToShow('.content-for-page-1', WAIT_TIME);
      })
      .setCaptureElements('.modal-dialog')
      .capture('default');
  });
});
