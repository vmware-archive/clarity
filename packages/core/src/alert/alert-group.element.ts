/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, query } from 'lit-element';
import { baseStyles, property, querySlot, querySlotAll, syncProps } from '@cds/core/internal';
import { CdsAlert } from './alert.element.js';
import { AlertGroupTypes, AlertStatusTypes, AlertSizes } from './alert.interfaces.js';
import { styles } from './alert-group.element.css.js';

/**
 * Alert groups are containers for a set of alerts. Alert groups can hold one or many alerts
 * inside of them with the expectation that all alerts will be of the same type. The exception
 * to this rule is the `loading` alert type, which will be displayed regardless of the type
 * of alert group containing it.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
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
 * @element cds-alert-group
 * @slot - Content slot for the alerts
 * @cssprop --color
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 */
export class CdsAlertGroup extends LitElement {
  /**
   * @type {default | sm}
   * Sets the overall height and width of the alerts inside the alert group
   */
  @property({ type: String })
  size: AlertSizes = 'default';

  /**
   * @type {default | banner | light}
   * Passed down into the alerts inside the alert-group
   */
  @property({ type: String })
  type: AlertGroupTypes = 'default';

  /**
   * Autosets the alert groups aria role to 'region'
   */
  @property({ type: String })
  role = 'region';

  /**
   * @type {default | info | success | warning | danger | unknown | loading}
   * Sets the status of the alerts inside the alert group
   */
  @property({ type: String })
  status: AlertStatusTypes = 'default';

  @querySlotAll('cds-alert') private alerts: NodeListOf<CdsAlert>;

  /** @private */
  @querySlot('.pager', { assign: 'pager' }) pager: HTMLElement;

  @query('.alerts') private alertSlot: HTMLElement;

  render() {
    return html`
      <div
        cds-layout="${this.pager ? 'horizontal wrap:none' : 'horizontal'}"
        class="${this.pager ? 'private-host' : 'private-host no-pager'}"
      >
        <div class="pager-wrapper" cds-layout="p-x:lg">
          <slot name="pager"></slot>
        </div>
        <div class="alert-group-wrapper">
          <div
            class="alerts"
            cds-layout="vertical wrap:none align:horizontal-stretch fill ${this.size === 'sm' ? 'gap:none' : 'gap:sm'}"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupAlertsUpdate();
  }

  private setupAlertsUpdate() {
    const propsToSync = { status: true, type: true, size: true };
    this.alertSlot?.addEventListener('slotchange', () => this.syncAlerts(propsToSync));
  }

  private async syncAlerts(propsToSync: { status: boolean; type: boolean; size: boolean }) {
    await Promise.all(Array.from(this.alerts).map(a => a.updateComplete));

    this.alerts.forEach(alert =>
      syncProps(alert, this, {
        status: propsToSync.status && this.type !== 'light' && alert.status !== 'loading',
        type: propsToSync.type,
        size: propsToSync.size,
      })
    );
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    this.syncAlerts({
      status: props.has('status'),
      type: props.has('type'),
      size: props.has('size'),
    });
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
