var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 2000;

gemini.suite('wizard', (child) => {

    gemini.suite('static', (child) => {
        child.setUrl('/wizard/static')
            .before((actions, find) => {
                actions.waitForElementToShow('.modal-backdrop', WAIT_TIME);
                actions.wait(WAIT_TIME); // wait for modal to fully load
            })
            .setCaptureElements('.modal-body')
            .capture('default');
    });

    gemini.suite('angular', (child) => {
        child.setUrl('/wizard/angular')
            .before((actions, find) => {
                actions.waitForElementToShow('.btn', WAIT_TIME);
                actions.click(find('.btn'));
                actions.wait(WAIT_TIME); // wait for modal to fully load
            })
            .setCaptureElements('.modal-body')
            .capture('default');
    });

});