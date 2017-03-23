var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('selects', (child) => {
    child.setUrl('/selects')
        .before((actions, find) => {
            actions.waitForElementToShow('.form-block', WAIT_TIME);
            actions.wait(WAIT_LOAD_TIME);
        })
        .setCaptureElements('.test-select')
        .capture('default');
});
