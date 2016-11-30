var WAIT_TIME = 5000;

gemini.suite('badges', (child) => {

    gemini.suite('color-options', (child) => {
        child.setUrl('/badges/color-options')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('status', (child) => {
        child.setUrl('/badges/status')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

});