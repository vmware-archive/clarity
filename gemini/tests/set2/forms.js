/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('forms', child => {
  gemini.suite('form-vertical', child => {
    child
      .setUrl('/forms/layout-vertical')
      .before((actions, find) => {
        actions.setWindowSize(1200, 4000);
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-horizontal', child => {
    child
      .setUrl('/forms/layout-horizontal')
      .before((actions, find) => {
        actions.setWindowSize(1200, 4000);
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-compact', child => {
    child
      .setUrl('/forms/layout-compact')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  // @TODO Add grid back
  // gemini.suite('form-vertical-grid', (child) => {
  //     child.setUrl('/forms/layout-vertical-grid')
  //         .before((actions, find) => {
  //             actions.setWindowSize(1200, 4000)
  //             actions.waitForElementToShow('.clr-form', WAIT_TIME);
  //         })
  //         .setCaptureElements('.clr-form')
  //         .capture('default');
  // });

  // gemini.suite('form-horizontal-grid', (child) => {
  //     child.setUrl('/forms/layout-horizontal-grid')
  //         .before((actions, find) => {
  //             actions.setWindowSize(1200, 4000)
  //             actions.waitForElementToShow('.clr-form', WAIT_TIME);
  //         })
  //         .setCaptureElements('.clr-form')
  //         .capture('default');
  // });

  // gemini.suite('form-compact-grid', (child) => {
  //     child.setUrl('/forms/layout-compact-grid')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('.clr-form', WAIT_TIME);
  //         })
  //         .setCaptureElements('.clr-form')
  //         .capture('default');
  // });

  gemini.suite('form-input-group', child => {
    child
      .setUrl('/forms/input-group')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-checkbox', child => {
    child
      .setUrl('/forms/checkbox')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-file', child => {
    child
      .setUrl('/forms/file')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-radio', child => {
    child
      .setUrl('/forms/radio')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-select', child => {
    child
      .setUrl('/forms/select')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-text', child => {
    child
      .setUrl('/forms/text')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });

  gemini.suite('form-textarea', child => {
    child
      .setUrl('/forms/textarea')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-form', WAIT_TIME);
      })
      .setCaptureElements('.clr-form')
      .capture('default');
  });
});
