var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('vtabs', (child) => {

    gemini.suite('static', (child) => {
        child.setUrl('/tabs/vtabs-static')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('angular', (child) => {
        child.setUrl('/tabs/vtabs-angular')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });
});
