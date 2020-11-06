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
  listenForAttributeChange,
  childrenUpdateComplete,
  getElementLanguageDirection,
  event,
  EventEmitter,
  describeElementByElements,
  updateComponentLayout,
  supportsResizeObserver,
  internalProperty,
  syncProps,
} from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { CdsControlMessage } from './../control-message/control-message.element.js';
import { styles } from './control.element.css.js';
import { ControlStatus, ControlLayout, ControlWidth } from './../utils/interfaces.js';
import { syncHTML5Validation } from '../utils/validate.js';
import {
  associateInputToDatalist,
  getStatusIcon,
  associateInputAndLabel,
  controlIsWrapped,
  formLayouts,
  defaultFormLayout,
  defaultControlWidth,
  getCurrentMessageStatus,
} from '../utils/index.js';
import { CdsInternalControlLabel } from '../control-label/control-label.element.js';
import { CdsControlAction } from '../control-action/control-action.element.js';

/**
 * Generic Control
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>control</label>
 *   <input type="text" />
 * </cds-control>
 * ```
 *
 * @slot - For projecting input and label
 */
export class CdsControl extends LitElement {
  /**
   * @type {neutral | error | success}
   * Set the status of form control validation
   */
  @property({ type: String }) status: ControlStatus = 'neutral';

  /**
   * @type {stretch | shrink}
   * Adjust the control from the default full width or the browser default width
   */
  @property({ type: String }) controlWidth: ControlWidth = defaultControlWidth;

  /**
   * Set the validate attribute to sync with HTML5 native validation
   * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
   */
  @property({ type: Boolean }) validate = false;

  /**
   * By default forms will collapse to layout that prevents overflow.
   * If disabled control layout may break or overflow in unexpected ways.
   */
  @property({ type: Boolean }) responsive = true;

  /**
   * @type {vertical | horizontal | compact}
   * Set to adjust the default control layout. When `responsive` is true this will be the largest size to scale to.
   */
  @property({ type: String })
  get layout(): ControlLayout {
    return this._layout;
  }

  set layout(value: ControlLayout) {
    const oldValue = this._layout;
    this._layout = value ? (value.replace('-inline', '') as ControlLayout) : defaultFormLayout; // auto convert any form-layouts from parent groups
    this.requestUpdate('layout', oldValue);
  }

  private _layout: ControlLayout = defaultFormLayout;

  @internalProperty({ type: Boolean, reflect: true }) protected focused = false;

  @internalProperty({ type: Boolean, reflect: true }) protected disabled = false;

  @internalProperty() protected fixedControlWidth = false;

  @internalProperty() protected supportsPrefixSuffixActions = true;

  @internalProperty()
  protected get isRTL() {
    return getElementLanguageDirection(this) === 'rtl';
  }

  /** @private Used for hiding label for input groups */
  @internalProperty() hiddenLabel = false;

  /** @private Used for control/form groups */
  @querySlot('input, select, textarea, [cds-control]', {
    required: 'error',
    requiredMessage: 'input element is missing',
    assign: 'input',
  })
  inputControl: HTMLInputElement;

  @querySlot('label', {
    required: 'error',
    requiredMessage: 'To meet a11y standards a <label> should be provided.',
    assign: 'label',
  })
  protected label: HTMLLabelElement;

  /** @private */
  @query('cds-internal-control-label[action=primary]') controlLabel: CdsInternalControlLabel;

  @querySlot('datalist') protected datalistControl: HTMLDataListElement;

  @querySlotAll('cds-control-message') protected messages: NodeListOf<CdsControlMessage>;

  @querySlotAll('cds-control-action') protected controlActions: NodeListOf<CdsControlAction>;

  @id() protected inputControlId: string;

  @query('.prefix') private prefixAction: HTMLElement;

  @query('.suffix') private suffixAction: HTMLElement;

  @query('.messages') private messageSlot: HTMLElement;

  @event() layoutChange: EventEmitter<ControlLayout>;

  protected observers: (MutationObserver | ResizeObserver)[] = [];

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      ${this.hiddenLabel ? html`<span cds-layout="display:screen-reader-only"><slot name="label"></slot></span>` : ''}
      <div
        cds-layout="${this.layout === 'vertical' ? 'vertical gap:sm' : 'horizontal gap:lg'} align:stretch"
        class="private-host ${this.isRTL ? 'rtl' : ''}"
      >
        ${this.primaryLabelTemplate}
        <div
          cds-layout="
          ${this.layout === 'compact' ? 'horizontal' : 'vertical'}
          ${this.controlWidth === 'stretch' && !this.fixedControlWidth ? 'align:horizontal-stretch' : ''}
          ${this.messages?.length ? 'gap:sm' : ''}"
        >
          <div cds-layout="horizontal gap:sm wrap:none">
            <div
              cds-layout="horizontal align:top wrap:none ${this.controlWidth === 'shrink' || this.fixedControlWidth
                ? 'align:shrink'
                : 'align:horizontal-stretch'}"
              class="input-container"
            >
              ${this.inputTemplate} ${this.prefixTemplate}
              <slot name="input"></slot>
              ${this.suffixTemplate}
            </div>
            ${this.hiddenLabel ? '' : getStatusIcon(this.status)}
          </div>
          ${this.messagesTemplate}
        </div>
      </div>
    `;
  }

  protected get inputTemplate() {
    return html``;
  }

  protected get prefixDefaultTemplate() {
    return html``;
  }

  protected get suffixDefaultTemplate() {
    return html``;
  }

  private get primaryLabelTemplate() {
    return html`
      ${!this.hiddenLabel
        ? html` <cds-internal-control-label
            .disabled="${this.disabled}"
            cds-layout="align:shrink align:top"
            action="primary"
          >
            <slot name="label"></slot>
          </cds-internal-control-label>`
        : ''}
    `;
  }

  protected get messagesTemplate() {
    return html`
      <div cds-layout="${this.layout === 'compact' ? 'align:shrink' : ''}" class="messages">
        <slot name="message"></slot>
      </div>
    `;
  }

  private get prefixTemplate() {
    return html`
      <div cds-layout="align:shrink align:vertical-center" class="prefix">
        <div cds-layout="horizontal gap:xs">
          ${this.prefixDefaultTemplate}
          <slot name="prefix"></slot>
        </div>
      </div>
    `;
  }

  private get suffixTemplate() {
    return html`
      <div cds-layout="align:shrink align:vertical-center" class="suffix">
        <div cds-layout="horizontal gap:xs">
          <slot name="suffix"></slot>
          ${this.suffixDefaultTemplate}
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
    this.setAttribute('cds-control', '');
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    associateInputAndLabel(this.inputControl, this.label, this.inputControlId);
    associateInputToDatalist(this.inputControl, this.datalistControl);
    this.setupHostAttributes();
    this.setupHTML5Validation();
    this.setActionOffsetPadding();
    this.setupResponsive();
    this.setupDescribedByUpdates();
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    syncProps(this.inputControl, this, { disabled: props.has('disabled') });
    this.messages.forEach(message => syncProps(message, this, { disabled: props.has('disabled') }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  private setupDescribedByUpdates() {
    this.messageSlot?.addEventListener('slotchange', async () => {
      describeElementByElements(this.inputControl, Array.from(this.messages));
      getCurrentMessageStatus(Array.from(this.messages)).then(s => (this.status = s));
    });
  }

  private setupHostAttributes() {
    this.inputControl.addEventListener('focusin', () => (this.focused = true));
    this.inputControl.addEventListener('focusout', () => (this.focused = false));
    this.disabled = this.inputControl.disabled;
    this.observers.push(
      listenForAttributeChange(this.inputControl, 'disabled', () => (this.disabled = this.inputControl.disabled))
    );
  }

  private setupHTML5Validation() {
    if (!this.inputControl?.form?.noValidate && this.validate) {
      syncHTML5Validation(this, Array.from(this.messages));
    }
  }

  private async setActionOffsetPadding() {
    await childrenUpdateComplete(this.controlActions);
    if (this.supportsPrefixSuffixActions) {
      const start = `${this.prefixAction.getBoundingClientRect().width + 6}px`;
      const end = `${this.suffixAction.getBoundingClientRect().width + 6}px`;
      this.inputControl.style.setProperty('padding-left', this.isRTL ? end : start, 'important');
      this.inputControl.style.setProperty('padding-right', this.isRTL ? start : end, 'important');
    }
  }

  get layoutStable() {
    return this.hiddenLabel || !controlIsWrapped(this.inputControl, this.controlLabel, this.layout);
  }

  private setupResponsive() {
    if (supportsResizeObserver() && this.responsive && !this.hiddenLabel && this.controlLabel) {
      const layoutConfig = { layouts: formLayouts, initialLayout: this.layout };
      const observer = updateComponentLayout(this, layoutConfig, () =>
        this.layoutChange.emit(this.layout, { bubbles: true })
      );
      this.observers.push(observer);
    }
  }
}
