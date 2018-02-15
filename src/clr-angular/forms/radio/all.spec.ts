/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import RadioContainerSpecs from "./radio-container.spec";
import RadioSpecs from "./radio.spec";

describe("Radio component", function() {
    RadioContainerSpecs();
    RadioSpecs();
});
