/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/base/common';
import { html, LitElement } from 'lit-element';

import { styles } from './icon.element.css';

// @dynamic
export class CwcIcon extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`<div>Icon Placeholder</div>`;
  }
}

registerElementSafely('cwc-icon', CwcIcon);
