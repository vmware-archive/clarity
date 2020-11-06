/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, query } from 'lit-element';
import {
  baseStyles,
  property,
  querySlot,
  querySlotAll,
  id,
  event,
  EventEmitter,
  syncDefinedProps,
  describeElementByElements,
  updateComponentLayout,
  supportsResizeObserver,
  setAttributes,
  syncProps,
} from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { CdsControl } from '../control/control.element.js';
import { styles } from './control-group.element.css.js';
import { ControlStatus, FormLayout, ControlWidth } from '../utils/interfaces.js';
import { CdsControlMessage } from '../control-message/control-message.element.js';
import { CdsInternalControlInline } from './../control-inline/control-inline.element.js';
import { CdsInternalControlLabel } from '../control-label/control-label.element.js';
import {
  getStatusIcon,
  controlIsWrapped,
  formLayouts,
  inlineControlListIsWrapped,
  defaultFormLayout,
  defaultControlWidth,
  getCurrentMessageStatus,
} from '../utils/index.js';

/**
 * Internal Control Group
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-group>
 *   <label>...</label>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 * </cds-internal-control-group>
 * ```
 *
 * @element cds-internal-control-group
 * @slot - For projecting control group
 */
export class CdsInternalControlGroup extends LitElement {
  /**
   * @type {neutral | error | success}
   * Set the status of control group validation
   */
  @property({ type: String }) status: ControlStatus = 'neutral';

  /** @type {horizontal | horizontal-inline | vertical | vertical-inline | compact} */
  @property({ type: String }) layout: FormLayout = defaultFormLayout;

  /** Align the labels of controls within group left or right */
  @property({ type: String }) controlAlign: 'left' | 'right' = 'left';

  /** Disable all controls within a control group or omit and disable controls individually */
  @property({ type: Boolean }) disabled = false;

  /**
   * @type {stretch | shrink}
   * Adjust the control from the default full width or the browser default width
   */
  @property({ type: String }) controlWidth: ControlWidth = defaultControlWidth;

  /**
   * By default forms will collapse to layout that prevents overflow.
   * If disabled control layout may break or overflow in unexpected ways.
   */
  @property({ type: Boolean }) responsive = true;

  @querySlot('label', {
    assign: 'label',
    required: 'warning',
    requiredMessage: 'To meet a11y standards a <label> should be provided',
  })
  protected label: HTMLLabelElement;

  @querySlotAll('cds-control, [cds-control], [cds-inline-control]', { assign: 'controls' })
  protected controls: NodeListOf<CdsControl | CdsInternalControlInline>;

  @querySlotAll('cds-control-message') protected messages: NodeListOf<CdsControlMessage>;

  /** @private */
  @query('cds-internal-control-label[action=primary]') controlLabel: CdsInternalControlLabel;

  @query('.controls') private controlSlot: HTMLElement;

  @query('.messages') private messageSlot: HTMLElement;

  @id() private groupLabelId: string;

  @event() protected layoutChange: EventEmitter<FormLayout>;

  protected isInlineControlGroup = false;

  protected isControlGroup = true;

  protected observers: (MutationObserver | ResizeObserver)[] = [];

  static get styles() {
    return [baseStyles, styles];
  }

  protected get messagesTemplate() {
    return html`
      <div cds-layout="horizontal align:shrink ${this.messages?.length ? 'gap:sm' : ''}" class="messages-container">
        ${!this.isInlineControlGroup ? getStatusIcon(this.status) : ''}
        <div class="messages">
          <slot name="message"></slot>
        </div>
      </div>
    `;
  }

  protected get controlsTemplate() {
    return this.isInlineControlGroup
      ? html`
          <div cds-layout="horizontal gap:sm align:horizontal-stretch" class="input-container">
            <div class="controls" cds-layout="horizontal align:horizontal-stretch">
              <slot name="controls"></slot>
            </div>
            ${getStatusIcon(this.status)}
          </div>
        `
      : html`
          <div cds-layout="horizontal align:shrink" class="input-container">
            <div class="controls" cds-layout="${this.inlineControlLayout}">
              <slot name="controls"></slot>
            </div>
          </div>
        `;
  }

  private get inlineControlLayout(): string {
    return !this.layout.includes('inline') && this.layout !== 'compact' ? 'vertical gap:sm' : 'horizontal gap:md';
  }

  private get primaryLabelLayout() {
    return !this.layout.includes('vertical') ? 'horizontal gap:lg' : 'vertical gap:sm';
  }

  private get controlMessageLayout() {
    return `${this.layout === 'compact' ? 'horizontal' : 'vertical'} gap:sm wrap:none align:stretch`;
  }

  render() {
    return html`
      <div class="private-host" cds-layout="${this.primaryLabelLayout}">
        <cds-internal-control-label .disabled=${this.disabled} cds-layout="align:top" action="primary">
          <slot name="label"></slot>
        </cds-internal-control-label>
        <div cds-layout="${this.controlMessageLayout}">
          ${this.controlsTemplate} ${this.messagesTemplate}
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon);
  }

  connectedCallback() {
    super.connectedCallback();
    setAttributes(this, ['role', 'group'], ['cds-control-group', '']);
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.associateLabelAndGroup();
    this.setupDescribedByUpdates();
    this.setupResponsive();
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    props.set('isControlGroup', true);
    this.controls.forEach((c: any) => (c.isControlGroup = true));
    this.messages.forEach(message => syncProps(message, this, { disabled: props.has('disabled') }));
    syncDefinedProps(props, this, Array.from(this.controls));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  get layoutStable() {
    return (
      !inlineControlListIsWrapped(Array.from(this.controls), this.layout) &&
      !controlIsWrapped(this.controlSlot, this.controlLabel, this.layout)
    );
  }

  private associateLabelAndGroup() {
    this.setAttribute('aria-labelledby', this.groupLabelId);
    this.label.setAttribute('id', this.groupLabelId);
  }

  private setupDescribedByUpdates() {
    this.messageSlot?.addEventListener('slotchange', () => {
      describeElementByElements(this, Array.from(this.messages));
      getCurrentMessageStatus(Array.from(this.messages)).then(s => (this.status = s));
    });
  }

  private setupResponsive() {
    if (supportsResizeObserver() && this.responsive) {
      const layoutConfig = { layouts: formLayouts, initialLayout: this.layout };
      const observer = updateComponentLayout(this, layoutConfig, () =>
        this.layoutChange.emit(this.layout, { bubbles: true })
      );
      this.observers.push(observer);
    }
  }
}
