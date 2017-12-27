/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import AlertSpecs from "./alert.spec";
import AlertIconAndTypesServiceSpecs from "./providers/icon-and-types.service.spec";

describe("Alert Tests", () => {
    AlertSpecs();
    AlertIconAndTypesServiceSpecs();
});
