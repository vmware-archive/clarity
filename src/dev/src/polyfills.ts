/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// https://stackoverflow.com/questions/54764616/problem-with-angular-element-support-in-chrome-and-ie11-simultaneously
// ...said to include this before the polyfills listed below.
import 'core-js/shim';

/* IE10 and IE11 requires the following for NgClass support on SVG elements */
// import "classlist.js"; // Run `npm install --save classlist.js`.

/* Evergreen browsers require these. */
import 'core-js/es6/reflect';

/*
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 */
import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
// the following flag is set to prevent errors in IE11 related to zone.js showing up randomly
(window as any).__Zone_enable_cross_context_check = true;
import 'zone.js/dist/zone'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
