/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { state, property } from '../decorators/property.js';
import { createId } from '../utils/identity.js';
import { FirstFocusController } from '../controllers/first-focus.controller.js';
import { ClosableController } from '../controllers/closable.controller.js';
import { InlineFocusTrapController } from '../controllers/inline-focus-trap.controller.js';

export class CdsBaseFocusTrap extends LitElement {
  firstFocusController = new FirstFocusController(this);

  closableController = new ClosableController(this);

  protected inlineFocusTrapController = new InlineFocusTrapController(this);

  @state({ type: Boolean, reflect: true })
  protected demoMode = false;

  @state({ type: String }) protected focusTrapId: string;

  constructor() {
    super();
    this.focusTrapId = createId();
  }

  /**
   * Its recommended to remove or add a focus trap element from the DOM
   * some SSR systems can have technical constraints where the item can
   * only be removed via CSS/hidden.
   */
  @property({ type: Boolean }) hidden = false;

  protected render() {
    return html`<slot></slot>`;
  }
}
