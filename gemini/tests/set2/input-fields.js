var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('input-fields', (child) => {
    child.setUrl('/input-fields')
        .before((actions, find) => {
            actions.waitForElementToShow('.form-block', WAIT_TIME);
            actions.wait(WAIT_LOAD_TIME);
        })
        .setCaptureElements('.form-block')
        .capture('default');
});
