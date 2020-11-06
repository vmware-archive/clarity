/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit-element';
import {
  baseStyles,
  querySlotAll,
  syncDefinedProps,
  property,
  childrenUpdateComplete,
  elementResize,
} from '@cds/core/internal';
import { CdsInternalControlGroup } from '../control-group/control-group.element.js';
import { CdsInternalControlInline } from '../control-inline/control-inline.element.js';
import { CdsControl } from '../control/control.element.js';
import { FormLayout, ControlWidth } from '../utils/interfaces.js';
import {
  getLargestPrimaryLabelWidth,
  isVerticalLayout,
  defaultFormLayout,
  defaultControlWidth,
} from '../utils/index.js';
import { styles } from './form-group.element.css.js';

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
 */
export class CdsFormGroup extends LitElement {
  /**
   * @type {horizontal | horizontal-inline | vertical | vertical-inline | compact}
   * Set to adjust the default control layout for all controls within form group.
   * When `responsive` is true this will be the largest size to scale to.
   */
  @property({ type: String }) layout: FormLayout = defaultFormLayout;

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

  /**
   * Set the validate attribute to sync with HTML5 native validation
   * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
   */
  @property({ type: Boolean }) validate = false;

  @querySlotAll('[cds-control]') private controls: NodeListOf<CdsControl | CdsInternalControlInline>;

  @querySlotAll('[cds-control-group]') private groups: NodeListOf<CdsInternalControlGroup>;

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
    syncDefinedProps(props, this, this.controlsAndGroups);
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    syncDefinedProps(props, this, Array.from(this.controlsAndGroups));
  }

  private async setControlLabelWidths() {
    await childrenUpdateComplete(this.controlsAndGroups);
    this.style.setProperty(
      '--internal-label-min-width',
      `${await getLargestPrimaryLabelWidth(this.controlsAndGroups)}px`
    );
    elementResize(this, () =>
      this.style.setProperty('--internal-label-max-width', `${this.getBoundingClientRect().width}px`)
    );
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
