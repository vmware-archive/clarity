/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/tree-view/register.js';
import { CdsTreeItem } from '@cds/core/tree-view';

import { css, html, LitElement } from 'lit';
import { createItems, TreeItem } from './story-utils.js';
import { customElement } from '@cds/core/internal';
import { state } from 'lit/decorators/state.js';

export default {
  title: 'Stories/Tree View',
  component: 'cds-tree',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A668',
    },
  },
};

// export function API(args: any) {
//   return html`
//     <cds-tree ...="${spreadProps(getElementStorybookArgs(args))}">
//       <cds-tree-item expanded>
//         1
//         <cds-tree-item>
//           1-1
//           <cds-tree-item>
//             1-1-1
//           </cds-tree-item>
//           <cds-tree-item>
//             1-1-2
//           </cds-tree-item>
//         </cds-tree-item>
//         <cds-tree-item>
//           1-2
//         </cds-tree-item>
//         <cds-tree-item>
//           1-3
//         </cds-tree-item>
//       </cds-tree-item>
//       <cds-tree-item>
//         2
//         <cds-tree-item>
//           2-1
//         </cds-tree-item>
//         <cds-tree-item>
//           2-2
//         </cds-tree-item>
//       </cds-tree-item>
//       <cds-tree-item>3</cds-tree-item>
//     </cds-tree>
//   `;
// }

/** @website */
export function basic() {
  return html`
    <cds-tree>
      <cds-tree-item expanded>
        David Wallace (CFO)
        <cds-tree-item expanded>
          Michael Scott (Regional Manager)

          <cds-tree-item>Dwight K. Schrute (Assistant to the Regional Manager)</cds-tree-item>

          <cds-tree-item>
            Jim Halpert (Head of Sales)
            <cds-tree-item>Andy Bernard</cds-tree-item>
            <cds-tree-item>Stanley Hudson</cds-tree-item>
            <cds-tree-item>Phyllis Vance</cds-tree-item>
            <cds-tree-item>Todd Packer</cds-tree-item>
          </cds-tree-item>

          <cds-tree-item>
            Angela Martin (Head of Accounting)
            <cds-tree-item>Kevin Malone</cds-tree-item>
            <cds-tree-item>Oscar Martinez</cds-tree-item>
          </cds-tree-item>

          <cds-tree-item>
            Kelly Kapoor (Head of Customer Service)
            <cds-tree-item>Ryan Howard (Temp)</cds-tree-item>
          </cds-tree-item>

          <cds-tree-item>
            Creed Bratton (Quality Assurance)
          </cds-tree-item>

          <cds-tree-item>
            Meredith Palmer (Supplier Relations)
          </cds-tree-item>

          <cds-tree-item>
            Toby Flenderson (Human Resources)
          </cds-tree-item>

          <cds-tree-item>
            Pam Beesly (Reception)
          </cds-tree-item>

          <cds-tree-item>
            Darryl Philbin (Warehouse)
          </cds-tree-item>
        </cds-tree-item>
      </cds-tree-item>
    </cds-tree>
  `;
}

export function navigation() {
  return html`
    <cds-tree>
      <cds-tree-item expanded>
        The Beatles
        <cds-tree-item selected>
          <a cds-text="link" href="https://en.wikipedia.org/wiki/Abbey_Road">Abbey Road</a>
        </cds-tree-item>

        <cds-tree-item>
          <a cds-text="link" href="https://en.wikipedia.org/wiki/Revolver_(Beatles_album)">Revolver</a>
        </cds-tree-item>

        <cds-tree-item>
          <a cds-text="link" href="https://en.wikipedia.org/wiki/Rubber_Soul">Rubber Soul</a>
        </cds-tree-item>
      </cds-tree-item>
    </cds-tree>
  `;
}

/** @website */
export function multiSelect() {
  return html`
    <cds-tree multi-select>
      <cds-tree-item expanded selected>
        1
        <cds-tree-item disabled>
          1-1
          <cds-tree-item>
            1-1-1
          </cds-tree-item>
          <cds-tree-item>
            1-1-2
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item selected>
          1-2
        </cds-tree-item>
        <cds-tree-item>
          1-3
        </cds-tree-item>
      </cds-tree-item>
      <cds-tree-item disabled selected>
        2
        <cds-tree-item>
          2-1
        </cds-tree-item>
        <cds-tree-item>
          2-2
        </cds-tree-item>
      </cds-tree-item>
      <cds-tree-item>3</cds-tree-item>
    </cds-tree>
  `;
}

export const async = () => {
  function renderTreeInfo(message: string) {
    document.getElementById('loadingInfo').textContent = message;
  }
  function onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
      renderTreeInfo('loading children for item ' + prefix);
      setTimeout(() => {
        parentNode.loading = false;
        renderTreeInfo('Finished loading children for item ' + prefix);
        parentNode.innerHTML = `
            ${prefix}
            <cds-tree-item>
              ${prefix}-1
            </cds-tree-item>
            <cds-tree-item>
              ${prefix}-2
            </cds-tree-item>
            <cds-tree-item>
              ${prefix}-3
            </cds-tree-item>
        `;
      }, 3000);
    } else {
      parentNode.loading = false;
      parentNode.innerHTML = `${prefix}`;
    }
  }

  // I have set the aria-live attribute to assertive below because there's a VO bug that
  // announces it twice in polite mode if inside an iframe (which all storybook stories are).
  // In reality applications should be using polite in most cases. Below code snippet is just included
  // as an example and not part of the component.
  return html`
    <div role="region" id="treeInfo" aria-live="assertive" cds-layout="display:screen-reader-only">
      <p id="loadingInfo"></p>
    </div>
    <cds-tree>
      <cds-tree-item expandable @expandedChange="${(e: any) => onExpandedChange(e, '1')}">
        1
      </cds-tree-item>
      <cds-tree-item expandable @expandedChange="${(e: any) => onExpandedChange(e, '2')}">
        2
      </cds-tree-item>
    </cds-tree>
  `;
};

export const recursive = () => {
  const level1 = 3;
  const level2 = 3;
  const level3 = 3;

  const treeData: any = [];

  for (let i = 1; i <= level1; i++) {
    const children = [];
    for (let j = 1; j <= level2; j++) {
      const grandchildren = [];
      for (let k = 1; k <= level3; k++) {
        grandchildren.push({
          display: `${i}-${j}-${k}`,
          children: [],
        });
      }
      children.push({
        display: `${i}-${j}`,
        children: grandchildren,
      });
    }

    treeData.push({
      display: i,
      children: children,
    });
  }

  const recursiveTemplate = (data: any) => {
    return html`
      <cds-tree-item expanded>
        ${data.display} ${data.children.map((i: any) => recursiveTemplate(i))}
      </cds-tree-item>
    `;
  };

  return html`
    <cds-tree multi-select>
      ${treeData.map((node: any) => html` ${recursiveTemplate(node)} `)}
    </cds-tree>
  `;
};

export const interactive = () => {
  const onExpandedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const myTreeItem = e.target as any;
      myTreeItem.expanded = e.detail;
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };

  function updateBasedOnChildren(node: any) {
    if (node && node.tagName === 'CDS-TREE-ITEM') {
      let oneSelected = false;
      let oneUnselected = false;

      node.indeterminate = false;

      Array.from(node.children).forEach((c: any) => {
        if (c.indeterminate) {
          node.indeterminate = true;
        }
        if (c.selected) {
          oneSelected = true;
          if (oneUnselected) {
            node.indeterminate = true;
          }
        }
        if (!c.selected) {
          oneUnselected = true;
          if (oneSelected) {
            node.indeterminate = true;
          }
        }
      });

      if (!oneSelected) {
        node.selected = false;
      } else if (!oneUnselected) {
        node.selected = true;
      } else {
        node.selected = false;
      }

      updateBasedOnChildren(node.parentNode);
    }
  }

  function updateChildren(node: any) {
    Array.from(node.children).forEach((c: any) => {
      c.indeterminate = false;
      c.selected = node.selected;
      updateChildren(c);
    });
  }

  const onSelectedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const currentNode = e.target as any;
      if (!currentNode.disabled) {
        currentNode.selected = e.detail;
        currentNode.indeterminate = false;

        // update children's selected/indeterminate state
        updateChildren(currentNode);

        // update ancestors' selected/indeterminate state
        updateBasedOnChildren(currentNode.parentNode);
      }
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };

  return html`
    <a href="#" cds-text="link">link</a>
    <cds-tree multi-select @expandedChange="${onExpandedChange}" @selectedChange="${onSelectedChange}">
      <cds-tree-item indeterminate expanded>
        1
        <cds-tree-item>
          1-1
          <cds-tree-item>
            1-1-1
          </cds-tree-item>
          <cds-tree-item>
            1-1-2
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item selected>
          1-2
        </cds-tree-item>
        <cds-tree-item>
          1-3
        </cds-tree-item>
      </cds-tree-item>
      <cds-tree-item indeterminate>
        2
        <cds-tree-item selected>
          2-1
        </cds-tree-item>
        <cds-tree-item>
          2-2
        </cds-tree-item>
      </cds-tree-item>
      <cds-tree-item disabled>3</cds-tree-item>
      <cds-tree-item selected>4</cds-tree-item>
    </cds-tree>
    <a href="#" cds-text="link">link</a>
  `;
};

export function conditionalItems() {
  @customElement('demo-conditional-tree')
  class DemoConditionalTree extends LitElement {
    @state() nodes: TreeItem[] = [];
    @state() show = false;
    @state() checkAll = false;
    @state() selectableItems = false;

    static styles = [css``];

    constructor() {
      super();
      const level1 = 5;
      const level2 = 3;
      const level3 = 2;

      this.nodes = createItems(0, level1).map(n => {
        n.nodes = createItems(n, level2);
        n.nodes.forEach(c => (c.nodes = createItems(c, level3)));
        return n;
      });
    }

    private generateTreeItems(nodes: TreeItem[]): any {
      return nodes.map(
        node => html` <cds-tree-item
          @expandedChange=${() => this.toggleNode(node)}
          .expanded=${node.show}
          .expandable=${node.nodes.length > 0}
        >
          ${node.id} content ${node.show ? this.generateTreeItems(node.nodes) : ''}
        </cds-tree-item>`
      );
    }

    render() {
      return html` <section cds-layout="vertical gap:lg p:lg">
        <h1 cds-text="heading">Conditional Tree Items</h1>
        <cds-button @click=${() => (this.show = !this.show)}>Toggle Tree Visibility</cds-button>

        <cds-tree>
          ${this.show ? this.generateTreeItems(this.nodes) : ''}
        </cds-tree>
      </section>`;
    }

    track(_index: number, node: TreeItem) {
      return node.id;
    }

    toggleAll() {
      this.checkAll = !this.checkAll;
      this.nodes.forEach(n => (n.selected = this.checkAll));
    }

    toggleNode(node: TreeItem) {
      node.show = !node.show;
      this.nodes = [...this.nodes];
    }

    toggleNodeSelection(node: TreeItem, checked: boolean) {
      node.selected = checked;
      this.nodes = [...this.nodes];
    }

    createRenderRoot() {
      return this;
    }
  }
  return html`<demo-conditional-tree></demo-conditional-tree>`;
}

/** @website */
export function customStyles() {
  return html`
    <style>
      .app-custom cds-tree-item {
        --focus-width: var(--cds-alias-object-border-width-200);
        --icon-transform: rotate(45deg);

        --cds-alias-object-interaction-background-selected: var(--cds-global-color-jade-50);
        --cds-alias-object-interaction-background-hover: var(--cds-global-color-jade-50);
        --cds-alias-object-interaction-background-active: var(--cds-global-color-jade-100);
        --cds-alias-object-interaction-background-highlight: var(--cds-global-color-jade-700);
      }
      .app-custom cds-tree-item[expanded] {
        --icon-transform: rotate(135deg);
      }
      .app-custom cds-tree-item::part(checkbox) {
        --color: var(--cds-global-color-jade-700);
        --check-color: var(--cds-global-color-jade-50);
      }
      .app-custom cds-tree-item::part(expand-collapse-icon) {
        --color: var(--cds-global-color-jade-700);
      }
    </style>
    <div>
      <cds-tree class="app-custom" multi-select>
        <cds-tree-item expanded selected>
          1
          <cds-tree-item disabled>
            1-1
            <cds-tree-item>
              1-1-1
            </cds-tree-item>
            <cds-tree-item>
              1-1-2
            </cds-tree-item>
          </cds-tree-item>
          <cds-tree-item selected>
            1-2
          </cds-tree-item>
          <cds-tree-item>
            1-3
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item disabled selected>
          2
          <cds-tree-item>
            2-1
          </cds-tree-item>
          <cds-tree-item>
            2-2
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    </div>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <div cds-theme="dark">
      <cds-tree multi-select>
        <cds-tree-item expanded selected>
          1
          <cds-tree-item disabled>
            1-1
            <cds-tree-item>
              1-1-1
            </cds-tree-item>
            <cds-tree-item>
              1-1-2
            </cds-tree-item>
          </cds-tree-item>
          <cds-tree-item selected>
            1-2
          </cds-tree-item>
          <cds-tree-item>
            1-3
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item disabled selected>
          2
          <cds-tree-item>
            2-1
          </cds-tree-item>
          <cds-tree-item>
            2-2
          </cds-tree-item>
        </cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    </div>
  `;
}
