import { DemoService } from '@cds/core/demo';
import { html } from 'lit';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function placeholder() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="placeholder datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    <cds-grid-placeholder>
      <cds-icon shape="filter" size="xl"></cds-icon>
      <p cds-text="subsection">No VMs were found.</p>
    </cds-grid-placeholder>
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function empty() {
  return html`<cds-grid aria-label="empty datagrid demo" height="360"></cds-grid>`;
}