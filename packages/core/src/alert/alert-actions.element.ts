/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AlertGroupTypes, CdsAlert } from '@clr/core/alert';
import { CdsButton } from '@clr/core/button';
import {
  addClassnames,
  assignSlotNames,
  baseStyles,
  property,
  querySlotAll,
  registerElementSafely,
  removeAttributes,
  removeClassnames,
  setAttributes,
} from '@clr/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './alert-actions.element.css.js';

export function getAlertActionsLayout(type: AlertGroupTypes | string, isParentClosable?: boolean): string | boolean {
  const defaultLayoutValues = 'align:vertical-center';
  const sharedLayoutValues = 'horizontal gap:xs p-l:md';
  const bannerAlertLayoutValues = 'align-left align:horizontal-stretch';
  const nonClosableAlertActionsPadding = isParentClosable ? '' : type === 'banner' ? 'p-r:xs' : 'p-r:sm';

  switch (type) {
    case 'default':
      return [sharedLayoutValues, defaultLayoutValues, nonClosableAlertActionsPadding].join(' ');
    case 'banner':
      return [bannerAlertLayoutValues, sharedLayoutValues, nonClosableAlertActionsPadding].join(' ');
    default:
      return false;
  }
}

export function setActionButtonStyles(type: AlertGroupTypes | string): (b: CdsButton) => void {
  const alertBtnClassname = 'alert-btn';
  switch (type) {
    case 'banner':
      return (b: CdsButton) => {
        setAttributes(b, ['status', 'inverse'], ['size', 'sm']);
        removeClassnames(b, alertBtnClassname);
      };
    default:
      // 'default' or 'light' alerts
      return (b: CdsButton) => {
        removeAttributes(b, 'status', 'size');
        addClassnames(b, alertBtnClassname);
      };
  }
}

// this fn is cordoning off the stateful smarts of action button layouts and buttons
// the intent is to minimize the surface area of the component's brains
// warning: side effects ahead!
function updateLayoutsAndActionButtonStyles(alertActionsComponent: CdsAlertActions, parentAlert: CdsAlert) {
  const actionsLayout = getAlertActionsLayout(alertActionsComponent.type, parentAlert.closable);
  const buttonStyleSetter = setActionButtonStyles(alertActionsComponent.type);
  setAttributes(alertActionsComponent, ['cds-layout', actionsLayout]);
  alertActionsComponent.buttons.forEach(buttonStyleSetter);
}

/**
 * Web component alert actions to be used inside default and banner alerts.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-alert>
 *    Lorem ipsum dolor sit amet
 *    <cds-alert-actions>
 *       <cds-button>Fix</cds-button>
 *    </cds-alert-actions>
 * </cds-alert>
 * ```
 *
 * @beta
 * @element cds-alert-actions
 * @slot default
 * @cssprop --action-text-color: changes the color of the text and border of the action button
 * @cssprop --action-hover-text-color: changes the color of the text and border of the action button on hover
 */
export class CdsAlertActions extends LitElement {
  @property({ type: String })
  type: AlertGroupTypes | string = 'light';

  @querySlotAll('cds-button') buttons: NodeListOf<CdsButton>;

  connectedCallback() {
    super.connectedCallback();
    assignSlotNames([this, 'actions']);
    updateLayoutsAndActionButtonStyles(this, this.parentElement as CdsAlert);
  }

  updated() {
    updateLayoutsAndActionButtonStyles(this, this.parentElement as CdsAlert);
  }

  render() {
    return html`<div class="private-host"><slot></slot></div>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-alert-actions', CdsAlertActions);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert-actions': CdsAlertActions;
  }
}
