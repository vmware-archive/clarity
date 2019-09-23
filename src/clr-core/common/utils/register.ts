/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function registerElementSafely(tagName: string, elementClass: any) {
  const elementExists = !!customElements.get(tagName);

  if (elementExists) {
    console.warn(`${tagName} has already been registered`);
  } else {
    customElements.define(tagName, elementClass);
  }
}
