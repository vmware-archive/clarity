var core = require('@angular/core');
var cardDemoModule = require('clarity-demos/card/demo/card.demo.module');
var progressBarsInCardsDemoModule = require('clarity-demos/progress-bars/demo/progress-bars.demo.module');
var listsInCardsDemoModule = require('clarity-demos/lists/demo/lists.demo.module');
var alertInCardsDemoModule = require('clarity-demos/alert/demo/alert.demo.module');

// ALWAYS name the export AppComponent
exports.AppComponent = core.Component({
        // ALWAYS use selector my-app and this "dynamic" template
        selector: 'my-app',
        template: document.getElementById("app-template").innerHTML
    })
    .Class({
        constructor: function() {}
    });

// ALWAYS name the export demosModule
// this module looks a bit different from others because the page uses
// two modules from Clarity package
exports.DemosModule = core.NgModule({
    exports: [
        cardDemoModule.default,
        progressBarsInCardsDemoModule.default,
        listsInCardsDemoModule.default,
        alertInCardsDemoModule.default
    ]
})
.Class({
    constructor: function() {}
});
