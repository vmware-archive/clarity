/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const COMPONENT_JSON = require("../../settings/componentlist.json");

export const COMPONENT_MAP = new Map();

for (let component of COMPONENT_JSON.list) {
    COMPONENT_MAP.set(component.url, component);
}

export function componentList({ component }) {
    return component;
}
