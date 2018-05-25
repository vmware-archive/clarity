/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('button-group', child => {
  //Basic Structure
  gemini.suite('basic-structure', child => {
    child
      .setUrl('/button-group/static/basic-structure')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('basic-structure with overflow menu', child => {
    child
      .setUrl('/button-group/static/basic-structure')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-2', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-2')
      .capture('default');
  });

  gemini.suite('basic-structure flat with overflow menu', child => {
    child
      .setUrl('/button-group/static/basic-structure')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-3', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-3')
      .capture('default');
  });

  //Checkboxes
  gemini.suite('checkboxes', child => {
    child
      .setUrl('/button-group/static/checkboxes')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('angular-checkboxes', child => {
    child
      .setUrl('/button-group/static/checkboxes')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-2', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-2')
      .capture('default');
  });

  gemini.suite('checkboxes-checked-1', child => {
    child
      .setUrl('/button-group/static/checkboxes')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-3', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-3')
      .capture('default');
  });

  gemini.suite('checkboxes-checked-2', child => {
    child
      .setUrl('/button-group/static/checkboxes')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-4', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-4')
      .capture('default');
  });

  //Radios
  gemini.suite('radios', child => {
    child
      .setUrl('/button-group/static/radios')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('radios-checked', child => {
    child
      .setUrl('/button-group/static/radios')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-2', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-2')
      .capture('default');
  });

  //Icons
  gemini.suite('primary-icons', child => {
    child
      .setUrl('/button-group/static/icons')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('small-primary-icons', child => {
    child
      .setUrl('/button-group/static/icons')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-2', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-2')
      .capture('default');
  });

  gemini.suite('flat-icons', child => {
    child
      .setUrl('/button-group/static/icons')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-3', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-3')
      .capture('default');
  });

  gemini.suite('small-flat-icons', child => {
    child
      .setUrl('/button-group/static/icons')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-4', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-4')
      .capture('default');
  });

  gemini.suite('icons-with-text', child => {
    child
      .setUrl('/button-group/static/icons-with-text')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  //Types
  gemini.suite('types-primary', child => {
    child
      .setUrl('/button-group/static/types')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('types-outline', child => {
    child
      .setUrl('/button-group/static/types')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-2', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-2')
      .capture('default');
  });

  gemini.suite('types-flat', child => {
    child
      .setUrl('/button-group/static/types')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-3', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-3')
      .capture('default');
  });

  //Basic Structure
  gemini.suite('cards', child => {
    child
      .setUrl('/button-group/static/cards')
      .before((actions, find) => {
        actions.waitForElementToShow('#btn-group-test-1', WAIT_TIME);
      })
      .setCaptureElements('#btn-group-test-1')
      .capture('default');
  });

  gemini.suite('icon-button-group', child => {
    child
      .setUrl('/button-group/static/icon-button-group')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
