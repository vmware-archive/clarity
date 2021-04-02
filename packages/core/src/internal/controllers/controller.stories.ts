/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { css, html, LitElement } from 'lit';
import {
  state,
  ClosableController,
  customElement,
  FirstFocusController,
  AriaPopupController,
  AriaPopupTriggerController,
} from '@cds/core/internal';
import '@cds/core/badge/register.js';
import { InlineFocusTrapController } from './inline-focus-trap.controller.js';
import { querySlotAll } from '../decorators/query-slot';

export default {
  title: 'Internal Stories/Controllers',
};

const styles = css`
  :host {
    display: inline-block;
    padding: 12px;
    width: 100px;
    border: 2px solid #ccc;
  }
  :host([hidden]) {
    display: none !important;
  }
`;

@customElement('demo-popup')
class DemoAriaPopup extends LitElement {
  ariaPopupController = new AriaPopupController(this);
  static styles = [styles];

  get trigger() {
    return (this.getRootNode() as HTMLElement).querySelector<HTMLElement>(`#${this.getAttribute('anchor')}`);
  }

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('demo-trigger')
class DemoAriaPopupTrigger extends LitElement {
  ariaPopupTriggerController = new AriaPopupTriggerController(this);
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('demo-popup-controller')
class DemoPopupController extends LitElement {
  @state() show = false;

  render() {
    return html`
      <demo-trigger popup="my-popup" id="my-trigger" role="button" tabindex="0" @click=${() => (this.show = true)}
        >trigger</demo-trigger
      ><br />
      <demo-popup ?hidden=${!this.show} anchor="my-trigger" id="my-popup" @click=${() => (this.show = false)}
        >popup</demo-popup
      >
    `;
  }
}

export function ariaPopupController() {
  return html`<demo-popup-controller></demo-popup-controller>`;
}

ariaPopupController.element = DemoPopupController;
ariaPopupController.triggerElement = DemoAriaPopupTrigger;
ariaPopupController.popupElement = DemoAriaPopup;

@customElement('inline-focus-trap-demo')
class DemoInlineFocusTrap extends LitElement {
  protected inlineFocusTrapController = new InlineFocusTrapController(this);

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 200px;
      }
    `,
  ];

  render() {
    return html`
      <slot name="slot-two"></slot>
      <button>shadow dom one</button>
      <slot></slot>
      <span>shadow dom content</span>
      <button>shadow dom two</button>
    `;
  }
}

export function inlineFocusTrap() {
  return html`
    <button>first</button>
    <inline-focus-trap-demo>
      <button>light dom one</button>
      <p>content</p>
      <button cds-first-focus>light dom two</button>
      <section><button>light dom three</button></section>
      <button slot="slot-two">light dom four</button>
    </inline-focus-trap-demo>
    <button>last</button>
  `;
}

inlineFocusTrap.element = DemoInlineFocusTrap;

@customElement('inline-trap-demo')
class InlineTrapDemo extends LitElement {
  @querySlotAll(':scope > *') keyListItems: NodeListOf<HTMLElement>;
  protected inlineFocusTrapController = new InlineFocusTrapController(this);
  protected firstFocusController = new FirstFocusController(this);
  protected closableController = new ClosableController(this);

  static styles = [
    css`
      .private-host {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 200px;
        border: 2px solid #ccc;
        background: #fff;
        padding: 12px;
      }

      :host([hidden]) {
        display: none;
      }

      [cds-focus-trap-boundary] {
        height: 2px;
        width: 100%;
        background: red;
      }
    `,
  ];

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
        <slot name="two"></slot>
      </div>
    `;
  }
}

@customElement('interactive-nested-inline-focus-trap-demo')
class DemoInteractiveNestedInlineFocusTrap extends LitElement {
  @state() show = false;
  @state() showTwo = false;

  render() {
    return html`
      <button>root start</button>
      <inline-trap-demo id="1">
        <button cds-first-focus>one</button>
        <button>two</button>
        ${this.show
          ? html` <inline-trap-demo id="2" @closeChange=${() => (this.show = false)}>
              <button>four</button>
              <button cds-first-focus>five</button>
              <inline-trap-demo id="3" slot="two" ?hidden=${!this.showTwo} @closeChange=${() => (this.showTwo = false)}>
                <button>six</button>
                <button cds-first-focus>seven</button>
                <button>eight</button>
                <button @click=${() => (this.showTwo = false)}>close</button>
              </inline-trap-demo>
              <button @click=${() => (this.show = false)}>close</button>
              <button @click=${() => (this.showTwo = true)}>show</button>
            </inline-trap-demo>`
          : ''}
        <button>three</button>
        <button @click=${() => (this.show = true)}>show</button>
      </inline-trap-demo>
      <button>root end</button>
    `;
  }
}

export function nestedInlineFocusTrap() {
  return html`<interactive-nested-inline-focus-trap-demo></interactive-nested-inline-focus-trap-demo>`;
}

nestedInlineFocusTrap.element = DemoInteractiveNestedInlineFocusTrap;
nestedInlineFocusTrap.trap = InlineTrapDemo;
