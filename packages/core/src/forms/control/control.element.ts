/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, TemplateResult } from 'lit';
import { query } from 'lit/decorators/query.js';
import {
  baseStyles,
  property,
  querySlot,
  querySlotAll,
  childrenUpdateComplete,
  getElementLanguageDirection,
  event,
  EventEmitter,
  describeElementByElements,
  updateComponentLayout,
  state,
  syncProps,
  pxToRem,
  getElementUpdates,
  hasAriaLabelTypeAttr,
} from '@cds/core/internal';
import { CdsControlMessage } from './../control-message/control-message.element.js';
import styles from './control.element.scss';
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

export const enum ControlLabelLayout {
  default = 'default',
  ariaLabel = 'aria-label',
  inputGroup = 'input-group',
  hiddenLabel = 'hidden-label',
}

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
 * @element cds-control
 * @slot - For projecting input and label
 * @cssprop --label-width
 */
export class CdsControl extends LitElement {
  /**
   * Set the status of form control validation
   * @type {neutral | error | success}
   */
  @property({ type: String }) status: ControlStatus = 'neutral';

  /**
   * Adjust the control from the default full width or the browser default width
   * @type {stretch | shrink}
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
   * Set to adjust the default control layout. When `responsive` is true this will be the largest size to scale to.
   * @type {vertical | horizontal | compact}
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

  @state({ type: Boolean, reflect: true }) protected focused = false;

  @state({ type: Boolean, reflect: true }) protected disabled = false;

  @state({ type: Boolean, reflect: true }) protected readonly = false;

  @state() protected fixedControlWidth = false;

  @state() protected supportsPrefixSuffixActions = true;

  @state()
  protected get isRTL() {
    return getElementLanguageDirection(this) === 'rtl';
  }

  /** @private */
  @state() labelLayout: ControlLabelLayout = ControlLabelLayout.default;

  /** @private Used for control/form groups */
  @querySlot('input, select, textarea, [cds-control]', {
    required: 'error',
    requiredMessage: 'input element is missing',
    assign: 'input',
  })
  inputControl: HTMLInputElement;

  @querySlot('label', {
    required: 'error',
    requiredMessage: 'To meet a11y standards either a <label> or input[aria-label] should be provided.',
    assign: 'label',
    exemptOn: _this => {
      return _this.hasAriaLabelTypeAttr;
    },
  })
  protected label: HTMLLabelElement;

  /** @private */
  @query('cds-internal-control-label[action=primary]') controlLabel: CdsInternalControlLabel;

  @querySlot('datalist', { assign: 'datalist' }) protected datalistControl: HTMLDataListElement;

  @querySlotAll('cds-control-message') protected messages: NodeListOf<CdsControlMessage>;

  @querySlotAll('cds-control-action') protected controlActions: NodeListOf<CdsControlAction>;

  @query('.prefix') private prefixAction: HTMLElement;

  @query('.suffix') private suffixAction: HTMLElement;

  @query('.messages') private messageSlot: HTMLElement;

  @event() layoutChange: EventEmitter<ControlLayout>;

  protected observers: (MutationObserver | ResizeObserver)[] = [];

  static get styles() {
    return [baseStyles, styles];
  }

  private get hasAriaLabelTypeAttr() {
    return hasAriaLabelTypeAttr(this.inputControl);
  }

  private get hasStatusIcon() {
    return this.labelLayout !== ControlLabelLayout.inputGroup && (this.status === 'error' || this.status === 'success');
  }

  render() {
    return html`
      ${this.labelLayout === ControlLabelLayout.hiddenLabel || this.labelLayout === ControlLabelLayout.inputGroup
        ? html`<span cds-layout="display:screen-reader-only"
            ><slot name="label" @slotchange=${() => this.associateInputAndLabel()}></slot
          ></span>`
        : ''}
      <div
        cds-layout="${this.layout === 'vertical' ? 'vertical gap:sm' : 'horizontal gap:lg'} align:stretch"
        class="private-host ${this.isRTL ? 'rtl' : ''}"
      >
        ${this.primaryLabelTemplate}
        <div
          class="input-message-container"
          cds-layout="
          wrap:none
          ${this.layout === 'compact' ? 'horizontal' : 'vertical'}
          ${this.controlWidth === 'stretch' && !this.fixedControlWidth ? 'align:horizontal-stretch' : ''}
          ${this.messages?.length ? 'gap:sm' : ''}"
        >
          <div cds-layout="horizontal gap:sm wrap:none">
            <div
              cds-layout="horizontal align:top wrap:none ${this.controlWidth === 'shrink' || this.fixedControlWidth
                ? 'align:shrink'
                : 'align:horizontal-stretch'}"
              class="${this.hasStatusIcon ? 'input-container with-status-icon' : 'input-container'}"
            >
              ${this.inputTemplate} ${this.prefixTemplate}
              <slot name="input"></slot>
              ${this.suffixTemplate}
            </div>
            ${this.hasStatusIcon ? getStatusIcon(this.status) : ''}
          </div>
          ${this.messagesTemplate}
          <slot name="datalist" @slotchange=${() => this.associateInputToDatalist()}></slot>
        </div>
      </div>
    `;
  }

  protected get inputTemplate() {
    return html``;
  }

  protected get prefixDefaultTemplate(): TemplateResult | null {
    return null;
  }

  protected get suffixDefaultTemplate(): TemplateResult | null {
    return null;
  }

  private get isGenericControl() {
    return this.tagName.toLowerCase() === 'cds-control';
  }

  private get hasControlActions() {
    return this.controlActions.length > 0 || this.prefixDefaultTemplate || this.suffixDefaultTemplate;
  }

  private get primaryLabelTemplate() {
    return html`
      ${this.labelLayout === ControlLabelLayout.default
        ? html` <cds-internal-control-label
            .disabled="${this.disabled}"
            cds-layout="align:shrink align:top"
            action="primary"
          >
            <slot name="label" @slotchange=${() => this.associateInputAndLabel()}></slot>
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

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('cds-control', '');
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupHostAttributes();
    this.setupHTML5Validation();
    this.setActionOffsetPadding();
    this.setupResponsive();
    this.setupDescribedByUpdates();
    this.setupLabelLayout();
    this.assignSlotIfInControlGroup();
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    this.messages.forEach(message => syncProps(message, this, { disabled: props.has('disabled') }));

    syncProps(this.inputControl, this, { disabled: props.has('disabled') });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  protected associateInputAndLabel() {
    associateInputAndLabel(this.inputControl, this.label);
  }

  private associateInputToDatalist() {
    associateInputToDatalist(this.inputControl, this.datalistControl);
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
    this.observers.push(
      getElementUpdates(this.inputControl, 'disabled', (value: any) => (this.disabled = value === '' ? true : value)),
      getElementUpdates(
        this.inputControl,
        'aria-disabled',
        (value: any) => (this.disabled = value === 'true' ? true : false)
      ),
      getElementUpdates(this.inputControl, 'readonly', (value: any) => (this.readonly = value === '' ? true : value))
    );
  }

  private setupHTML5Validation() {
    if (!this.inputControl?.form?.noValidate && this.validate) {
      syncHTML5Validation(this, Array.from(this.messages));
    }
  }

  private async setActionOffsetPadding() {
    const prefix = (this.prefixAction as LitElement)?.updateComplete;
    const suffix = (this.suffixAction as LitElement)?.updateComplete;
    (await prefix) ? prefix : Promise.resolve(true);
    (await suffix) ? suffix : Promise.resolve(true);
    await childrenUpdateComplete(this.controlActions);

    if (!this.isGenericControl && this.supportsPrefixSuffixActions && this.hasControlActions) {
      const start = pxToRem(this.prefixAction.getBoundingClientRect().width + 6);
      const end = pxToRem(this.suffixAction.getBoundingClientRect().width + 6);
      this.inputControl.style.setProperty('padding-left', this.isRTL ? end : start, 'important');
      this.inputControl.style.setProperty('padding-right', this.isRTL ? start : end, 'important');
    }
  }

  get layoutStable() {
    return (
      this.labelLayout !== ControlLabelLayout.default ||
      !controlIsWrapped(this.inputControl, this.controlLabel, this.layout)
    );
  }

  private setupResponsive() {
    if (this.responsive && this.labelLayout === ControlLabelLayout.default && this.controlLabel) {
      const layoutConfig = { layouts: formLayouts, initialLayout: this.layout };
      const observer = updateComponentLayout(this, layoutConfig, () =>
        this.layoutChange.emit(this.layout, { bubbles: true })
      );
      this.observers.push(observer);
    }
  }

  private setupLabelLayout() {
    if (this.label?.getAttribute('cds-layout')?.includes('display:screen-reader-only')) {
      this.labelLayout = ControlLabelLayout.hiddenLabel;
    }

    if (this.hasAriaLabelTypeAttr) {
      this.labelLayout = ControlLabelLayout.ariaLabel;
    }
  }

  private assignSlotIfInControlGroup() {
    if (this.parentElement?.hasAttribute('cds-control-group')) {
      this.setAttribute('slot', 'controls');
    }
  }
}
