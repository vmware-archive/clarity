/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { css, html, LitElement } from 'lit';
import { query, queryAll } from 'lit/decorators.js';
import {
  baseStyles,
  state,
  customElement,
  LayerController,
  firstFocus,
  focusTrap,
  querySlotAll,
  ariaPopup,
  responsive,
  ariaPopupTrigger,
  layer,
  closable,
  ariaGrid,
  gridRangeSelection,
  keyNavigationList,
  keyNavigationGrid,
  draggableList,
} from '@cds/core/internal';
import '@cds/core/badge/register.js';
import { DemoService, swapItems } from '@cds/core/demo';

export default {
  title: 'Internal Stories/Controllers',
};

const buttonGridStyles = css`
  section {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(10, 50px);
  }

  [selected] {
    background: var(--cds-alias-status-success);
    color: var(--cds-global-color-white);
  }

  .row {
    display: contents;
  }

  .cell {
    position: relative;
  }

  [highlight]::after {
    display: block;
    position: absolute;
    inset: 0;
    background: hsl(200deg 100% 50% / 20%);
    content: '';
    pointer-events: none;
  }

  section button {
    width: 100%;
    height: 30px;
    min-width: 30px;
    display: block;
  }

  button[tabindex='0']:focus {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export function keyNavigationListController() {
  @keyNavigationList<DemoKeyNavigationList>()
  @customElement('demo-key-navigation-list')
  class DemoKeyNavigationList extends LitElement {
    @state() private items = Array.from(Array(10).keys());
    @state() private selected = '0';
    @state() private active = '';
    @queryAll('section > div') keyListItems: NodeListOf<HTMLElement>;

    static styles = [baseStyles, buttonGridStyles];

    render() {
      return html`
        <div cds-layout="vertical gap:md">
          <div cds-layout="vertical gap:md">
            <p cds-text="body">Selected: ${this.selected}</p>
            <p cds-text="body">Active: ${this.active}</p>
            <section
              cds-layout="horizontal gap:sm"
              @cdsKeyChange=${(e: any) => (this.active = e.detail.activeItem.textContent)}
            >
              ${this.items.map(
                i =>
                  html`<div>
                    <button
                      ?selected=${this.selected === `${i}`}
                      @click=${(e: any) => (this.selected = e.target.innerText)}
                    >
                      ${i}
                    </button>
                  </div>`
              )}
            </section>
          </div>
        </div>
      `;
    }
  }
  return html`<demo-key-navigation-list></demo-key-navigation-list>`;
}

export function keyNavigationListControllerVertical() {
  @keyNavigationList<DemoKeyNavigationListVertical>({
    keyListItems: 'verticalKeyListItems',
    layout: 'vertical',
  })
  @customElement('demo-key-navigation-list-vertical')
  class DemoKeyNavigationListVertical extends LitElement {
    @state() private items = Array.from(Array(10).keys());
    @state() private selected = '0';
    @state() private active = '';

    @queryAll('section > div') verticalKeyListItems: NodeListOf<HTMLElement>;

    static styles = [baseStyles, buttonGridStyles];

    render() {
      return html`
        <div cds-layout="vertical gap:md">
          <div cds-layout="vertical gap:md">
            <p cds-text="body">Selected: ${this.selected}</p>
            <p cds-text="body">Active: ${this.active}</p>
            <section
              cds-layout="vertical gap:sm"
              @cdsKeyChange=${(e: any) => (this.active = e.detail.activeItem.textContent)}
            >
              ${this.items.map(
                i =>
                  html`<div>
                    <button
                      ?selected=${this.selected === `${i}`}
                      @click=${(e: any) => (this.selected = e.target.innerText)}
                    >
                      ${i}
                    </button>
                  </div>`
              )}
            </section>
          </div>
        </div>
      `;
    }
  }
  return html`<demo-key-navigation-list-vertical></demo-key-navigation-list-vertical>`;
}

export function keyNavigationListControllerLoop() {
  @keyNavigationList({
    keyListItems: 'verticalKeyListItems',
    layout: 'vertical',
    loop: true,
  })
  @customElement('demo-key-navigation-list-loop')
  class DemoKeyNavigationListLoop extends LitElement {
    @state() private items = Array.from(Array(5).keys());
    @state() private selected = '0';
    @state() private active = '';
    @queryAll('section > div') verticalKeyListItems: NodeListOf<HTMLElement>;

    static styles = [baseStyles, buttonGridStyles];

    render() {
      return html`
        <div cds-layout="vertical gap:md">
          <div cds-layout="vertical gap:md">
            <p cds-text="body">Selected: ${this.selected}</p>
            <p cds-text="body">Active: ${this.active}</p>
            <section
              cds-layout="vertical gap:sm"
              @cdsKeyChange=${(e: any) => (this.active = e.detail.activeItem.textContent)}
            >
              ${this.items.map(
                i =>
                  html`<div>
                    <button
                      ?selected=${this.selected === `${i}`}
                      @click=${(e: any) => (this.selected = e.target.innerText)}
                    >
                      ${i}
                    </button>
                  </div>`
              )}
            </section>
          </div>
        </div>
      `;
    }
  }
  return html`<demo-key-navigation-list-loop></demo-key-navigation-list-loop>`;
}

export function keyNavigationGridController() {
  @keyNavigationGrid<DemoKeyNavigationGridController>()
  @customElement('demo-key-navigation-grid')
  class DemoKeyNavigationGridController extends LitElement {
    static styles = [buttonGridStyles];

    @query('section') rowGroup: HTMLElement;
    @queryAll('section .row') rows: NodeListOf<HTMLElement>;
    @queryAll('section .cell') cells: NodeListOf<HTMLElement>;

    @state() private items = Array.from(Array(10).keys()).map(() => Array.from(Array(10).keys()));
    @state() private selected = '0,0';
    @state() private active = '';

    render() {
      return html`
        <div cds-layout="vertical gap:md">
          <p cds-text="body">Selected: ${this.selected}</p>
          <p cds-text="body">Active: ${this.active}</p>
          <section @cdsKeyChange=${(e: any) => (this.active = e.detail.activeItem.textContent)}>
            ${this.items.map(
              (r, ri) => html`<div class="row">
                ${r.map(
                  c => html` <div class="cell">
                    <button
                      ?selected=${this.selected === `${ri}-${c}`}
                      @click=${(e: any) => (this.selected = e.target.innerText)}
                    >
                      ${ri}-${c}
                    </button>
                  </div>`
                )}
              </div>`
            )}
          </section>
        </div>
      `;
    }
  }
  return html`<demo-key-navigation-grid></demo-key-navigation-grid>`;
}

export function draggableListController() {
  @draggableList<DemoDraggableListController>({ shadowRoot: true })
  @customElement('demo-draggable-list-controller')
  class DemoDraggableListController extends LitElement {
    static get styles() {
      return [
        baseStyles,
        css`
          section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          cds-card {
            min-height: 120px;
          }
          [cds-draggable='target'] {
            box-shadow: -4px 0 0 0 var(--cds-alias-status-alt-tint);
          }
          [draggable='false'] {
            width: 100%;
            height: 100%;
            display: block;
          }
        `,
      ];
    }

    @state() private items = Array.from(Array(10).keys()).map(id => ({ id: `${id}` }));

    render() {
      return html`
        <section @cdsDraggableChange=${(e: any) => this.sortList(e)}>
          ${this.items.map(
            item => html`
              <cds-card draggable="true" id=${item.id}>
                <div cds-layout="horizontal">
                  <p cds-text="body">${item.id}</p>
                  <cds-action-handle aria-label="sort item ${item.id}" cds-layout="align:right"></cds-action-handle>
                </div>
              </cds-card>
            `
          )}
          <div draggable="false"></div>
        </section>
      `;
    }

    private sortList(e: any) {
      if (e.detail.type === 'reordered') {
        this.items = swapItems(e.detail.target, e.detail.from, this.items);
        e.preventDefault();
      }
    }
  }

  return html`<demo-draggable-list-controller></demo-draggable-list-controller>`;
}

export function ariaPopupController() {
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

  @ariaPopup<DemoAriaPopup>()
  @customElement('demo-popup')
  class DemoAriaPopup extends LitElement {
    static styles = [styles];

    get trigger() {
      return (this.getRootNode() as HTMLElement).querySelector<HTMLElement>(
        `#${this.getAttribute('anchor')}`
      ) as HTMLElement;
    }

    render() {
      return html`<slot></slot>`;
    }
  }

  @ariaPopupTrigger<DemoAriaPopupTrigger>()
  @customElement('demo-trigger')
  class DemoAriaPopupTrigger extends LitElement {
    disabled = false;
    popup: string;
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
  return html`<demo-popup-controller></demo-popup-controller>`;
}

export function responsiveController() {
  @responsive<DemoResponsiveController>()
  @customElement('demo-responsive-controller')
  class DemoResponsiveController extends LitElement {
    @state() rect = {};
    static get styles() {
      return [
        baseStyles,
        css`
          :host {
            border: 2px solid #ccc;
            padding: 12px;
            width: 250px;
            height: 250px;
            resize: both;
            overflow: hidden;
          }
        `,
      ];
    }

    render() {
      return html`<pre>${JSON.stringify(this.rect, null, 2)}</pre>`;
    }

    connectedCallback() {
      super.connectedCallback();
      this.addEventListener('cdsResizeChange', (e: any) => (this.rect = e.detail));
    }
  }
  return html`<demo-responsive-controller></demo-responsive-controller>`;
}

export function ariaGridController() {
  @ariaGrid<DemoAriaGridController>({ update: 'mutation' })
  @keyNavigationGrid<DemoAriaGridController>()
  @gridRangeSelection<DemoAriaGridController>()
  @customElement('grid-a11y-test-element')
  class DemoAriaGridController extends LitElement {
    @query('.grid', true) grid: HTMLElement;
    @query('.rowgroup', true) rowGroup: HTMLElement;
    @query('.columnrow', true) columnRow: HTMLElement;
    @query('.columnrowgroup', true) columnRowGroup: HTMLElement;
    @queryAll('.row') rows: NodeListOf<HTMLElement>;
    @queryAll('.cell') cells: NodeListOf<HTMLElement>;
    @queryAll('.column') columns: NodeListOf<HTMLElement>;

    render() {
      return html`
        <div class="grid">
          <div class="columnrowgroup">
            <div class="columnrow">
              ${DemoService.data.grid.columns.map(column => html`<div class="column">${column.label}</div>`)}
            </div>
          </div>
          <div class="rowgroup">
            ${DemoService.data.grid.rows.slice(0, 10).map(
              row => html` <div class="row">
                ${row.cells.map(cell => html`<div class="cell">${cell.value}</div>`)}
              </div>`
            )}
          </div>
        </div>
      `;
    }

    static styles = [
      baseStyles,
      css`
        :host {
          width: 800px;
          border: 1px solid #ccc;
          background: #eee;
          overflow: hidden;
          display: block;
        }

        [role='row'] {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        [aria-rowindex]:nth-child(odd) {
          filter: brightness(97%);
        }

        [aria-rowindex]:hover {
          filter: brightness(94%);
        }

        [aria-colcount='5'] [role='row'] {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        [role='gridcell'],
        [role='rowheader'],
        [role='columnheader'] {
          padding: 12px 18px;
        }

        [role='columnheader']:last-child,
        [role='gridcell']:last-child,
        [role='row']:last-child {
          border-right: none;
        }

        [role='columnheader'] {
          border-bottom: 1px solid #ccc;
        }

        [role='gridcell'] {
          background: #fff;
          outline-offset: -2px;
          position: relative;
          user-select: none;
        }

        [role='gridcell'][highlight]::after {
          display: block;
          position: absolute;
          inset: 0;
          background: hsl(200deg 100% 50% / 20%);
          content: '';
          pointer-events: none;
        }

        [aria-rowspan],
        [role='rowheader'],
        [role='columnheader'] {
          background: none;
          font-weight: 500;
        }
      `,
    ];
  }
  return html`<grid-a11y-test-element></grid-a11y-test-element>`;
}

export function gridRangeSelectionController() {
  @keyNavigationGrid<DemoGridRangeSelectionController>()
  @gridRangeSelection<DemoGridRangeSelectionController>()
  @customElement('grid-range-selection-test-element')
  class DemoGridRangeSelectionController extends LitElement {
    @query('section') grid: HTMLElement;
    @query('section') rowGroup: HTMLElement;
    @queryAll('section .row') rows: NodeListOf<HTMLElement>;
    @queryAll('section .cell') cells: NodeListOf<HTMLElement>;

    static styles = [baseStyles, buttonGridStyles];

    @state() private items = Array.from(Array(10).keys()).map(() => Array.from(Array(10).keys()));
    @state() private selected = '0,0';
    @state() private focused = '';

    render() {
      return html`
        <div cds-layout="vertical gap:md">
          <p cds-text="body">Selected: ${this.selected}</p>
          <p cds-text="body">Focused: ${this.focused}</p>
          <p cds-text="body">Selected Range: ...</p>
          <section
            @cdsKeyChange=${(e: any) => (this.focused = e.detail.activeItem.textContent)}
            @rangeSelectionChange=${(e: any) => (this.selected = e.detail)}
          >
            ${this.items.map(
              (r, ri) => html` <div class="row" aria-rowindex=${ri + 1}>
                ${r.map(
                  (c, ci) => html` <div class="cell" aria-colindex=${ci + 1}>
                    <button
                      ?selected=${this.selected === `${ri}-${c}`}
                      @click=${(e: any) => (this.selected = e.target.innerText)}
                    >
                      ${ri}-${c}
                    </button>
                  </div>`
                )}
              </div>`
            )}
          </section>
        </div>
      `;
    }
  }
  return html`<grid-range-selection-test-element></grid-range-selection-test-element>`;
}

export function inlineFocusTrap() {
  @focusTrap<DemoInlineFocusTrap>()
  @customElement('inline-focus-trap-demo')
  class DemoInlineFocusTrap extends LitElement {
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

export function nestedInlineFocusTrap() {
  @closable<InlineTrapDemo>()
  @focusTrap<InlineTrapDemo>()
  @firstFocus<InlineTrapDemo>()
  @customElement('inline-trap-demo')
  class InlineTrapDemo extends LitElement {
    @querySlotAll(':scope > *') keyListItems: NodeListOf<HTMLElement>;

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
                <inline-trap-demo
                  id="3"
                  slot="two"
                  ?hidden=${!this.showTwo}
                  @closeChange=${() => (this.showTwo = false)}
                >
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

  return html`<interactive-nested-inline-focus-trap-demo></interactive-nested-inline-focus-trap-demo>`;
}

export function layerController() {
  @layer<LayerDemoElement>()
  @customElement('layer-demo')
  class LayerDemoElement extends LitElement {
    layerController: LayerController<this>;

    static styles = [
      css`
        :host {
          display: block;
          position: fixed;
          inset: 48px;
          text-align: center;
          color: #2d2d2d;
          font-size: 28px;
          line-height: 50vh;
          z-index: var(--index);
          background: var(--background, hsla(0, 0%, 0%, 0.04));
          transform: perspective(1300px) rotateY(30deg)
            translate3d(20vw, -100px, calc(-1300px + calc(100px * var(--index, 0))));
          width: 1000px;
          height: 800px;
        }

        :host(:hover) {
          --background: #6c8ece4a !important;
        }
      `,
    ];

    render() {
      return html`<p>${this.layerController.layerIndex}</p>`;
    }

    firstUpdated(props: any) {
      super.firstUpdated(props);
      this.style.setProperty(
        '--index',
        `${this.layerController.layerIndex !== null ? this.layerController.layerIndex + 1 : 'initial'}`
      );
      this.style.setProperty(
        '--background',
        this.layerController.isActiveLayer ? '#6c8ece4a' : 'hsla(0, 0%, 0%, 0.04)'
      );
    }
  }

  @customElement('layer-controller-demo')
  class LayerControllerDemoElement extends LitElement {
    @state() count = 4;

    render() {
      return html` <button @click=${() => this.add()}>add layer</button>
        <button @click=${() => this.remove()}>remove layer</button>
        <div style="position: relative; width: 100%; height: 100vh;">
          ${Array.from(Array(this.count).keys()).map(() => html`<layer-demo></layer-demo>`)}
        </div>`;
    }

    async add() {
      const c = this.count + 1;
      this.count = 0;
      await this.requestUpdate('count');
      this.count = c;
    }

    async remove() {
      const c = this.count - 1;
      this.count = 0;
      await this.requestUpdate('count');
      this.count = c;
    }
  }

  return html` <layer-controller-demo></layer-controller-demo> `;
}
