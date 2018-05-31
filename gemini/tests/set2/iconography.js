/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('iconography', child => {
  gemini.suite('selection-preview-settings', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(1)', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(1)')
      .capture('default');
  });

  gemini.suite('selection-core-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(2)', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(2)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-commerce-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(3)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(3)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(3)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-essential-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(4)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(4)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(4)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-media-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(5)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(5)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(5)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-social-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(6)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(6)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(6)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-travel-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(7)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(7)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(7)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('selection-technology-shapes', child => {
    child
      .setUrl('/iconography/selection')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-icon-selection > section:nth-child(8)', WAIT_TIME);
        actions.executeJS(function(window) {
          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-icon-selection > section:nth-child(8)')
      .capture('line')
      .capture('line-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('line-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();

          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('noneRadio').click();
          document.getElementById('solidCheckBox').click();
          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-badged', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('badgeRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      })
      .capture('solid-alerted', (actions, find) => {
        actions.executeJS(function(window) {
          document.getElementById('alertRadio').click();
          document.querySelector('.clr-icon-selection > section:nth-child(8)').scrollIntoView();
        });
        actions.wait(WAIT_LOAD_TIME);
      });
  });

  gemini.suite('color-options', child => {
    child
      .setUrl('/iconography/color-options')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('inverse-color', child => {
    child
      .setUrl('/iconography/inverse-color')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('size', child => {
    child
      .setUrl('/iconography/size')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('orientation', child => {
    child
      .setUrl('/iconography/orientation')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('variants', child => {
    child
      .setUrl('/iconography/variants')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_LOAD_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
