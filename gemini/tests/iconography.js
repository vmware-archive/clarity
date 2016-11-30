var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('iconography', (child) => {

    gemini.suite('selection', (child) => {
        child.setUrl('/iconography/selection')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-icon-selection', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-icon-selection')
            .capture('default');
    });

    gemini.suite('color-options', (child) => {
        child.setUrl('/iconography/color-options')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('inverse-color', (child) => {
        child.setUrl('/iconography/inverse-color')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('size', (child) => {
        child.setUrl('/iconography/size')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('orientation', (child) => {
        child.setUrl('/iconography/orientation')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

});