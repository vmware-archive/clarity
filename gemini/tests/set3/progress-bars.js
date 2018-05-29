/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 5000;

gemini.suite('progress-bar', child => {
  // gemini.suite('progress-bar-examples', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-examples')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-colors', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-colors')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-animations', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-animations')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-cards', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-cards')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-sidenav', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-sidenav')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-loop', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-loop')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-static', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-static')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-static-cards', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-static-cards')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-inline', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-inline')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('progress-bar-inline-cards', (child) => {
  //     child.setUrl('/progress-bars/progress-bar-inline-cards')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('old-progress-bar-cards', (child) => {
  //     child.setUrl('/progress-bars/old-progress-bar-cards')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });

  gemini.suite('progress-bar-examples', child => {
    child
      .setUrl('/progress-bars/progress-bar-examples')
      .before((actions, find) => {
        actions.waitForElementToShow('main.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('click the 1st show button', function(actions, find) {
        this.showButton = find('.prog-example-toggle-0');
        actions.click(this.showButton);
        actions.wait(2000);
      })
      .capture('click the 2nd show button', function(actions, find) {
        this.showButton = find('.prog-example-toggle-1');
        actions.click(this.showButton);
        actions.wait(2000);
      });
  });

  gemini.suite('progress-bar-cards', child => {
    child
      .setUrl('/progress-bars/progress-bar-cards')
      .before((actions, find) => {
        actions.waitForElementToShow('main.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('progress-bar-static', child => {
    child
      .setUrl('/progress-bars/progress-bar-static')
      .before((actions, find) => {
        actions.waitForElementToShow('main.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('progress-bar-inline-cards', child => {
    child
      .setUrl('/progress-bars/progress-bar-inline-cards')
      .before((actions, find) => {
        actions.waitForElementToShow('main.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
