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

import {addHelpers} from "../../data/datagrid/helpers.spec";

import OptionSpecs from "./option.spec";
import OptionsSpecs from "./options.spec";
import OptionSelectionProviderSpecs from "./providers/option-selection.service.spec";
import SelectionOptionIntegrationSpecs from "./select-with-option.integration.spec";
import SelectionOptionsMenuIntegrationSpecs from "./select-with-options-menu.integration.spec";
import SelectSpecs from "./select.spec";

describe("Select component", function() {
    addHelpers();

    describe("Directives", () => {
        SelectSpecs();
        OptionsSpecs();
        OptionSpecs();
    });

    describe("Integration Tests", () => {
        SelectionOptionIntegrationSpecs();
        SelectionOptionsMenuIntegrationSpecs();
    });

    describe("Providers", () => {
        OptionSelectionProviderSpecs();
    });
});
