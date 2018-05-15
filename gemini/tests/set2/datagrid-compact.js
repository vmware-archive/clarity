/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const WAIT_TIME = 10000;
const WAIT_LOAD_TIME = 2000;

// TODO: revisit this in 0.12
// let geminiSuiteFor = (suiteElementId, additionalCaptures = {}) => {
//
//     let execJSFuncInBrowserScope = new Function("window", `document.getElementById('${suiteElementId}').scrollIntoView();`);
//
//     return gemini.suite(suiteElementId, (child) => {
//         Object.keys(additionalCaptures).reduce((fromPrevCapture, captureName) => {
//             return fromPrevCapture.capture(captureName, additionalCaptures[captureName]);
//         }, child.setUrl("/datagrid/compact")
//             .before((actions, find) => {
//                 actions.waitForElementToShow("#" + suiteElementId, WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(execJSFuncInBrowserScope);
//             })
//             .setCaptureElements("#" + suiteElementId).capture("default"));
//     });
// };
//
// gemini.suite('datagrid-compact', () => {
//     geminiSuiteFor("datagrid-compact-basic-structure");
//     geminiSuiteFor("datagrid-compact-smart-iterator");
//     geminiSuiteFor("datagrid-compact-filters-pagination");
//     geminiSuiteFor("datagrid-compact-single-selection");
//     geminiSuiteFor("datagrid-compact-multi-selection", {
//         'select-all': function (actions, find) {
//             actions.click(find('#datagrid-compact-multi-selection .datagrid-column input[type=checkbox]'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'select-none': function (actions, find) {
//             actions.click(find('#datagrid-compact-multi-selection .datagrid-column input[type=checkbox]'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'select-1': function (actions, find) {
//             actions.click(find('#datagrid-compact-multi-selection .datagrid-cell input[type=checkbox]'));
//             actions.wait(WAIT_LOAD_TIME);
//         }
//     });
//     geminiSuiteFor("datagrid-compact-placeholder");
//     geminiSuiteFor("datagrid-compact-vertical-scrolling");
//     geminiSuiteFor("datagrid-compact-horizontal-scrolling");
//     geminiSuiteFor("datagrid-compact-smart-column-sizing");
//     geminiSuiteFor("datagrid-compact-expandable-rows", {
//         'expanded': function (actions, find) {
//             actions.click(find('#datagrid-compact-expandable-rows .datagrid-expandable-caret button'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'columns': function (actions, find) {
//             actions.click(find('#detail-columns'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'replace': function (actions, find) {
//             actions.click(find('#replace'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'fixed-height': function (actions, find) {
//             actions.click(find('#fixed-height'));
//             actions.wait(WAIT_LOAD_TIME);
//         },
//         'selectable': function (actions, find) {
//             actions.click(find('#selectable'));
//             actions.wait(WAIT_LOAD_TIME);
//         }
//     });
//     geminiSuiteFor("datagrid-compact-hide-show-columns");
//     geminiSuiteFor("datagrid-compact-with-signpost");
// });
