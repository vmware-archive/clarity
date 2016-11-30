var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('forms', (child) => {

    gemini.suite('form-fields', (child) => {
        child.setUrl('/forms/form-fields')
            .before((actions, find) => {
                actions.waitForElementToShow('.form-block', WAIT_TIME);
            })
            .setCaptureElements('.form-block')
            .capture('default');
    });

    gemini.suite('form-test', (child) => {
        child.setUrl('/forms/form-test')
            .before((actions, find) => {
                actions.waitForElementToShow('.form-block', WAIT_TIME);
            })
            .setCaptureElements('.form-block')
            .capture('default');
    });

    gemini.suite('form-validation', (child) => {
        child.setUrl('/forms/form-validation')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('form-compact', (child) => {
        child.setUrl('/forms/form-compact')
            .before((actions, find) => {
                actions.waitForElementToShow('.form-block', WAIT_TIME);
            })
            .setCaptureElements('.form-block')
            .capture('default');
    });

    gemini.suite('form-grid', (child) => {
        child.setUrl('/forms/form-grid')
            .before((actions, find) => {
                actions.waitForElementToShow('.form-block', WAIT_TIME);
            })
            .setCaptureElements('.form-block')
            .capture('default');
    });

});