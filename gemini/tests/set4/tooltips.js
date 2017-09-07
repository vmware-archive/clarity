var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 2000;

gemini.suite('tooltips', (child) => {

    gemini.suite('sizes', (child) => {
        child.setUrl('/tooltips/sizes')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default')
            .capture('hover', function(actions, find) {
                actions.mouseMove(find('.tooltip'));
                actions.wait(WAIT_TIME);
            });
    });

    gemini.suite('directions', (child) => {
        child.setUrl('/tooltips/directions')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default')
            .capture('hover', function(actions, find) {
                actions.mouseMove(find('.tooltip'));
                actions.wait(WAIT_TIME);
            });
    });

    gemini.suite('angular', (child) => {
        child.setUrl('/tooltips/angular')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default')
            .capture('hover', function(actions, find) {
                actions.mouseMove(find('.tooltip'));
                actions.wait(WAIT_TIME);
            });
    });

});