/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function returnOrFallthrough(conditions: any[], fallthrough: any) {
  const truthyCondition = conditions.find(cond => !!cond[0]);
  if (truthyCondition) {
    return truthyCondition[1]();
  }
  return fallthrough();
}
