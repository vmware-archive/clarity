/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('datepicker', child => {
  gemini.suite('layout', child => {
    child
      .setUrl('/datepicker/layout')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-input-wrapper');
      })
      .setCaptureElements('.content-area')
      .capture('default');
  });
  gemini.suite('no-input', child => {
    child
      .setUrl('/datepicker/css-regression')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example-1', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example-1 .clr-input')
      .capture('default');
  });

  gemini.suite('disabled', child => {
    child
      .setUrl('/datepicker/disabled')
      .before((actions, find) => {
        actions.waitForElementToShow('[clrForm]', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('[clrForm]')
      .capture('default');
  });

  gemini.suite('user-input', child => {
    child
      .setUrl('/datepicker/css-regression')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example-2', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
        this.trigger = find('.clr-example-2 .datepicker-trigger');
      })
      .setCaptureElements('.clr-example-2')
      .capture('default')
      .capture('trigger-hovered', (actions, find) => {
        actions.mouseMove(this.trigger);
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('datepicker', child => {
    child
      .setUrl('/datepicker/css-regression')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example-2', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
        this.trigger = find('.clr-example-2 .datepicker-trigger');
        actions.click(this.trigger);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example-2')
      .capture('default');
  });

  gemini.suite('monthpicker', child => {
    child
      .setUrl('/datepicker/css-regression')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example-2', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
        this.trigger = find('.clr-example-2 .datepicker-trigger');
        actions.click(this.trigger);
        actions.wait(WAIT_LOAD_TIME);
        this.monthpickerTrigger = find('.monthpicker-trigger');
        actions.click(this.monthpickerTrigger);
        actions.wait(WAIT_LOAD_TIME);
        actions.mouseMove('.month');
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example-2')
      .capture('default');
  });

  gemini.suite('yearpicker', child => {
    child
      .setUrl('/datepicker/css-regression')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example-2', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
        this.trigger = find('.clr-example-2 .datepicker-trigger');
        actions.click(this.trigger);
        actions.wait(WAIT_LOAD_TIME);
        this.yearpickerTrigger = find('.yearpicker-trigger');
        actions.click(this.yearpickerTrigger);
        actions.wait(WAIT_LOAD_TIME);
        actions.mouseMove('.year');
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example-2')
      .capture('default');
  });
});
