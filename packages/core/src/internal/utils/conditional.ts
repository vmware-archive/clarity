/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

type BoolFn = () => boolean;

export function returnOrFallthrough(conditions: [BoolFn, () => any][], fallthrough: () => any) {
  const truthyCondition = conditions.find(cond => cond[0]() === true);
  if (truthyCondition) {
    return truthyCondition[1]();
  }
  return fallthrough();
}

export function anyPassOrAnyFail(truths: BoolFn[], untruths: BoolFn[], fallthrough: boolean): boolean {
  const mapOfTruth = truths.map((fn: BoolFn) => fn());

  if (mapOfTruth.indexOf(true) > -1) {
    return true;
  }

  const mapOfUntruth = untruths.map((fn: BoolFn) => fn());

  if (mapOfUntruth.indexOf(true) > -1) {
    return false;
  }

  return fallthrough;
}
