var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('grid', (child) => {

    gemini.suite('grid-columns', (child) => {
        child.setUrl('/grid/grid-columns')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-column-stacking', (child) => {
        child.setUrl('/grid/grid-column-stacking')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-column-offsetting', (child) => {
        child.setUrl('/grid/grid-column-offsetting')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-column-push', (child) => {
        child.setUrl('/grid/grid-column-push')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-column-pull', (child) => {
        child.setUrl('/grid/grid-column-pull')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-auto-layout-1', (child) => {
        child.setUrl('/grid/grid-auto-layout-1')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-auto-layout-2', (child) => {
        child.setUrl('/grid/grid-auto-layout-2')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-items-vertical-alignment', (child) => {
        child.setUrl('/grid/grid-items-vertical-alignment')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-items-individual-vertical-alignment', (child) => {
        child.setUrl('/grid/grid-items-individual-vertical-alignment')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

    gemini.suite('grid-items-horizontal-alignment', (child) => {
        child.setUrl('/grid/grid-items-horizontal-alignment')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_LOAD_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
    });

});