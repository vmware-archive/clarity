/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CssHelpers extends HTMLElement {}

export class CssHelpers {
  hasClassname(text: string) {
    return this.classList.contains(text);
  }

  addClassname(text: string) {
    this.classList.add(text);
  }

  removeClassname(text: string) {
    this.classList.remove(text);
  }

  removeClassnamesUnless(classnamesToRemove: string[], classnamesToKeep: string[]) {
    classnamesToRemove.forEach(removeMe => {
      if (classnamesToKeep.indexOf(removeMe) < 0) {
        this.classList.remove(removeMe);
      }
    });
  }

  removeClassnames(classnamesToRemove: string[]) {
    this.removeClassnamesUnless(classnamesToRemove, []);
  }

  updateEquilateralStyles(size?: string) {
    this.style.width = size || '';
    this.style.height = size || '';
  }

  removeEquilateralStyles() {
    this.updateEquilateralStyles();
  }

  addEquilateralStyles(size: string) {
    this.updateEquilateralStyles(size);
  }
}
