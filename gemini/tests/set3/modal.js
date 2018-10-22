/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('modal', child => {
  gemini.suite('static', child => {
    child
      .setUrl('/modal/static')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('sizes', child => {
    child
      .setUrl('/modal/sizes')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('max-height', child => {
    child
      .setUrl('/modal/max-height')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.waitForElementToShow('.modal-content', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.content-area')
      .capture('default');
  });

  gemini.suite('backdrop', child => {
    child
      .setUrl('/modal/backdrop')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  // gemini.suite('animation', (child) => {
  //     child.setUrl('/modal/animation')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('.clr-example', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('.clr-example')
  //         .capture('default');
  // });

  gemini.suite('dynamic-show', child => {
    child
      .setUrl('/modal/dynamic-show')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.waitForElementToShow('.modal-content', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for modal to fully appear
      })
      .setCaptureElements('.modal-content')
      .capture('default');
  });

  gemini.suite('dynamic-sizing', child => {
    child
      .setUrl('/modal/dynamic-sizing')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.waitForElementToShow('.modal-content', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for modal to fully appear
      })
      .setCaptureElements('.modal-content')
      .capture('default');
  });

  gemini.suite('static-backdrop', child => {
    child
      .setUrl('/modal/static-backdrop')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.waitForElementToShow('.modal-content', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for modal to fully appear
      })
      .setCaptureElements('.modal-content')
      .capture('default');
  });

  gemini.suite('not-closable', child => {
    child
      .setUrl('/modal/not-closable')
      .before((actions, find) => {
        actions.waitForElementToShow('.btn', WAIT_TIME);
        actions.click(find('.btn'));
        actions.waitForElementToShow('.modal-content', WAIT_TIME);
        actions.wait(WAIT_TIME); // wait for modal to fully appear
      })
      .setCaptureElements('.modal-content')
      .capture('default');
  });
});
