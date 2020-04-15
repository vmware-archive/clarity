/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// eslint-disable-next-line no-restricted-imports
import { getTestBed } from '@angular/core/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed();
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
