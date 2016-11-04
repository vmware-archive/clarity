var core = require('@angular/core');
var layoutDemoModule = require('clarity-demos/layout/demo/layout.demo.module');
var navDemoModule = require('clarity-demos/nav/demo/nav.demo.module');

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
        layoutDemoModule.default,
        navDemoModule.default
    ]
})
.Class({
    constructor: function() {}
});
