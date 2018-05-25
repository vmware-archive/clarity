/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('vertical-nav', child => {
  // higher tolerance for vertical-nav tests to account for weird minor pixel diffs
  child.setTolerance(5);

  gemini.suite('nested-menus-links', child => {
    child
      .setUrl('/vertical-nav/nested-menus')
      .before(actions => {
        actions.waitForElementToShow('.nested-menus-links', WAIT_TIME);
      })
      .setCaptureElements('.nested-menus-links')
      .capture('default');
  });

  gemini.suite('nested-menus-text', child => {
    child
      .setUrl('/vertical-nav/nested-menus')
      .before(actions => {
        actions.waitForElementToShow('.nested-menus-text', WAIT_TIME);
      })
      .setCaptureElements('.nested-menus-text')
      .capture('default');
  });

  gemini.suite('nested-menus-collapsed-links', child => {
    child
      .setUrl('/vertical-nav/nested-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.nested-menus-links', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.nested-menus-links')
      .capture('default');
  });

  gemini.suite('nested-menus-collapsed-text', child => {
    child
      .setUrl('/vertical-nav/nested-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.nested-menus-text', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.nested-menus-text')
      .capture('default');
  });

  gemini.suite('nested-icon-menus-links', child => {
    child
      .setUrl('/vertical-nav/nested-icon-menus')
      .before(actions => {
        actions.waitForElementToShow('.nav-group-links', WAIT_TIME);
      })
      .setCaptureElements('.nav-group-links')
      .capture('default');
  });

  gemini.suite('nested-icon-menus-text', child => {
    child
      .setUrl('/vertical-nav/nested-icon-menus')
      .before(actions => {
        actions.waitForElementToShow('.nav-group-text', WAIT_TIME);
      })
      .setCaptureElements('.nav-group-text')
      .capture('default');
  });

  gemini.suite('nested-icons-menus-text-collapsed', child => {
    child.setTolerance(5);
    child
      .setUrl('/vertical-nav/nested-icon-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.nav-group-text', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.nav-group-text')
      .capture('default');
  });

  gemini.suite('nested-icons-menus-links-collapsed', child => {
    child
      .setUrl('/vertical-nav/nested-icon-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.nav-group-links', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.nav-group-links')
      .capture('default');
  });

  gemini.suite('partial-nested-menus', child => {
    child
      .setUrl('/vertical-nav/partial-nested-menus')
      .before(actions => {
        actions.waitForElementToShow('.partial-nested-menu', WAIT_TIME);
      })
      .setCaptureElements('.partial-nested-menu')
      .capture('default');
  });

  gemini.suite('partial-nested-menus-collapsed', child => {
    child
      .setUrl('/vertical-nav/partial-nested-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.partial-nested-menu', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.partial-nested-menu')
      .capture('default');
  });

  gemini.suite('partial-nested-icon-menus', child => {
    child
      .setUrl('/vertical-nav/partial-nested-icon-menus')
      .before(actions => {
        actions.waitForElementToShow('.partial-nested-icon-menu', WAIT_TIME);
      })
      .setCaptureElements('.partial-nested-icon-menu')
      .capture('default');
  });

  gemini.suite('partial-nested-icon-menus-collapsed', child => {
    child
      .setUrl('/vertical-nav/partial-nested-icon-menus')
      .before((actions, find) => {
        actions.waitForElementToShow('.partial-nested-icon-menu', WAIT_TIME);
        actions.click(find('.btn.gemini-trigger'));
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.partial-nested-icon-menu')
      .capture('default');
  });

  //Routing
  gemini.suite('routing', child => {
    child
      .setUrl('/vertical-nav/routing')
      .before(actions => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
