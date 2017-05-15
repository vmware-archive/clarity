/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {addHelpers} from "../../utils/testing/helpers.spec";
import SignpostSpecs from "./signpost.specs";
import SignpostContentSpecs from "./signpost-content.specs";

import SignpostTriggerDirectiveSpecs from "./signpost-trigger.directive.specs";

// Stand alone directive and service.
import IfOpenDirectiveSpecs from "./if-open.directive.specs";
import IfOpenServiceSpecs from "./if-open.service.specs";

describe("Signpost", function() {
    addHelpers();

    describe("Components", function() {
        SignpostSpecs();
        SignpostContentSpecs();
        SignpostTriggerDirectiveSpecs();
    });

    describe("Stand-alone", function() {
        IfOpenDirectiveSpecs();
        IfOpenServiceSpecs();
    });
});
