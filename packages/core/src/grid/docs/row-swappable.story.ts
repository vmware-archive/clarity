import { css, html, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService, insertBefore, swapBetweenLists } from '@cds/core/demo';
import '@cds/core/button-handle/register.js';
import '@cds/core/grid/register.js';

export function rowSwappable() {
  @customElement('demo-grid-row-swappable')
  class DemoRowSwappable extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private listOne = this.grid.rows.slice(0, 3);
    @state() private listTwo = this.grid.rows.slice(4, 7);
    @state() private selectedEntryId: string;
    @state() private ariaLiveMessage = '';
    @state() private anchor: HTMLElement;

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    render() {
      return html`
        <div cds-layout="vertical gap:lg">
          <cds-grid aria-label="production VMs" @cdsDraggableChange=${this.sortOne} height="360">
            <cds-grid-column type="action"></cds-grid-column>
            <cds-grid-column type="action"></cds-grid-column>
            ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
            ${this.listOne.map(
              row => html` <cds-grid-row draggable="true" id=${row.id}>
                <cds-grid-cell>
                  <cds-button-handle aria-label="sort ${row.id}"></cds-button-handle>
                </cds-grid-cell>
                <cds-grid-cell>
                  <cds-button-action
                    popup="migrate-dropdown"
                    aria-label="${row.id} actions"
                    @click=${(e: any) => this.selectEntry(row, e.target)}
                  ></cds-button-action>
                </cds-grid-cell>
                ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
              </cds-grid-row>`
            )}
            <cds-grid-placeholder draggable="false">Production Environment</cds-grid-placeholder>
            <cds-grid-footer>List One: ${this.listOne.map(i => html`${i.id} `)}</cds-grid-footer>
          </cds-grid>

          <p cds-text="body">
            aria-live: <span aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</span>
          </p>

          <cds-grid aria-label="staging VMs" @cdsDraggableChange=${this.sortTwo} height="360">
            <cds-grid-column type="action"></cds-grid-column>
            <cds-grid-column type="action"></cds-grid-column>
            ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
            ${this.listTwo.map(
              row => html` <cds-grid-row draggable="true" id=${row.id}>
                <cds-grid-cell>
                  <cds-button-handle aria-label="sort ${row.id}"></cds-button-handle>
                </cds-grid-cell>
                <cds-grid-cell>
                  <cds-button-action
                    popup="migrate-dropdown"
                    aria-label="${row.id} actions"
                    @click=${(e: any) => this.selectEntry(row, e.target)}
                  ></cds-button-action>
                </cds-grid-cell>
                ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
              </cds-grid-row>`
            )}
            <cds-grid-placeholder draggable="false">Staging Environment</cds-grid-placeholder>
            <cds-grid-footer>List Two: ${this.listTwo.map(j => html`${j.id} `)}</cds-grid-footer>
          </cds-grid>
        </div>
        <cds-dropdown
          id="migrate-dropdown"
          ?hidden=${!this.selectedEntryId}
          .anchor=${this.anchor}
          @closeChange=${() => (this.selectedEntryId = null) as any}
        >
          <div cds-layout="vertical align:stretch p:sm">
            <cds-button @click=${this.appendToOtherGrid} action="flat" size="sm"
              >Move to
              <span
                >${this.listOne.find(i => i.id === this.selectedEntryId) ? 'Staging' : 'Production'}</span
              ></cds-button
            >
          </div>
        </cds-dropdown>
      `;
    }

    private selectEntry(entry: DemoGridRow, anchor: HTMLElement) {
      this.selectedEntryId = entry.id;
      this.anchor = anchor;
    }

    private appendToOtherGrid() {
      let item = this.listOne.find(i => i.id === this.selectedEntryId);

      if (item) {
        this.listOne.splice(this.listOne.indexOf(item), 1);
        this.listTwo.push(item);
      } else {
        item = this.listTwo.find(i => i.id === this.selectedEntryId);
        this.listTwo.splice(this.listTwo.indexOf(item), 1);
        this.listOne.push(item);
      }

      this.listOne = [...this.listOne];
      this.listTwo = [...this.listTwo];
      this.selectedEntryId = null;
    }

    private sortOne(e: any) {
      this.setAriaLiveMessage(e);
      if (e.detail.type === 'reordered') {
        if (this.listOne.find(i => i.id === e.detail.from.id)) {
          const fromIndex = this.listOne.findIndex(i => `${i.id}` === e.detail.from.id);
          const targetIndex = this.listOne.findIndex(i => `${i.id}` === e.detail.target.id);
          this.listOne = insertBefore(fromIndex, targetIndex, this.listOne);
        } else {
          const { fromList, targetList } = swapBetweenLists<DemoGridRow>(this.listOne, this.listTwo, e.detail);
          this.listOne = targetList;
          this.listTwo = fromList;
        }
      }
    }

    private sortTwo(e: any) {
      this.setAriaLiveMessage(e);
      if (e.detail.type === 'reordered') {
        if (this.listTwo.find(i => i.id === e.detail.from.id)) {
          const fromIndex = this.listTwo.findIndex(i => `${i.id}` === e.detail.from.id);
          const targetIndex = this.listTwo.findIndex(i => `${i.id}` === e.detail.target.id);
          this.listTwo = insertBefore(fromIndex, targetIndex, this.listTwo);
        } else {
          const { fromList, targetList } = swapBetweenLists<DemoGridRow>(this.listTwo, this.listOne, e.detail);
          this.listTwo = targetList;
          this.listOne = fromList;
        }
      }
    }

    private setAriaLiveMessage(e: any) {
      if (e.detail.type === 'reordered') {
        const listOneIndex = this.listOne.findIndex(i => i.id === e.detail.target.id);
        const listTwoIndex = this.listTwo.findIndex(i => i.id === e.detail.target.id);
        this.ariaLiveMessage = `host ${e.detail.from.id} moved to row ${
          (listOneIndex !== -1 ? listOneIndex : listTwoIndex) + 1
        } ${listOneIndex !== -1 ? 'production' : 'staging'}`;
      } else {
        this.ariaLiveMessage = `host ${e.detail.from.id} ${e.detail.type}`;
      }
    }
  }
  return html`<demo-grid-row-swappable></demo-grid-row-swappable>`;
}
