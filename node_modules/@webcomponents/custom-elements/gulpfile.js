/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

const compilerPackage = require('google-closure-compiler');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const closureCompiler = compilerPackage.gulp();

gulp.task('default', () => {
  return gulp.src('./src/custom-elements.js', {base: './'})
      .pipe(sourcemaps.init())
      .pipe(closureCompiler({
          compilation_level: 'ADVANCED',
          warning_level: 'VERBOSE',
          language_in: 'ECMASCRIPT6_STRICT',
          language_out: 'ECMASCRIPT5_STRICT',
          externs: ['externs/html5.js', 'externs/custom-elements.js'],
          js_output_file: 'custom-elements.min.js',
          new_type_inf: true,
          rewrite_polyfills: false,
        }))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('./'));
});
