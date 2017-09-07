var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('vertical-nav', (child) => {

    gemini.suite('nested-menus-with-text', (child) => {
        child
            .setUrl('/vertical-nav/nested-menus')
            .before((actions, find) => {
                actions.waitForElementToShow('#test-1', WAIT_TIME);
            })
            .setCaptureElements('#test-1')
            .capture('default');
    });

    gemini.suite('nested-menus-with-links', (child) => {
        child
            .setUrl('/vertical-nav/nested-menus')
            .before((actions, find) => {
                actions.waitForElementToShow('#test-2', WAIT_TIME);
            })
            .setCaptureElements('#test-2')
            .capture('default');
    });

    gemini.suite('nested-menus-collapsed-with-text', (child) => {
        child
        .setUrl('/vertical-nav/nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-1', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('#test-1')
        .capture('default');
    });

    gemini.suite('nested-menus-collapsed-with-links', (child) => {
        child
        .setUrl('/vertical-nav/nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-2', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('#test-2')
        .capture('default');
    });




    gemini.suite('nested-icon-menus-with-text', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-1', WAIT_TIME);
        })
        .setCaptureElements('#test-1')
        .capture('default');
    });

    gemini.suite('nested-icon-menus-with-links', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-2', WAIT_TIME);
        })
        .setCaptureElements('#test-2')
        .capture('default');
    });

    gemini.suite('nested-icon-menus-collapsed-with-text', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-1', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('#test-1')
        .capture('default');
    });

    gemini.suite('nested-icon-menus-collapsed-with-links', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('#test-2', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('#test-2')
        .capture('default');
    });




    gemini.suite('partial-nested-menus', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
    });

    gemini.suite('partial-nested-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
    });






    gemini.suite('partial-nested-icon-menus', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
    });

    gemini.suite('partial-nested-icon-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
    });





    //Routing
    gemini.suite('routing', (child) => {
        child
        .setUrl('/vertical-nav/routing')
        .before((actions, find) => {
            actions.waitForElementToShow('.clr-example', WAIT_TIME);
        })
        .setCaptureElements('.clr-example')
        .capture('default');
    });
});
