/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function arrayToObject(arr: any[], key: string) {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
}

export function arrayTail(arr: any[]) {
  return arr.length ? arr[arr.length - 1] : void 0;
}

export function arrayHead(arr: any[]) {
  return arr.length ? arr[0] : void 0;
}

export function previousInArray(current: any, arr: any[]) {
  const idx = arr.indexOf(current);
  return idx === -1 ? void 0 : arr[Math.max(idx - 1, 0)];
}

export function nextInArray(current: any, arr: any[]) {
  const idx = arr.indexOf(current);
  return idx === -1 ? void 0 : arr[Math.min(idx + 1, arr.length - 1)];
}
