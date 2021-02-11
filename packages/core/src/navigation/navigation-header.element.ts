/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { addAttributeValue, baseStyles, i18n, I18nService, property, querySlot } from '@cds/core/internal';
import { styles } from './navigation-header.element.css.js';
import { NavigationLayout } from '@cds/core/navigation/utils/interfaces';
import { defaultNavigationLayout } from '@cds/core/navigation/utils';
import { CdsIcon } from '@cds/core/icon';

/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-header>
 *
 * </cds-navigation-header>
 * ```
 *
 * @element cds-navigation-header
 * @slot
 */
export class CdsNavigationHeader extends LitElement {
  @property({ type: Boolean }) expanded = false;

  @property({ type: String }) layout: NavigationLayout = defaultNavigationLayout;

  @i18n() i18n = I18nService.keys.navigation;

  @querySlot('cds-icon', { assign: 'header-icon' }) protected headerIcon: CdsIcon;

  private get defaultIconTemplate() {
    return html`
      <cds-icon shape="angle" direction="left" direction="${this.expanded ? 'left' : 'right'}" size="md"></cds-icon>
    `;
  }

  // Need two layout template, vertical and horizontal

  protected getLayoutTemplate(layout: NavigationLayout) {
    switch (layout) {
      case 'horizontal':
        return html``; // TODO(matthew): remove this, it the parent should never project anything here for x-axis
      default:
        // vertical
        return html`
          <div cds-layout="horizontal align:vertical-center">
            <span cds-layout="${this.expanded ? '' : 'display:screen-reader-only'}">
              <slot></slot>
            </span>
            <span cds-layout="${this.expanded ? 'align:right' : 'align:horizontal-center'}">
              ${this.headerIcon ? html`<slot name="header-icon"></slot>` : this.defaultIconTemplate}
            </span>
          </div>
        `;
    }
  }

  render() {
    // TODO(matthew): fix this tempalate for horizontal and vertical with default toggle icon
    // return this.getLayoutTemplate(this.layout);
    return html`<slot></slot>`;
  }

  firstUpdated(props: Map<string, any>) {
    super.updated(props);
    addAttributeValue(this, 'cds-layout', 'horizontal align:vertical-center');
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
