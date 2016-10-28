var core = require('@angular/core');
var inputFieldsDemoModule = require('clarity-demos/input-fields/demo/input-fields.demo.module');
var formsDemoModule = require('clarity-demos/forms/demo/forms.demo.module');

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
        inputFieldsDemoModule.default,
        formsDemoModule.default
    ]
})
.Class({
    constructor: function() {}
});