/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { searchIcon } from '@cds/core/icon/shapes/search.js';
import { styles as globalStyles } from './search.global.css.js';

/**
 * Search
 *
 * ```typescript
 * import '@cds/core/search/register.js';
 * ```
 *
 * ```html
 * <cds-search>
 *   <label>Search</label>
 *   <input type="search" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-search>
 * ```
 *
 * @element cds-search
 * @slot - For projecting search input and label
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
export class CdsSearch extends CdsControl {
  @globalStyle() protected globalStyles = globalStyles;

  protected get prefixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="search" size="18"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }

  constructor() {
    super();
    ClarityIcons.addIcons(searchIcon);
  }
}
