/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 2000;

gemini.suite('landing-page', child => {
  child
    .setUrl('/')
    .before(function(actions, find) {
      actions.waitForElementToShow('.main-container', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
      this.dropdown = find('clr-dropdown');
    })
    .setCaptureElements('.main-container')
    .capture('default')
    .capture('setting-hovered', function(actions, find) {
      actions.mouseMove(this.dropdown);
      actions.wait(WAIT_TIME);
    })
    .capture('setting-clicked', function(actions, find) {
      actions.mouseUp(this.dropdown);
      actions.wait(WAIT_TIME);
    })
    .capture('sidenav-hovered', function(actions, find) {
      this.sidenav = find('.sidenav .nav-link');
      actions.mouseMove(this.sidenav);
      actions.wait(WAIT_TIME);
    })
    .capture('sidenav-clicked', function(actions, find) {
      this.sidenav = find('.sidenav label');
      actions.click(this.sidenav);
      actions.wait(WAIT_TIME);
    });
});
