var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('color', (child) => {

    gemini.suite('color-palette-base', (child) => {
        child.setUrl('/color/color-palette-base')
            .before((actions, find) => {
                actions.waitForElementToShow('.card-swatch', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
    });

    gemini.suite('color-palette-stoplight', (child) => {
        child.setUrl('/color/color-palette-stoplight')
            .before((actions, find) => {
                actions.waitForElementToShow('.card-swatch', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
    });

    gemini.suite('color-palette-highlight', (child) => {
        child.setUrl('/color/color-palette-highlight')
            .before((actions, find) => {
                actions.waitForElementToShow('.card-swatch', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
    });

    gemini.suite('color-luminance', (child) => {
        child.setUrl('/color/color-luminance')
            .before((actions, find) => {
                actions.waitForElementToShow('.colordemo-luminance', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.colordemo-luminance')
            .capture('default');
    });

    gemini.suite('color-contrast', (child) => {
        child.setUrl('/color/color-contrast')
            .before((actions, find) => {
                actions.waitForElementToShow('.colordemo-textcolor', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.colordemo-textcolor')
            .capture('default');
    });

});