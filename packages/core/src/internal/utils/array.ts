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

export function arrayTail<T>(arr: T[]): T | undefined {
  return arr.length ? arr[arr.length - 1] : void 0;
}

export function arrayHead<T>(arr: T[]): T | undefined {
  return arr.length ? arr[0] : void 0;
}

export function previousInArray<T>(current: T, arr: T[]): T | undefined {
  const idx = arr.indexOf(current);
  return idx === -1 ? void 0 : arr[Math.max(idx - 1, 0)];
}

export function nextInArray<T>(current: T, arr: T[]): T | undefined {
  const idx = arr.indexOf(current);
  return idx === -1 ? void 0 : arr[Math.min(idx + 1, arr.length - 1)];
}

export function arrayRemoveFirstInstance<T>(val: T, arr: T[]): T[] {
  const newArr = Array.from(arr);
  const i = arr.indexOf(val);

  if (i > -1) {
    newArr.splice(i, 1);
  }

  return newArr;
}

export function arrayRemoveLastInstance<T>(val: T, arr: T[]): T[] {
  const reversedArr = Array.from(arr).reverse();
  return arrayRemoveFirstInstance(val, reversedArr).reverse();
}

export function arrayRemoveAllInstances<T>(val: T | T[], arr: T[]): T[] {
  const arrayRemovalMachine = ([].concat(val as never) as unknown) as T[];
  return arr.filter(item => !arrayRemovalMachine.includes(item));
}

export function groupArray<T>(arr: T[], size: number) {
  return [...arr].reduce((acc, val, i) => {
    const idx = Math.floor(i / size);
    const page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
  }, [] as T[][]);
}

export async function* asyncGroupArray(items: any[], batch = 100): any {
  const values = groupArray(items, batch);
  for (let i = 0; i < values.length; i++) {
    yield values[i];
    await new Promise(r => setTimeout(r, 0));
  }
}
