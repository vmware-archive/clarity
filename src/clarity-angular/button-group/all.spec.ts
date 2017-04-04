/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import ButtonGroupSpecs from "./button-group.spec";
import ButtonSpecs from "./button.spec";
import ButtonInGroupServiceSpecs from "./providers/buttonInGroup.service.spec";

describe("Button Group Directives", () => {
    ButtonSpecs();
    ButtonInGroupServiceSpecs();
    ButtonGroupSpecs();
});