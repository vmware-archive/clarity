/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('alert', child => {
  gemini.suite('styles', child => {
    child
      .setUrl('/alert/static/styles')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('p')
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('sizes', child => {
    child
      .setUrl('/alert/static/sizes')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('p')
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('cards', child => {
    child
      .setUrl('/alert/static/cards')
      .before((actions, find) => {
        actions.waitForElementToShow('div.card-block', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('.card-media-block', '.card-media-image', '.card-media-description', '.card-text', '.card-footer')
      .setCaptureElements('div.card-block')
      .capture('default');
  });

  gemini.suite('modals', child => {
    child
      .setUrl('/alert/static/modals')
      .before((actions, find) => {
        actions.waitForElementToShow('div.static', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('.modal-title', '.modal-body')
      .setCaptureElements('div.static')
      .capture('default');
  });

  gemini.suite('content-area', child => {
    child
      .setUrl('/alert/static/content-area')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('p', 'p')
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('app-level-static', child => {
    child
      .setUrl('/alert/static/app-level')
      .before((actions, find) => {
        actions.waitForElementToShow('div.main-container', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('div.main-container')
      .capture('default');
  });

  gemini.suite('not-closable', child => {
    child
      .setUrl('/alert/angular/not-closable')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('small', child => {
    child
      .setUrl('/alert/angular/small')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('close-events', child => {
    child
      .setUrl('/alert/angular/close-events')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
        this.close = find('.close');
      })
      .setCaptureElements('div.content-area')
      .capture('default')
      .capture('setting-hovered', (actions, find) => {
        actions.mouseMove(this.close);
      })
      .capture('setting-clicked', (actions, find) => {
        actions.click(this.close);
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('success', child => {
    child
      .setUrl('/alert/angular/success')
      .before((actions, find) => {
        actions.waitForElementToShow('div.content-area', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('p')
      .setCaptureElements('div.content-area')
      .capture('default');
  });

  gemini.suite('app-level-angular', child => {
    child
      .setUrl('/alert/angular/app-level')
      .before((actions, find) => {
        actions.waitForElementToShow('div.main-container', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .ignoreElements('p')
      .setCaptureElements('div.main-container')
      .capture('default');
  });
});
