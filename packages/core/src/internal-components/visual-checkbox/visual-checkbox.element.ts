/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { baseStyles, property } from '@cds/core/internal';
import styles from './visual-checkbox.element.scss';

export class CdsInternalVisualCheckbox extends LitElement {
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Boolean, reflect: true })
  selected = false;

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html` <div class="private-host"></div> `;
  }
}
