var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('button-group', (child) => {

    gemini.suite('basic-button-group', (child) => {
        child
            .setUrl('/button-group/basic-button-group')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

    gemini.suite('basic-button-group-click', (child) => {
        child
            .setUrl('/button-group/basic-button-group')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default')
            .capture('click the dropdown toggle', function(actions, find) {
                this.toggleButton = find('#btn-group-test1 .dropdown-toggle');
                actions.click(this.toggleButton);
                actions.wait(WAIT_TIME);
            });
    });

    gemini.suite('static-button-group', (child) => {
        child
            .setUrl('/button-group/static-button-group')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

    gemini.suite('hide-overflow-menu', (child) => {
        child
            .setUrl('/button-group/hide-overflow-menu')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

    gemini.suite('menu-directions', (child) => {
        child
            .setUrl('/button-group/menu-directions')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

    gemini.suite('projection-update-test', (child) => {
        child
            .setUrl('/button-group/projection-update-test')
            .before((actions, find) => {
                actions.waitForElementToShow('main.content-area', WAIT_TIME);
            })
            .setCaptureElements('.content-area')
            .capture('default');
    });

});
