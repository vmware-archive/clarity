import "core-js";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "zone.js/dist/sync-test";
import "zone.js/dist/proxy";
import "zone.js/dist/jasmine-patch";

const browserTesting = require("@angular/platform-browser-dynamic/testing");
const coreTesting = require("@angular/core/testing");
// include every .spec.ts file inside src, except for those in ks-app folder
const context = (require as any).context("../src/", true, /^((?![\\/]ks-app[\\/]).)*\.spec\.ts$/);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

coreTesting.TestBed.resetTestEnvironment();
coreTesting.TestBed.initTestEnvironment(browserTesting.BrowserDynamicTestingModule,
                                        browserTesting.platformBrowserDynamicTesting());

context.keys().forEach(context);
