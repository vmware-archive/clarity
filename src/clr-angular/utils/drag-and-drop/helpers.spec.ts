/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export const emulateDragEvent = (
  eventName: string,
  pageX: number = 0,
  pageY: number = 0,
  element: Document | Node = document.body
): void => {
  const emulatedEvent: any = new CustomEvent(eventName, { bubbles: true });
  if (eventName.startsWith('touch')) {
    emulatedEvent.changedTouches = [{ pageX: pageX, pageY: pageY }];
  } else {
    emulatedEvent.pageX = pageX;
    emulatedEvent.pageY = pageY;
  }

  element.dispatchEvent(emulatedEvent);
};
