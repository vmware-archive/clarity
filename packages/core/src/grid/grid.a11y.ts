/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { executeServerCommand } from '@web/test-runner-commands';
import { html, LitElement } from 'lit';
import { insertBefore } from '@cds/core/demo';
import { createTestElement, removeTestElement, componentIsStable, getA11ySnapshotNodes } from '@cds/core/test';
import { customElement, state } from '@cds/core/internal';
import { ButtonSort } from '@cds/core/button-sort';
import { CdsGrid } from '@cds/core/grid';
import '@cds/core/dropdown/register.js';
import '@cds/core/pagination/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/button-action/register.js';
import '@cds/core/button-expand/register.js';
import '@cds/core/button-handle/register.js';
import '@cds/core/button-sort/register.js';
import '@cds/core/button/register.js';
import '@cds/core/search/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/grid/register.js';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';

describe('cds-grid a11y', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`<cds-grid aria-label="basic datagrid" height="360">
      <cds-grid-column>Host</cds-grid-column>
      <cds-grid-column>Status</cds-grid-column>
      <cds-grid-column>CPU</cds-grid-column>
      <cds-grid-column>Memory</cds-grid-column>
      <cds-grid-row>
        <cds-grid-cell>vm-host-001</cds-grid-cell>
        <cds-grid-cell>online</cds-grid-cell>
        <cds-grid-cell>5%</cds-grid-cell>
        <cds-grid-cell>10%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>vm-host-002</cds-grid-cell>
        <cds-grid-cell>offline</cds-grid-cell>
        <cds-grid-cell>0%</cds-grid-cell>
        <cds-grid-cell>100%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>`);
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  // https://playwright.dev/docs/api/class-accessibility/#accessibility-snapshot
  it('should create baseline grid accessibility snapshot in safari', async () => {
    await componentIsStable(component);
    const grid: any = await executeServerCommand('a11y:snapshot', { root: 'cds-grid' });
    const nodes = getA11ySnapshotNodes(grid);
    const roles = nodes
      .filter(node => node.role !== 'generic' && node.role !== 'text' && node.role !== 'TextGroup')
      .map(node => node.role);
    const names = nodes.filter(node => node.name !== '').map(node => node.name);
    expect(names).toEqual([
      'basic datagrid',
      'Host',
      'Status',
      'CPU',
      'Memory',
      'vm-host-001',
      'online',
      '5%',
      '10%',
      'vm-host-002',
      'offline',
      '0%',
      '100%',
      'End of grid rows',
      'Host',
      'vm-host-001',
      'vm-host-002',
      'End of grid rows',
      'Status',
      'online',
      'offline',
      'End of grid rows',
      'CPU',
      '5%',
      '0%',
      'End of grid rows',
      'Memory',
      '10%',
      '100%',
      'End of grid rows',
      'Host',
      'Status',
      'CPU',
      'Memory',
    ]);

    expect(roles).toEqual([
      'grid',
      'row',
      'columnheader',
      'columnheader',
      'columnheader',
      'columnheader',
      'row',
      'gridcell',
      'gridcell',
      'gridcell',
      'gridcell',
      'row',
      'gridcell',
      'gridcell',
      'gridcell',
      'gridcell',
      'row',
      'gridcell',
      'Div',
      'Column',
      'columnheader',
      'gridcell',
      'gridcell',
      'gridcell',
      'Div',
      'Column',
      'columnheader',
      'gridcell',
      'gridcell',
      'gridcell',
      'Div',
      'Column',
      'columnheader',
      'gridcell',
      'gridcell',
      'gridcell',
      'Div',
      'Column',
      'columnheader',
      'gridcell',
      'gridcell',
      'gridcell',
      'Div',
      'TableHeaderContainer',
      'columnheader',
      'columnheader',
      'columnheader',
      'columnheader',
    ]);
  });

  it('should read cells when using virtual cursor in all directions', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'basic datagrid table 4 columns, 4 rows');
    test.queue(Commands.right, 'host column 1 of 4');
    test.queue(Commands.down, 'row 2 of 4 vm-host-001');
    test.queue(Commands.down, 'row 3 of 4 vm-host-002');
    test.queue(Commands.right, 'status offline column 2 of 4');
    test.queue(Commands.up, 'row 2 of 4 online');
    const result = await test.run();

    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid single select', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-grid
      aria-label="row single select datagrid"
      selectable="single"
      height="360"
    >
      <cds-grid-column type="action"></cds-grid-column>
      <cds-grid-column>Host</cds-grid-column>
      <cds-grid-column>Status</cds-grid-column>
      <cds-grid-column>CPU</cds-grid-column>
      <cds-grid-column>Memory</cds-grid-column>
      <cds-grid-row selected>
        <cds-grid-cell>
          <cds-radio>
            <input type="radio" name="select-row" checked value="vm-host-001" aria-label="select vm-host-001" />
          </cds-radio>
        </cds-grid-cell>
        <cds-grid-cell>vm-host-001</cds-grid-cell>
        <cds-grid-cell>online</cds-grid-cell>
        <cds-grid-cell>5%</cds-grid-cell>
        <cds-grid-cell>10%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>
          <cds-radio>
            <input type="radio" name="select-row" value="vm-host-002" aria-label="select vm-host-002" />
          </cds-radio>
        </cds-grid-cell>
        <cds-grid-cell>vm-host-002</cds-grid-cell>
        <cds-grid-cell>offline</cds-grid-cell>
        <cds-grid-cell>0%</cds-grid-cell>
        <cds-grid-cell>0%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with a row selection radio', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row single select datagrid table 5 columns, 4 rows');
    test.queue(Commands.right, 'action column 1 of 5');
    test.queue(Commands.right, 'host column 2 of 5');
    test.queue(Commands.down, 'row 2 of 4 vm-host-001');
    test.queue(Commands.down, 'row 3 of 4 vm-host-002');
    test.queue(Commands.left, 'select vm-host-002 radio button, 2 of 2');
    test.queue(Commands.space, 'selected select vm-host-002 radio button, 2 of 2');
    test.queue(Commands.up, 'row 2 of 4 select vm-host-001 radio button, 1 of 2');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid multi select', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-grid
      aria-label="row multi select datagrid"
      selectable="multi"
      height="360"
    >
      <cds-grid-column type="action">
        <cds-checkbox>
          <input type="checkbox" aria-label="select all hosts" />
        </cds-checkbox>
      </cds-grid-column>
      <cds-grid-column>Host</cds-grid-column>
      <cds-grid-column>Status</cds-grid-column>
      <cds-grid-column>CPU</cds-grid-column>
      <cds-grid-column>Memory</cds-grid-column>
      <cds-grid-row selected>
        <cds-grid-cell>
          <cds-checkbox>
            <input checked type="checkbox" value="vm-host-001" aria-label="select vm-host-001" />
          </cds-checkbox>
        </cds-grid-cell>
        <cds-grid-cell>vm-host-001</cds-grid-cell>
        <cds-grid-cell>online</cds-grid-cell>
        <cds-grid-cell>5%</cds-grid-cell>
        <cds-grid-cell>10%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>
          <cds-checkbox>
            <input type="checkbox" value="vm-host-002" aria-label="select vm-host-002" />
          </cds-checkbox>
        </cds-grid-cell>
        <cds-grid-cell>vm-host-002</cds-grid-cell>
        <cds-grid-cell>offline</cds-grid-cell>
        <cds-grid-cell>0%</cds-grid-cell>
        <cds-grid-cell>0%</cds-grid-cell>
      </cds-grid-row>
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with a row selection checkbox', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row multi select datagrid table 5 columns, 4 rows');
    test.queue(Commands.right, 'select all hosts unchecked checkbox');
    test.queue(Commands.right, 'host column 2 of 5');
    test.queue(Commands.down, 'row 2 of 4 vm-host-001');
    test.queue(Commands.down, 'row 3 of 4 vm-host-002');
    test.queue(Commands.left, 'select vm-host-002 unchecked checkbox');
    test.queue(Commands.space, 'checked select vm-host-002 checkbox');
    test.queue(Commands.up, 'row 2 of 4 select vm-host-001 checked checkbox');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid row action', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  @customElement('demo-grid-row-action')
  class DemoRowAction extends LitElement {
    @state() private anchor: HTMLElement;

    render() {
      return html` <cds-grid aria-label="row action datagrid" height="360">
          <cds-grid-column type="action"></cds-grid-column>
          <cds-grid-column>Host</cds-grid-column>
          <cds-grid-column>Status</cds-grid-column>
          <cds-grid-column>CPU</cds-grid-column>
          <cds-grid-column>Memory</cds-grid-column>
          <cds-grid-row>
            <cds-grid-cell>
              <cds-button-action
                popup="row-actions"
                aria-label="vm-host-001 actions"
                @click=${(e: any) => (this.anchor = e.target)}
              ></cds-button-action>
            </cds-grid-cell>
            <cds-grid-cell>vm-host-001</cds-grid-cell>
            <cds-grid-cell>online</cds-grid-cell>
            <cds-grid-cell>5%</cds-grid-cell>
            <cds-grid-cell>10%</cds-grid-cell>
          </cds-grid-row>
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <cds-dropdown
          id="row-actions"
          ?hidden=${!this.anchor}
          .anchor=${this.anchor}
          @closeChange=${() => (this.anchor = null) as void}
        >
          <div cds-layout="vertical align:stretch p:xs">
            <cds-button action="flat" size="sm">Shutdown</cds-button>
            <cds-button action="flat" size="sm">Restart</cds-button>
          </div>
        </cds-dropdown>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  beforeEach(async () => {
    testElement = await createTestElement(html`<demo-grid-row-action></demo-grid-row-action>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with a row action button', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row action datagrid table 5 columns, 3 rows');
    test.queue(Commands.right, 'action column 1 of 5');
    test.queue(Commands.right, 'host column 2 of 5');
    test.queue(Commands.down, 'row 2 of 3 vm-host-001');
    test.queue(Commands.left, 'vm-host-001 actions menu pop up collapsed button');
    test.queue(Commands.space, 'shutdown button');
    test.queue(Commands.right, 'restart button');
    test.queue(Commands.left, 'shutdown button');
    test.queue(Commands.escape, 'vm-host-001 actions menu pop up collapsed button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid row sort', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  @customElement('demo-grid-row-sort')
  class DemoRowSort extends LitElement {
    @state() private sortType: ButtonSort = 'none';

    render() {
      return html` <cds-grid aria-label="row sort datagrid demo" height="360">
        <cds-grid-column
          >Host
          <cds-button-sort
            aria-label="sort"
            .sort=${this.sortType}
            @sortChange=${(e: any) => (this.sortType = e.detail)}
          ></cds-button-sort
        ></cds-grid-column>
        <cds-grid-column>Status</cds-grid-column>
        <cds-grid-column>CPU</cds-grid-column>
        <cds-grid-column>Memory</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>vm-host-001</cds-grid-cell>
          <cds-grid-cell>online</cds-grid-cell>
          <cds-grid-cell>5%</cds-grid-cell>
          <cds-grid-cell>10%</cds-grid-cell>
        </cds-grid-row>
      </cds-grid>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`<demo-grid-row-sort></demo-grid-row-sort>`);
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  it('should read and interact with a row sorting', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row sort datagrid demo table 4 columns, 3 rows');
    test.queue(Commands.right, 'host host column 1 of 4'); // duplicate from aria-label bug in safari
    test.queue(Commands.right, 'sort button');

    // press one
    test.queue(Commands.space, 'sort button');
    test.queue(Commands.right, 'status column 2 of 4');
    test.queue(Commands.down, 'row 2 of 3 online');
    test.queue(Commands.left, 'host vm-host-001 column 1 of 4');
    test.queue(Commands.up, 'row 1 of 3 host sort button sort up');

    // press two
    test.queue(Commands.space, 'sort button');
    test.queue(Commands.right, 'status column 2 of 4');
    test.queue(Commands.down, 'row 2 of 3 online');
    test.queue(Commands.left, 'host vm-host-001 column 1 of 4');
    test.queue(Commands.up, 'row 1 of 3 host sort button sort down');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid row detail', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  @customElement('demo-grid-row-detail')
  class DemoRowDetail extends LitElement {
    @state() private open = false;
    @state() private anchor: HTMLElement;

    render() {
      return html` <cds-grid aria-label="row detail datagrid" height="360">
        <cds-grid-column type="action"></cds-grid-column>
        <cds-grid-column>Host</cds-grid-column>
        <cds-grid-column>Status</cds-grid-column>
        <cds-grid-column>CPU</cds-grid-column>
        <cds-grid-column>Memory</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>
            <cds-button-expand
              popup="row-detail"
              action="detail"
              aria-label="view details"
              .expanded=${this.open}
              @click=${() => (this.open = true)}
            ></cds-button-expand>
          </cds-grid-cell>
          <cds-grid-cell>vm-host-001</cds-grid-cell>
          <cds-grid-cell>online</cds-grid-cell>
          <cds-grid-cell>5%</cds-grid-cell>
          <cds-grid-cell>10%</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-detail
          id="row-detail"
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          @closeChange=${() => (this.open = false)}
        >
          <div cds-layout="vertical gap:lg">
            <h2 cds-first-focus cds-text="section">vm-host-001</h2>
            <p>Detail Content</p>
          </div>
        </cds-grid-detail>
        <cds-grid-footer></cds-grid-footer>
      </cds-grid>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`<demo-grid-row-detail></demo-grid-row-detail>`);
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  it('should read and interact with a row detail view', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row detail datagrid table 5 columns, 3 rows');
    test.queue(Commands.right, 'action column 1 of 5');
    test.queue(Commands.right, 'host column 2 of 5');
    test.queue(Commands.down, 'row 2 of 3 vm-host-001');
    test.queue(Commands.left, 'view details menu pop up collapsed button');
    test.queue(Commands.space, 'vm-host-001 and 2 more items web dialog heading level 2 vm-host-001');
    test.queue(Commands.right, 'detail content');
    test.queue(Commands.right, 'close details button');
    const result = await test.run();

    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid column filter', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  @customElement('demo-grid-column-filter')
  class DemoColumnFilter extends LitElement {
    @state() private anchor: HTMLElement;

    render() {
      return html` <cds-grid aria-label="column filter datagrid" height="360">
          <cds-grid-column
            >Host
            <cds-button-action
              popup="column-filter"
              @click=${(e: any) => (this.anchor = e.target)}
              shape="filter"
              aria-label="search hosts"
            ></cds-button-action
          ></cds-grid-column>
          <cds-grid-column>Status</cds-grid-column>
          <cds-grid-column>CPU</cds-grid-column>
          <cds-grid-column>Memory</cds-grid-column>
          <cds-grid-row>
            <cds-grid-cell>vm-host-001</cds-grid-cell>
            <cds-grid-cell>online</cds-grid-cell>
            <cds-grid-cell>5%</cds-grid-cell>
            <cds-grid-cell>10%</cds-grid-cell>
          </cds-grid-row>
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <cds-dropdown
          id="column-filter"
          ?hidden=${!this.anchor}
          .anchor=${this.anchor}
          @closeChange=${() => (this.anchor = null) as any}
        >
          <div cds-layout="p:sm">
            <cds-input>
              <input cds-first-focus placeholder="Search" aria-label="search hosts" />
            </cds-input>
          </div>
        </cds-dropdown>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  beforeEach(async () => {
    testElement = await createTestElement(html`<demo-grid-column-filter></demo-grid-column-filter>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with a column filter input', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'column filter datagrid table 4 columns, 3 rows');
    test.queue(Commands.right, 'host host column 1 of 4'); // duplicate from aria-label bug in safari
    test.queue(Commands.right, 'search hosts menu pop up collapsed button');
    test.queue(Commands.right, 'status column 2 of 4');
    test.queue(Commands.down, 'row 2 of 3 online');
    test.queue(Commands.left, 'host vm-host-001 column 1 of 4');
    test.queue(Commands.up, 'row 1 of 3 host search hosts menu pop up collapsed button');
    test.queue(Commands.space, 'search hosts search web dialog search hosts edit text');
    test.queue(Commands.escape, 'search hosts menu pop up collapsed button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid column resize', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  @customElement('demo-grid-column-resize')
  class DemoColumnResize extends LitElement {
    @state() private anchor: HTMLElement;

    render() {
      return html` <cds-grid aria-label="column resize datagrid" height="360">
        <cds-grid-column resizable width="100">Host</cds-grid-column>
        <cds-grid-column resizable>Status</cds-grid-column>
        <cds-grid-column resizable>CPU</cds-grid-column>
        <cds-grid-column>Memory</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>vm-host-001</cds-grid-cell>
          <cds-grid-cell>online</cds-grid-cell>
          <cds-grid-cell>5%</cds-grid-cell>
          <cds-grid-cell>10%</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-footer></cds-grid-footer>
      </cds-grid>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  beforeEach(async () => {
    testElement = await createTestElement(html`<demo-grid-column-resize></demo-grid-column-resize>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with a column action resize input', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'column resize datagrid table 4 columns, 3 rows');
    test.queue(Commands.right, 'host host column 1 of 4'); // duplicate from aria-label bug in safari
    test.queue(Commands.right, '100 resize column slider');
    test.queue(Commands.arrowRight, '110');
    test.queue(Commands.right, 'status status column 2 of 4');
    test.queue(Commands.left, 'host 110 resize column slider column 1 of 4');
    test.queue(Commands.arrowLeft, '100');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid pagination', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  @customElement('demo-grid-pagination')
  class DemoPagination extends LitElement {
    @state() page = 1;

    render() {
      return html`<cds-grid aria-label="pagination datagrid" height="360">
        <cds-grid-column>Host</cds-grid-column>
        <cds-grid-column>Status</cds-grid-column>
        <cds-grid-column>CPU</cds-grid-column>
        <cds-grid-column>Memory</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>vm-host-001</cds-grid-cell>
          <cds-grid-cell>online</cds-grid-cell>
          <cds-grid-cell>5%</cds-grid-cell>
          <cds-grid-cell>10%</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-footer>
          <cds-grid-pagination
            .page=${this.page}
            page-count="10"
            @pageChange=${(e: any) => (this.page = e.detail)}
          ></cds-grid-pagination>
          <div cds-layout="display:screen-reader-only" aria-live="polite" aria-relevant="all" role="status">
            navigated to page ${this.page}
          </div>
        </cds-grid-footer>
      </cds-grid>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  beforeEach(async () => {
    testElement = await createTestElement(html`<demo-grid-pagination></demo-grid-pagination>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read and interact with pagination component', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'pagination datagrid table 4 columns, 3 rows');
    test.queue(Commands.right, 'host column 1 of 4');
    test.queue(Commands.down, 'row 2 of 3 vm-host-001');
    test.queue(Commands.right, 'status online column 2 of 4');
    test.queue(Commands.right, 'cpu 5% column 3 of 4');
    test.queue(Commands.right, 'memory 10% column 4 of 4');
    test.queue(Commands.right, 'row 3 of 3 host spans 4 columns grid pagination group column 1 of 4');
    test.queue(Commands.tab, '10 rows per page pop up button grid pagination group');
    test.queue(Commands.tab, '1 contents selected page 1 of 10 incrementable edit text');
    test.queue(Commands.tab, 'go to next page button');
    test.queue(Commands.space, 'navigated to page  2');
    test.queue(Commands.left, '2');
    test.queue(Commands.arrowUp, 'navigated to page  3');
    test.queue(Commands.left, 'go to previous page button');
    test.queue(Commands.space, 'navigated to page  2');
    test.queue(Commands.left, 'go to first page button');
    test.queue(Commands.left, '10 rows per page pop up button');
    test.queue(Commands.space, 'menu 4 items ✓ 10');
    test.queue(Commands.arrowDown, '20');
    test.queue(Commands.space, '20');
    test.queue(Commands.left, 'grid pagination group');
    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid placeholder', () => {
  let component: CdsGrid;
  let testElement: HTMLElement;

  @customElement('demo-grid-placeholder')
  class DemoPlaceholder extends LitElement {
    render() {
      return html`<cds-grid aria-label="placeholder datagrid" height="360">
        <cds-grid-column>Host</cds-grid-column>
        <cds-grid-column>Status</cds-grid-column>
        <cds-grid-column>CPU</cds-grid-column>
        <cds-grid-column>Memory</cds-grid-column>
        <cds-grid-placeholder>
          <cds-icon shape="filter" size="xl"></cds-icon>
          <p cds-text="subsection">No VMs were found.</p>
        </cds-grid-placeholder>
        <cds-grid-footer></cds-grid-footer>
      </cds-grid>`;
    }

    createRenderRoot() {
      return this;
    }
  }

  beforeEach(async () => {
    testElement = await createTestElement(html`<demo-grid-placeholder></demo-grid-placeholder>`);
    component = testElement.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should read placeholder content', async () => {
    await componentIsStable(component);
    const test = new VoiceOverTest();
    test.queue(Commands.right, 'placeholder datagrid table 4 columns, 3 rows');
    test.queue(Commands.right, 'host column 1 of 4');
    test.queue(Commands.right, 'status column 2 of 4');
    test.queue(Commands.right, 'cpu column 3 of 4');
    test.queue(Commands.right, 'memory column 4 of 4');
    test.queue(Commands.right, 'row 2 of 3 host spans 4 columns no vms were found. column 1 of 4');
    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid empty', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(
      html`<cds-grid aria-label="empty datagrid demo" height="360"></cds-grid></cds-grid>`
    );
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  it('should read empty message', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'empty datagrid demo table 1 column, 3 rows');
    test.queue(Commands.right, 'no results found column 1 of 1');
    test.queue(Commands.right, 'row 2 of 3 blank column 1 of 1');
    const result = await test.run();

    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid row draggable', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  @customElement('demo-grid-row-draggable')
  class DemoRowDraggable extends LitElement {
    @state() private ariaLiveMessage = '';
    @state() private data = [{ id: 'one' }, { id: 'two' }, { id: 'three' }];

    render() {
      return html` <cds-grid aria-label="row draggable datagrid demo" @cdsDraggableChange=${this.sortList} height="360">
          <cds-grid-column type="action"></cds-grid-column>
          <cds-grid-column>Host</cds-grid-column>
          <cds-grid-column>Status</cds-grid-column>
          <cds-grid-column>CPU</cds-grid-column>
          ${this.data.map(
            r => html` <cds-grid-row draggable="true" id=${r.id}>
              <cds-grid-cell>
                <cds-button-handle aria-label="sort ${r.id}"></cds-button-handle>
              </cds-grid-cell>
              <cds-grid-cell>${r.id}</cds-grid-cell>
              <cds-grid-cell>0%</cds-grid-cell>
              <cds-grid-cell>0%</cds-grid-cell>
            </cds-grid-row>`
          )}
          <cds-grid-placeholder draggable="false"></cds-grid-placeholder>
        </cds-grid>
        <div aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</div>`;
    }

    private sortList(e: any) {
      if (e.detail.type === 'reordered') {
        const fromIndex = this.data.findIndex(i => `${i.id}` === e.detail.from.id);
        const targetIndex = this.data.findIndex(i => `${i.id}` === e.detail.target.id);
        this.data = insertBefore(fromIndex, targetIndex, this.data);

        this.ariaLiveMessage = `host ${e.detail.from.id} moved to row ${
          this.data.findIndex(i => i.id === e.detail.from.id) + 1
        }`;
      } else {
        this.ariaLiveMessage = `host ${e.detail.from.id} ${e.detail.type}`;
      }
    }

    createRenderRoot() {
      return this;
    }
  }

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`<demo-grid-row-draggable></demo-grid-row-draggable>`);
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  it('should read draggable button actions', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'row draggable datagrid demo table 4 columns, 6 rows');
    test.queue(Commands.right, 'action column 1 of 4');
    test.queue(Commands.down, 'sort one toggle button');
    test.queue(Commands.space, 'host one grabbed');
    test.queue(Commands.arrowDown, 'host one moved to row 2');
    test.queue(Commands.arrowDown, 'sort one selected toggle button');
    test.queue(Commands.arrowDown, 'host one moved to row 3');
    test.queue(Commands.space, 'host one dropped');
    test.queue(Commands.arrowUp, 'sort three toggle button');
    test.queue(Commands.arrowUp, 'sort two toggle button');
    test.queue(Commands.space, 'host two grabbed');
    test.queue(Commands.arrowDown, 'host two moved to row 2');
    test.queue(Commands.space, 'host two dropped');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

describe('cds-grid column draggable', () => {
  let component: CdsGrid;
  let element: HTMLElement;

  @customElement('demo-grid-column-draggable')
  class DemoColumnDraggable extends LitElement {
    @state() private ariaLiveMessage = '';
    @state() private columns = [{ id: 'host' }, { id: 'status' }, { id: 'cpu' }, { id: 'memory' }];

    render() {
      return html` <cds-grid
          aria-label="column draggable datagrid demo"
          @cdsDraggableChange=${this.sortColumns}
          height="360"
        >
          ${this.columns.map(
            c => html` <cds-grid-column draggable="true" id=${c.id}
              >${c.id} <cds-button-handle aria-label="sort ${c.id} column"></cds-button-handle
            ></cds-grid-column>`
          )}
          <cds-grid-row>
            <cds-grid-cell>vm-host-001</cds-grid-cell>
            <cds-grid-cell>online</cds-grid-cell>
            <cds-grid-cell>5%</cds-grid-cell>
            <cds-grid-cell>10%</cds-grid-cell>
          </cds-grid-row>
        </cds-grid>
        <div aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</div>`;
    }

    private sortColumns(e: any) {
      if (e.detail.type === 'reordered') {
        const fromIndex = this.columns.findIndex(i => `${i.id}` === e.detail.from.id);
        const targetIndex = this.columns.findIndex(i => `${i.id}` === e.detail.target.id);
        this.columns = insertBefore(fromIndex, targetIndex, this.columns);
        this.ariaLiveMessage = `${e.detail.from.textContent} moved to column ${e.detail.target.ariaColIndex}`;
      } else {
        this.ariaLiveMessage = `${e.detail.from.textContent} column ${e.detail.type}`;
      }
    }

    createRenderRoot() {
      return this;
    }
  }

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`<demo-grid-column-draggable></demo-grid-column-draggable>`);
    component = element.querySelector<CdsGrid>('cds-grid');
  });

  it('should read draggable button actions', async () => {
    await componentIsStable(component);
    const test = new VoiceOverTest();
    test.queue(Commands.right, 'column draggable datagrid demo table 4 columns, 3 rows');
    test.queue(Commands.right, 'host host column 1 of 4');
    test.queue(Commands.right, 'sort host column toggle button');
    test.queue(Commands.space, 'host column grabbed');
    test.queue(Commands.arrowRight, 'host moved to column 2');
    test.queue(Commands.space, 'host column dropped');
    test.queue(Commands.arrowRight, 'sort cpu column toggle button');
    test.queue(Commands.space, 'cpu column grabbed');
    test.queue(Commands.arrowLeft, 'cpu moved to column 2');
    test.queue(Commands.space, 'cpu column dropped');
    const result = await test.run();

    expect(result.values).toEqual(result.expected);
  });
});
