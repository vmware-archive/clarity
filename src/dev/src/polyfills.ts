/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/* IE9, IE10 and IE11 requires all of the following polyfills. */
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/* IE10 and IE11 requires the following for NgClass support on SVG elements */
// import "classlist.js"; // Run `npm install --save classlist.js`.

/* Evergreen browsers require these. */
import 'core-js/es6/reflect';

/* Polyfill for icons web components */
import '@webcomponents/custom-elements';

/*
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 */
import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
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
