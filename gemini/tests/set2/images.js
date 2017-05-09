var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('images', (child) => {
    child.setUrl('/images')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
            actions.wait(WAIT_LOAD_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
});