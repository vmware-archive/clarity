/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, TemplateResult } from 'lit-element';
import { FocusTrap } from '../utils/focus-trap.js';
import { property } from '../decorators/property.js';
export class CdsBaseFocusTrap extends LitElement {
  protected focusTrap: FocusTrap;

  @property({ type: Boolean })
  private __demoMode = false;

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.__demoMode) {
      this.focusTrap = new FocusTrap(this);
      this.focusTrap.enableFocusTrap();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (!this.__demoMode) {
      this.focusTrap.removeFocusTrap();
    }
  }

  protected render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
