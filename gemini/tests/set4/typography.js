/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('typography', child => {
  gemini.suite('typography-font-weight', child => {
    child
      .setUrl('/typography/typography-font-weight')
      .before((actions, find) => {
        actions.waitForElementToShow('table', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('table')
      .capture('default');
  });

  gemini.suite('typography-headers', child => {
    child
      .setUrl('/typography/typography-headers')
      .before((actions, find) => {
        actions.waitForElementToShow('table', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('table')
      .capture('default');
  });

  gemini.suite('typography-text', child => {
    child
      .setUrl('/typography/typography-text')
      .before((actions, find) => {
        actions.waitForElementToShow('table', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('table')
      .capture('default');
  });

  gemini.suite('typography-links', child => {
    child
      .setUrl('/typography/typography-links')
      .before((actions, find) => {
        actions.waitForElementToShow('clr-typography-links', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('clr-typography-links')
      .capture('default');
  });
});
