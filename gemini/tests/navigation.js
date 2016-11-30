var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('navigation', (child) => {

    gemini.suite('header-types', (child) => {
        child.setUrl('/navigation/headers/header-types')
            .before((actions, find) => {
                actions.waitForElementToShow('.header', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example .main-container')
            .capture('default');
    });

    gemini.suite('header-colors', (child) => {
        child.setUrl('/navigation/headers/header-colors')
            .before((actions, find) => {
                actions.waitForElementToShow('.header', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example .main-container')
            .capture('default');
    });

    // gemini.suite('header-types-old', (child) => {
    //     child.setUrl('/navigation/headers/header-types-old')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('.clr-example .main-container', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //         })
    //         .setCaptureElements('.clr-example .main-container')
    //         .capture('default');
    // });

    gemini.suite('nav-tabs', (child) => {
        child.setUrl('/navigation/nav-tabs')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example .nav', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example .nav')
            .capture('default');
    });

    gemini.suite('sidenav', (child) => {
        child.setUrl('/navigation/sidenav')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example .main-container', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example .main-container')
            .capture('default');
    });

    gemini.suite('subnav', (child) => {
        child.setUrl('/navigation/subnav')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example .main-container', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example .main-container')
            .capture('default');
    });

});