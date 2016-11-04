var core = require('@angular/core');
var codeHighlightDemoModule = require('clarity-demos/code/demo/code-highlight.demo.module');

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
exports.DemosModule = codeHighlightDemoModule.default;