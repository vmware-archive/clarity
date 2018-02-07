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

import CommonSpecs from "./common.spec";
import FormControlServiceSpecs from "./form-control.service.spec";
import LabelSpecs from "./label.spec";
import WrappedFormControlSpecs from "./wrapped-form-control.spec";

describe("Forms common utilities", function() {
    FormControlServiceSpecs();
    LabelSpecs();
    WrappedFormControlSpecs();
    CommonSpecs();
});
