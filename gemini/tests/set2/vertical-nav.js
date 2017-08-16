var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('vertical-nav', (child) => {

    gemini.suite('nested-menus', (child) => {
        child
            .setUrl('/vertical-nav/nested-menus')
            .before((actions, find) => {
                actions.waitForElementToShow('.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

    gemini.suite('nested-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('nested-icon-menus', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('nested-icon-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('partial-nested-menus', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('partial-nested-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('partial-nested-icon-menus', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default');
    });

    gemini.suite('partial-nested-icon-menus-collapsed', (child) => {
        child
        .setUrl('/vertical-nav/partial-nested-icon-menus')
        .before((actions, find) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
            actions.click(find('.gemini-trigger'));
            actions.wait(WAIT_TIME);
        })
        .setCaptureElements('.content-area')
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
