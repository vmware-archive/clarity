/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('buttons', child => {
  function captureButton(btnClass) {
    gemini.suite(btnClass, child => {
      child
        .before((actions, find) => {
          actions.waitForElementToShow(btnClass, WAIT_TIME);
        })
        .setCaptureElements(btnClass)
        .capture('default');
    });
  }

  gemini.suite('real-buttons', child => {
    child.setUrl('/buttons/real-button').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = [
      '.btn-primary',
      '.btn-success',
      '.btn-warning',
      '.btn-danger',
      '.btn-danger[disabled]',
      '.btn-outline',
      '.btn-success-outline',
      '.btn-info-outline',
      '.btn-warning-outline',
      '.btn-danger-outline',
      '.btn-outline[disabled]',
      '.btn-link',
      '.btn-link[disabled]',
      '.btn-sm',
      '.btn-sm[disabled]',
    ];

    classes.forEach(btnClass => {
      captureButton(btnClass);
    });
  });

  gemini.suite('primary-button', child => {
    child.setUrl('/buttons/primary-button').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });
    captureButton('.btn-primary');
  });

  gemini.suite('secondary-button', child => {
    child.setUrl('/buttons/secondary-button').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });
    captureButton('.btn');
  });

  gemini.suite('tertiary-button', child => {
    child.setUrl('/buttons/tertiary-button').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = ['.btn-link', '.btn-link[disabled]'];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('inverse-button', child => {
    child.setUrl('/buttons/inverse-button').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = ['.btn-inverse', '.btn-inverse[disabled]'];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('button-states', child => {
    child.setUrl('/buttons/button-states').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = ['.btn-success-outline', '.btn-info-outline', '.btn-danger-outline', '.btn-success', '.btn-danger'];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('button-sizes', child => {
    child.setUrl('/buttons/button-sizes').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = [
      '.btn',
      '.btn-primary',
      '.btn-success',
      '.btn-info',
      '.btn-warning',
      '.btn-danger',
      '.btn[disabled]',
      '.btn-sm',
      '.btn-primary.btn-sm',
      '.btn-success.btn-sm',
      '.btn-info.btn-sm',
      '.btn-warning.btn-sm',
      '.btn-danger.btn-sm',
      '.btn-sm[disabled]',
      '.btn-primary.btn-block',
      '.btn-success.btn-block',
    ];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('button-icons', child => {
    child.setUrl('/buttons/icons').before((actions, find) => {
      actions.waitForElementToShow('main.content-area', WAIT_TIME);
    });

    var classes = ['.btn'];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('icon-buttons', child => {
    child.setUrl('/buttons/icon-buttons').before((actions, find) => {
      actions.waitForElementToShow('.clr-example', WAIT_TIME);
    });

    var classes = ['.clr-example'];

    classes.forEach(function(btnClass) {
      captureButton(btnClass);
    });
  });

  gemini.suite('toggles', child => {
    child
      .setUrl('/buttons/toggles')
      .before((actions, find) => {
        actions.waitForElementToShow('.toggle-switch', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.toggle-switch')
      .capture('default');
  });
});
