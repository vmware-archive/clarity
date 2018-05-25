/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function createKeyboardEvent(code: number, type: string): KeyboardEvent {
  const event: KeyboardEvent = new KeyboardEvent(type);
  Object.defineProperties(event, { keyCode: { get: () => code } });
  return event;
}

export function assertEqualDates(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
