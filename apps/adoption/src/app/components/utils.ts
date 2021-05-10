/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Basic version of deep copy - won't work with Date, Map, Set, Functions and more.
 * But will do the job to copy simple data structures that don't have complex objects inside.
 * @param object any
 * @returns any
 */
export function deepCopy(object: Record<any, any>): Record<any, any> {
  return JSON.parse(JSON.stringify(object));
}
