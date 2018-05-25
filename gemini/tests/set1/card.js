/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('card', child => {
  gemini.suite('grid', child => {
    child
      .setUrl('/card/grid')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('clickable', child => {
    child
      .setUrl('/card/clickable')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default')
      .capture('hovered', (actions, find) => {
        actions.mouseMove(find('.card'));
        actions.wait(WAIT_TIME);
      });
  });

  gemini.suite('dropdown', child => {
    child
      .setUrl('/card/dropdown')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('images', child => {
    child
      .setUrl('/card/images')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('layout', child => {
    child
      .setUrl('/card/layout')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('masonry', child => {
    child
      .setUrl('/card/masonry')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('media-block', child => {
    child
      .setUrl('/card/media-block')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('list-group', child => {
    child
      .setUrl('/card/list-group')
      .before((actions, find) => {
        actions.waitForElementToShow('.card', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  // gemini.suite('old', (child) => {
  //     child.setUrl('/card/old')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('.row', WAIT_TIME);
  //         })
  //         .setCaptureElements('.row')
  //         .capture('default');
  // });
});
