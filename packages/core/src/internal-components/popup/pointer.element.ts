/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AriaBooleanAttributeValues, PointerElement, property, state } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import { getPointer } from './utils/pointer.utils.js';
import styles from './pointer.element.scss';

/**
 * ```typescript
 * import '@cds/core/internal-components/popup/register.js';
 * ```
 *
 * ```html
 * <cds-internal-pointer></cds-internal-pointer>
 * ```
 *
 * @beta
 * @element cds-internal-pointer
 * @slot - Content slot to override the default pointer SVG
 * @cssprop --pointer-fill
 * @cssprop --pointer-outline
 * @cssprop --transform
 *
 */
export class CdsInternalPointer extends LitElement implements PointerElement {
  @state({ type: String, reflect: true, attribute: 'aria-hidden' })
  protected ariaHiddenAttr: AriaBooleanAttributeValues = 'true';

  @property({ type: String })
  axisAlign: 'start' | 'center' | 'end' = 'start';

  /**
   * The "angle" pointer type is the right-angle triangle that we are used to seeing with signposts.
   * The "default" pointer type is an equilateral triangle like we see with the pop-outs in the
   * datagrid single row actions.
   *
   * @type {('angle' | 'default')}
   * @memberof CdsInternalPointer
   */
  @property({ type: String })
  type: 'angle' | 'default';

  protected get pointerTemplate() {
    return getPointer(this.type);
  }

  protected render() {
    // this prevents an impossible state where you have a custom SVG inside of a typed pointer
    return this.type ? getPointer(this.type) : html`<slot></slot>`;
  }

  static get styles() {
    return [styles];
  }
}
