var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('tables', (child) => {

    gemini.suite('tables-basic', (child) => {
        child.setUrl('/tables/tables-basic')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-leftcell', (child) => {
        child.setUrl('/tables/tables-leftcell')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-multiline', (child) => {
        child.setUrl('/tables/tables-multiline')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-noborder', (child) => {
        child.setUrl('/tables/tables-noborder')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-compact', (child) => {
        child.setUrl('/tables/tables-compact')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-compact-noborder', (child) => {
        child.setUrl('/tables/tables-compact-noborder')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-vertical', (child) => {
        child.setUrl('/tables/tables-vertical')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });

    gemini.suite('tables-vertical-noborder-compact', (child) => {
        child.setUrl('/tables/tables-vertical-noborder-compact')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });


    gemini.suite('tables-width', (child) => {
        child.setUrl('/tables/tables-width')
            .before((actions, find) => {
                actions.waitForElementToShow('table', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('table')
            .capture('default');
    });
});