/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addHelpers } from "../datagrid/helpers.spec";

import TabsSpecs from "./tabs.spec";
import TabLinkSpec from "./tab-link.spec";
import TabContentSpec from "./tab-content.spec";
import VTabsContentSpecs from "./vtabs-content.spec";
import VTabsNavLinkSpecs from "./vtabs-nav-link.spec";
import VTabsSpecs from "./vtabs.spec";

describe("VTabs", function() {
    addHelpers();

    TabsSpecs();
    TabLinkSpec();
    TabContentSpec();
    VTabsContentSpecs();
    VTabsNavLinkSpecs();
    VTabsSpecs();
});
