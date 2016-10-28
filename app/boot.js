var browser = require("@angular/platform-browser");
var browserDynamic = require("@angular/platform-browser-dynamic");
var core = require("@angular/core");
var clarityAngular = require('clarity-angular');

exports.bootstrap = function(component, demosModule) {
    var appModule = core.NgModule({
        imports: [
            browser.BrowserModule,
            clarityAngular.ClarityModule,
            demosModule
        ],
        declarations: [component],
        bootstrap: [component]
    }).Class({
        constructor: function() {}
    });
    browserDynamic.platformBrowserDynamic().bootstrapModule(appModule);
};
