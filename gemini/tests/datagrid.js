var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('datagrid', (child) => {

    // gemini.suite('structure', (child) => {
    //     child.setUrl('/datagrid/structure')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .ignoreElements({ every: '.datagrid-cell'})
    //         .capture('default');
    // });
    //
    // gemini.suite('sorting', (child) => {
    //     child.setUrl('/datagrid/sorting')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //             actions.click(find('.datagrid-column-title:not(:disabled)'));
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .ignoreElements({ every: '.datagrid-cell'})
    //         .capture('default');
    // });
    //
    // gemini.suite('filtering', (child) => {
    //     child.setUrl('/datagrid/filtering')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //             actions.click(find('.datagrid-filter-toggle'));
    //
    //         })
    //         .setCaptureElements('.datagrid-filter')
    //         .capture('default');
    // });
    //
    // gemini.suite('string-filtering', (child) => {
    //     child.setUrl('/datagrid/string-filtering')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //             actions.click(find('.datagrid-filter-toggle'));
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .ignoreElements({ every: '.datagrid-cell'})
    //         .capture('default');
    // });
    //
    // gemini.suite('pagination', (child) => {
    //     child.setUrl('/datagrid/pagination')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .ignoreElements({ every: '.datagrid-cell'})
    //         .capture('default')
    //         .capture('page-2', function(actions, find) {
    //             actions.click(find('.pagination button'));
    //             actions.wait(WAIT_LOAD_TIME);
    //         })
    //         .capture('page-next', function(actions, find) {
    //             actions.click(find('.pagination .pagination-next'));
    //             actions.wait(WAIT_LOAD_TIME);
    //         });
    // });
    //
    // gemini.suite('selection', (child) => {
    //     child.setUrl('/datagrid/selection')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .ignoreElements({ every: '.datagrid-cell:not(.datagrid-select):not(.datagrid-row-actions)'})
    //         .capture('default')
    //         .capture('click-one', function(actions, find) {
    //             actions.click(find('.datagrid-cell .checkbox'));
    //             actions.wait(WAIT_LOAD_TIME);
    //         })
    //         .capture('click-all', function(actions, find) {
    //             actions.click(find('.datagrid-column-title .checkbox'));
    //             actions.wait(WAIT_LOAD_TIME);
    //         })
    //         .capture('single-row', function(actions, find) {
    //             actions.click(find('.datagrid-row-actions clr-icon'));
    //             actions.wait(WAIT_LOAD_TIME);
    //         });
    // });
    //
    // gemini.suite('placeholder', (child) => {
    //     child.setUrl('/datagrid/placeholder')
    //         .before((actions, find) => {
    //             actions.waitForElementToShow('main.content-area', WAIT_TIME);
    //             actions.wait(WAIT_LOAD_TIME);
    //             actions.executeJS(function(window) {
    //                 document.getElementsByClassName('datagrid-wrapper')[0].scrollIntoView();
    //             });
    //         })
    //         .setCaptureElements('.datagrid-wrapper')
    //         .capture('default');
    // });
    //
});