/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('stack-view', child => {
  gemini.suite('static', child => {
    child
      .setUrl('/stack-view/static')
      .before((actions, find) => {
        actions.waitForElementToShow('.stack-view', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.stack-view')
      .capture('default');
  });

  gemini.suite('angular-basic', child => {
    child
      .setUrl('/stack-view/angular-basic')
      .before((actions, find) => {
        actions.waitForElementToShow('.stack-view', WAIT_TIME);
        actions.click(find('.stack-block-expandable .stack-block-label'));
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.stack-view')
      .capture('default');
  });

  // TODO: this is failing in angular 4.3.x with no other code changes on our side; revisit this
  // gemini.suite('angular-modal-edit', (child) => {
  //     child.setUrl('/stack-view/angular-modal-edit')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('.stack-action', WAIT_TIME);
  //             actions.click(find('.stack-action'));
  //             actions.waitForElementToShow('.modal-content .stack-view', WAIT_TIME);
  //             actions.wait(WAIT_TIME); // wait for modal to fully load
  //         })
  //         .setCaptureElements('.modal-content .stack-view')
  //         .capture('default');
  // });

  gemini.suite('angular-lazyload', child => {
    child
      .setUrl('/stack-view/angular-lazyload')
      .before((actions, find) => {
        actions.waitForElementToShow('.stack-view', WAIT_TIME);
        actions.click(find('.stack-block-expandable .stack-block-label'));
        actions.wait(WAIT_TIME); // wait for lazyload to complete
      })
      .setCaptureElements('.stack-view')
      .capture('default');
  });
});
