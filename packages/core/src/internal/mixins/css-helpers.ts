/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  addClassnames,
  hasClassnames,
  removeClassnames,
  removeClassnamesUnless,
  updateElementStyles,
} from '../utils/css.js';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CssHelpers extends HTMLElement {}

export class CssHelpers {
  hasClassname(text: string) {
    return hasClassnames(this, text);
  }

  addClassname(text: string) {
    addClassnames(this, text);
  }

  removeClassname(text: string) {
    removeClassnames(this, text);
  }

  removeClassnamesUnless(classnamesToRemove: string[], classnamesToKeep: string[]) {
    removeClassnamesUnless(this, classnamesToRemove, classnamesToKeep);
  }

  removeClassnames(classnamesToRemove: string[]) {
    removeClassnames(this, ...classnamesToRemove);
  }

  updateEquilateralStyles(size = '') {
    updateElementStyles(this, ['width', size], ['height', size]);
  }

  removeEquilateralStyles() {
    this.updateEquilateralStyles();
  }

  addEquilateralStyles(size: string) {
    this.updateEquilateralStyles(size);
  }
}
