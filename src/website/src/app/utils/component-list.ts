/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as COMPONENT_JSON from '../../settings/componentlist.json';

export const COMPONENT_MAP = new Map();

for (const component of COMPONENT_JSON.list) {
  COMPONENT_MAP.set(component.url, component);
}

export function componentList({ component }) {
  return component;
}
