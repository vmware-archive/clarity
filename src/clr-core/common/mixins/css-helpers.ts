/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class CssHelpers {
  hasClassname(text: string) {
    return (this as Partial<HTMLElement>).classList.contains(text);
  }

  addClassname(text: string) {
    (this as Partial<HTMLElement>).classList.add(text);
  }

  removeClassname(text: string) {
    (this as Partial<HTMLElement>).classList.remove(text);
  }

  removeClassnamesUnless(classnamesToRemove: string[], classnamesToKeep: string[]) {
    classnamesToRemove.forEach(removeMe => {
      if (classnamesToKeep.indexOf(removeMe) < 0) {
        (this as Partial<HTMLElement>).classList.remove(removeMe);
      }
    });
  }

  removeClassnames(classnamesToRemove: string[]) {
    this.removeClassnamesUnless(classnamesToRemove, []);
  }

  updateEquilateralStyles(size: string | null) {
    (this as Partial<HTMLElement>).style.width = size;
    (this as Partial<HTMLElement>).style.height = size;
  }

  removeEquilateralStyles() {
    this.updateEquilateralStyles(null);
  }

  addEquilateralStyles(size: string) {
    this.updateEquilateralStyles(size);
  }
}
