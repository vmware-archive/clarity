/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */


import ExpandSpecs from "./providers/expand.spec";
import IfExpandSpecs from "./if-expanded.spec";

describe("If Expand Directive", function() {
    describe("Providers", function() {
        ExpandSpecs();
    });
    describe("Components", function() {
        IfExpandSpecs();
    });
});
