var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('dropdown', (child) => {

    gemini.suite('default', (child) => {
        child.setUrl('/dropdown/default')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('positioning', (child) => {
        child.setUrl('/dropdown/positioning')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('fontawesome-toggle', (child) => {
        child.setUrl('/dropdown/fontawesome-toggle')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('buttonlink-toggle', (child) => {
        child.setUrl('/dropdown/buttonlink-toggle')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('angular-positioning', (child) => {
        child.setUrl('/dropdown/angular-positioning')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('multi-click', (child) => {
        child.setUrl('/dropdown/multi-click')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('dropdown-header', (child) => {
        child.setUrl('/dropdown/dropdown-header')
            .before((actions) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default')
            .capture('click the dropdown toggle', function(actions, find) {
                this.toggleButton = find('.clr-example .dropdown-toggle');
                actions.click(this.toggleButton);
                actions.wait(WAIT_TIME);
            });
    });

});
