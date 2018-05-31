/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 10000;
var WAIT_LOAD_TIME = 2000;

// TODO: revisit this in 0.12
// gemini.suite('datagrid', (child) => {
//
//     gemini.suite('basic-custom-cell', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#basic-custom-cell', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('basic-custom-cell').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#basic-custom-cell')
//             .capture('default')
//             .capture('toggle-scroll-on', function(actions, find) {
//                 actions.click(find('#btn-toggle'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('toggle-scroll-off', function(actions, find) {
//                 actions.click(find('#btn-toggle'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('smart-iter-and-binding', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#smart-iter-and-binding', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('smart-iter-and-binding').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#smart-iter-and-binding')
//             .capture('default')
//             .capture('sort-asc', function(actions, find) {
//                 actions.click(find('#sort-asc'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('sort-desc', function(actions, find) {
//                 actions.click('#sort-desc');
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('sort-clear', function(actions, find) {
//                 actions.click('#sort-clear');
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('filters-and-pagination', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#filters-and-pagination', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('filters-and-pagination').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#filters-and-pagination')
//             .capture('default')
//             .capture('page-2', function(actions, find) {
//                 actions.click(find('.pagination button'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('filter-clicked', function(actions, find) {
//                 actions.click(find('#filters-and-pagination .datagrid-filter-toggle'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('filter-applied', function(actions, find) {
//                 actions.sendKeys(find('.datagrid-filter input'), 'b');
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('second-filter-clicked', function(actions, find) {
//                 actions.click(find('#filters-and-pagination .datagrid-filter-toggle:last-child'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('single-selection', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#single-selection', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('single-selection').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#single-selection')
//             .capture('default')
//             .capture('selected', function(actions, find) {
//                 actions.click(find('#single-selection .radio'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('multl-selection', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#multl-selection', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('multl-selection').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#multl-selection')
//             .capture('default')
//             .capture('action-overflow', function(actions, find) {
//                 actions.click(find('#multl-selection .datagrid-action-toggle'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('action-overflow-selected', function(actions, find) {
//                 actions.click(find('#multl-selection .action-item'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('select-all', function(actions, find) {
//                 actions.click(find('#multl-selection .datagrid-column input[type=checkbox]'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('select-none', function(actions, find) {
//                 actions.click(find('#multl-selection .datagrid-column input[type=checkbox]'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('select-1', function(actions, find) {
//                 actions.click(find('#multl-selection .datagrid-cell input[type=checkbox]'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('placeholder', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#placeholder', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('placeholder').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#placeholder')
//             .capture('default');
//     });
//
//     gemini.suite('vertical-scrolling', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#vertical-scrolling', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('vertical-scrolling').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#vertical-scrolling')
//             .capture('default');
//     });
//
//     gemini.suite('horizontal-scrolling', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#horizontal-scrolling', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('horizontal-scrolling').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#horizontal-scrolling')
//             .capture('default');
//     });
//
//     gemini.suite('smart-column-sizing', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#smart-column-sizing', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('smart-column-sizing').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#smart-column-sizing')
//             .capture('default');
//     });
//
//     gemini.suite('expandable-rows', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#expandable-rows', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('expandable-rows').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#expandable-rows')
//             .capture('default')
//             .capture('expanded', function(actions, find) {
//                 actions.click(find('#expandable-rows .datagrid-expandable-caret button'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('columns', function(actions, find) {
//                 actions.click(find('#detail-columns'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('replace', function(actions, find) {
//                 actions.click(find('#replace'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('fixed-height', function(actions, find) {
//                 actions.click(find('#fixed-height'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('selectable', function(actions, find) {
//                 actions.click(find('#selectable'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
//
//     gemini.suite('hide-show', (child) => {
//         child.setUrl('/datagrid/kitchen-sink')
//             .before((actions, find) => {
//                 actions.waitForElementToShow('#hide-show', WAIT_TIME);
//                 actions.wait(WAIT_LOAD_TIME);
//                 actions.executeJS(function (window) {
//                     document.getElementById('hide-show').scrollIntoView();
//                 });
//             })
//             .setCaptureElements('#hide-show')
//             .capture('default')
//             .capture('toggle-id', function(actions, find) {
//                 actions.click(find('#toggle-id'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('toggle-action', function(actions, find) {
//                 actions.click(find('#hide-show .column-toggle--action'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('hide-one', function(actions, find) {
//                 actions.click(find('#hide-show .switch-content input[type=checkbox]'));
//                 actions.wait(WAIT_LOAD_TIME);
//             })
//             .capture('click-ok', function(actions, find) {
//                 actions.click(find('#hide-show .column-switch-wrapper button'));
//                 actions.wait(WAIT_LOAD_TIME);
//             });
//     });
// });
