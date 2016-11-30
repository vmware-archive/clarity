var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('login', (child) => {
    child.setUrl('/login')
        .before((actions, find) => {
            actions.waitForElementToShow('.login-wrapper', WAIT_TIME);
            actions.wait(WAIT_LOAD_TIME);
        })
        .setCaptureElements('.login-wrapper')
        .capture('default');
});