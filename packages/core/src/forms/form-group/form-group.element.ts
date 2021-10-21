/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import {
  baseStyles,
  querySlotAll,
  property,
  childrenUpdateComplete,
  elementResize,
  pxToRem,
  syncDefinedProps,
  elementVisible,
} from '@cds/core/internal';
import { CdsInternalControlGroup } from '../control-group/control-group.element.js';
import { CdsInternalControlInline } from '../control-inline/control-inline.element.js';
import { CdsControl } from '../control/control.element.js';
import { FormLayout, ControlWidth } from '../utils/interfaces.js';
import { getLargestPrimaryLabelWidth, isVerticalLayout, defaultFormLayout } from '../utils/index.js';
import styles from './form-group.element.scss';

/**
 * Form
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-form-group layout="horizontal">
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 *
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 * </cds-form-group>
 * ```
 *
 * @element cds-form-group
 * @slot - For projecting input controls
 * @cssprop --label-width
 */
export class CdsFormGroup extends LitElement {
  /**
   * Set to adjust the default control layout for all controls within form group.
   * When `responsive` is true this will be the largest size to scale to.
   * @type {horizontal | horizontal-inline | vertical | vertical-inline | compact}
   */
  @property({ type: String }) layout: FormLayout = defaultFormLayout;

  /**
   * Adjust the control from the default full width or the browser default width
   * @type {stretch | shrink}
   */
  @property({ type: String }) controlWidth: ControlWidth; // no default given so child controls are not overridden unless explicity set by parent form group

  /**
   * By default forms will collapse to layout that prevents overflow.
   * If disabled control layout may break or overflow in unexpected ways.
   */
  @property({ type: Boolean }) responsive = true;

  /**
   * Set the validate attribute to sync with HTML5 native validation
   * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
   */
  @property({ type: Boolean }) validate = false;

  @querySlotAll('[cds-control]') private controls: NodeListOf<CdsControl | CdsInternalControlInline>;

  @querySlotAll('[cds-control-group]') private groups: NodeListOf<CdsInternalControlGroup>;

  protected observers: (MutationObserver | ResizeObserver)[] = [];

  private get controlsAndGroups() {
    return [...Array.from(this.groups), ...Array.from(this.controls)];
  }

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="private-host" cds-layout="vertical gap:${this.layout === 'compact' ? 'md' : 'lg'}">
        <slot></slot>
      </div>
    `;
  }

  private overflowElement: CdsControl | null;

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.syncLayouts();
    this.setControlLabelWidths();
    this.observers.push(elementVisible(this, () => this.setControlLabelWidths()));
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    syncDefinedProps(props, this, this.controlsAndGroups);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  private async setControlLabelWidths() {
    if (this.layout === 'horizontal' || this.layout === 'horizontal-inline' || this.layout === 'compact') {
      await childrenUpdateComplete(this.controlsAndGroups);
      this.style.setProperty('--internal-label-min-width', await getLargestPrimaryLabelWidth(this.controlsAndGroups));
      elementResize(this, () =>
        this.style.setProperty('--internal-label-max-width', pxToRem(this.getBoundingClientRect().width))
      );
    }
  }

  private syncLayouts() {
    this.addEventListener<any>('layoutChange', (e: CustomEvent) => {
      e.preventDefault();

      if (!this.overflowElement && isVerticalLayout(e.detail)) {
        this.collapseForm(e.target as CdsControl);
      }

      if (e.target === this.overflowElement && !isVerticalLayout(e.detail)) {
        this.expandForm(e.detail);
      }
    });
  }

  private collapseForm(control: CdsControl) {
    this.overflowElement = control;
    this.responsive = false;
    this.layout = 'vertical';
    control.updateComplete.then(() => (control.responsive = true));
  }

  private expandForm(layout: FormLayout) {
    this.responsive = true;
    this.overflowElement = null;
    this.layout = layout;
  }
}
