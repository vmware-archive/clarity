/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('spinners', child => {
  // gemini.suite('spinner-types', (child) => {
  //     child.setUrl('/spinners/spinner-types')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
  //
  // gemini.suite('spinner-sizes', (child) => {
  //     child.setUrl('/spinners/spinner-sizes')
  //         .before((actions, find) => {
  //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
  //             actions.wait(WAIT_LOAD_TIME);
  //         })
  //         .setCaptureElements('main.content-area')
  //         .capture('default');
  // });
});
