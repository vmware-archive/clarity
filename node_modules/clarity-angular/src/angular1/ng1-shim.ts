// /*
//  * This file should not be used in a pure Angular 2 application.
//  * DO NOT document it.
//  *
//  * Its purpose is to attach "handles" to the global scope when using the Angular 1
//  * self-executing bundle. This bundle goes through each of our modules, which means this will
//  * be executed on page load.
//  *
//  * The user can then use Clarity without depending on Angular and RxJS himself, and most
//  * importantly without using SystemJS at all.
//  * Just include the self-executing bundle on the page and:
//  *
//  *     Clarity.bootstrap(document.body, ["my-app"], {strictDi: true});
//  *
//  *
//  * To unit-test hybrid components, you need to follow these 3 steps:
//  * 1) Declare the Clarity upgrader module:
//  *     Clarity.declareModule(["my-app"]);
//  * 2) Before each test, instead of calling beforeEach(module("my-app")), call:
//  *     beforeEach(Clarity.init());
//  * 3) Once you"re done registering all the modules you need and before tests, where you generally
//  * start calling inject(), make sure you wait for the Angular 2 part of the app to be ready:
//  *     beforeEach(Clarity.ready());
//  */
//
// import {UPGRADE_ADAPTER} from "./upgrade-adapter";
//
// let Clarity = (<any> window).Clarity = {
//     declareModule: UPGRADE_ADAPTER.declareNg1Module.bind(UPGRADE_ADAPTER),
//     init: function() {
//         return Clarity.upgradeAdapterRef = UPGRADE_ADAPTER.initForNg1Tests();
//     },
//     ready: function(done) {
//         window["angular"].mock.inject(() => Clarity.upgradeAdapterRef.ready(done));
//     },
//     bootstrap: function() {
//         return Clarity.upgradeAdapterRef = UPGRADE_ADAPTER.bootstrap.apply(UPGRADE_ADAPTER, arguments);
//     },
//     upgradeAdapterRef: null
// }