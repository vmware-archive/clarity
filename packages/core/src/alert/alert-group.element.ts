/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon';
import '@clr/core/internal-components';
import {
  assignSlotNames,
  baseStyles,
  property,
  querySlot,
  querySlotAll,
  registerElementSafely,
} from '@clr/core/internal';
import { AlertGroupTypes, AlertStatusTypes, CdsAlert } from '@clr/core/alert';
import { styles } from './alert-group.element.css.js';
import { html, LitElement } from 'lit-element';

type AlertSizes = 'default' | 'sm';

/**
 * Alert groups are containers for a set of alerts. Alert groups can hold one or many alerts
 * inside of them with the expectation that all alerts will be of the same type. The exception
 * to this rule is the `loading` alert type, which will be displayed regardless of the type
 * of alert group containing it.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 *   <cds-alert-group type="danger">
 *     <cds-alert closable="true">
 *       Single alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *     <cds-alert type="loading">
 *       Single Alert
 *     </cds-alert>
 *     <cds-alert closable="true">
 *       Another alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *   </cds-alert-group>
 * ```
 *
 * @beta
 * @element cds-alert-group
 * @slot default - Content slot for the alerts
 * @cssprop --color
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --border-color
 * @cssprop --border-width
 */
export class CdsAlertGroup extends LitElement {
  /** Sets the overall height and width of the alerts inside the alert group */
  @property({ type: String })
  size: AlertSizes = 'default';

  /**
   * Passed down into the alerts inside the alert-group
   */
  @property({ type: String })
  type: AlertGroupTypes = 'default';

  /** Sets the status of the alerts inside the alert group */
  @property({ type: String })
  status: AlertStatusTypes | '';

  @querySlotAll('cds-alert') private alerts: NodeListOf<CdsAlert>;

  @querySlot('.pager') pager: HTMLElement;

  private updateAlertSizes() {
    this.alerts.forEach(alrt => {
      alrt.size = this.size;
    });
  }

  private updateAlertStatuses() {
    if (this.type === 'light' && !this.status) {
      return;
    }
    if (this.type === 'banner') {
      this.updateBannerAlertGroupStatus();
    } else {
      this.alerts.forEach(alrt => {
        if (alrt.isInitted && alrt.status !== 'loading') {
          alrt.status = this.status;
        }
      });
    }
  }

  updateBannerAlertGroupStatus() {
    this.status = this.alerts[0].status || '';
  }

  private updateAlertTypes() {
    this.alerts.forEach(alrt => {
      alrt.alertGroupType = this.type;
    });
  }

  private updateAlerts() {
    this.updateAlertTypes();
    this.updateAlertStatuses();
    this.updateAlertSizes();
  }

  private alertTypesSet = false;

  connectedCallback() {
    super.connectedCallback();
    if (!this.alertTypesSet) {
      this.updateAlerts();
      this.alertTypesSet = true;
    }
    if (this.pager) {
      assignSlotNames([this.pager, 'pager']);
    }
  }

  updated() {
    this.updateAlerts();
  }

  render() {
    return html`
      <div
        cds-layout="${this.pager ? 'horizontal no-wrap' : 'horizontal'}"
        class="${this.pager ? 'private-host' : 'private-host no-pager'}"
      >
        <div class="pager-wrapper" cds-layout="p-x:lg">
          <slot name="pager"></slot>
        </div>
        <div
          class="alert-group-wrapper"
          cds-layout="${this.size === 'sm'
            ? 'vertical no-wrap gap:none align:horizontal-stretch'
            : 'vertical no-wrap gap:sm align:horizontal-stretch'}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-alert-group', CdsAlertGroup);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert-group': CdsAlertGroup;
  }
}
