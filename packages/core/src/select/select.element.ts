/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { globalStyle, state, listenForAttributeChange } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import globalStyles from './select.global.scss';
import styles from './select.element.scss';

/**
 * Select
 *
 * ```typescript
 * import '@cds/core/select';
 * ```
 *
 * ```html
 * <cds-select>
 *   <label>Test</label>
 *   <select>
 *    <option>Option One</option>
 *    <option>Option Two</option>
 *    <option>Option Three</option>
 *   </select>
 * </cds-select>
 * ```
 *
 * @element cds-select
 * @slot - For projecting select and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsSelect extends CdsControl {
  protected get suffixDefaultTemplate() {
    return html`<cds-button-expand expanded readonly></cds-button-expand>`;
  }

  static get styles() {
    return [...super.styles, inputStyles, styles];
  }

  @globalStyle() protected globalStyles = globalStyles;

  @state({ type: Boolean, reflect: true }) protected multiple = false;

  @state({ type: Boolean, reflect: true }) protected size = false;

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.multiple = this.inputControl.hasAttribute('multiple');
    this.observers.push(listenForAttributeChange(this.inputControl, 'multiple', val => (this.multiple = val !== null)));

    this.size = this.inputControl.hasAttribute('size');
    this.observers.push(listenForAttributeChange(this.inputControl, 'size', val => (this.size = val !== null)));
  }
}
