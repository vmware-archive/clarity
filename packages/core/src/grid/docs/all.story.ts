import { html } from 'lit';
import { asyncData } from './async-data.story.js';
import { borderCell, borderColumn, borderStripe, borderNone } from './border.story.js';
import { cellEditable } from './cell-editable.story.js';
import { columnAlignRight, columnAlignCenter } from './column-align.story.js';
import { columnDraggable } from './column-draggable.story.js';
import { columnFilter } from './column-filter.story.js';
import { columnFixed, columnFixedDynamic, columnMultiFixed } from './column-fixed.story.js';
import { columnMultiFilter } from './column-multi-filter.story.js';
import { columnResize, columnFlexWidth } from './column-resize.story.js';
import { columnSticky } from './column-sticky.story.js';
import { columnVisibility } from './column-visibility.story.js';
import { columnOverflow, columnFixedWidth } from './column-width.story.js';
import { compact } from './compact.story.js';
import { darkTheme } from './dark-theme.story.js';
import { footer, footerOptional } from './footer.story.js';
import { basic, keyboard } from './grid.story.js'; // dynamicGrid
import { kitchenSink } from './kitchen-sink.story.js';
import { pagination } from './pagination.story.js';
import { performance } from './performance.story.js';
import { placeholder } from './placeholder.story.js';
import { rangeSelect, rangeSelectContextMenu } from './range-select.story.js';
import { responsive } from './responsive.story.js';
import { rowAction } from './row-action.story.js';
import { rowBatchAction } from './row-batch-action.story.js';
import { rowDetail, rowDetailExpand } from './row-detail.story.js';
import { rowDraggable } from './row-draggable.story.js';
import { rowFixed } from './row-fixed.story.js';
import { rowGroups } from './row-groups.story.js';
import { rowHeader } from './row-header.story.js';
import { rowHeight } from './row-height.story.js';
import { rowMultiSelect } from './row-multi-select.story.js';
import { rowMultiSort } from './row-multi-sort.story.js';
import { rowSingleSelect } from './row-single-select.story.js';
import { rowSort } from './row-sort.story.js';
import { rowSticky } from './row-sticky.story.js';
import { rowSwappable } from './row-swappable.story.js';
import { rtl } from './rtl.story.js';
import { noScroll } from './scroll-height.story.js';

export function all() {
  return html`
    <style>
      .grid-all-demo > div > *:nth-child(2) {
        width: 100%;
      }
    </style>
    <section class="grid-all-demo" cds-layout="grid cols@lg:6 cols@xl:4 gap:lg">
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Basic</h2>
        ${basic()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Keyboard</h2>
        ${keyboard()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Resize</h2>
        ${columnResize()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Flex Width</h2>
        ${columnFlexWidth()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Overflow</h2>
        ${columnOverflow()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed Width</h2>
        ${columnFixedWidth()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Placeholder</h2>
        ${placeholder()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Pagination</h2>
        ${pagination()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Visibility</h2>
        ${columnVisibility()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Detail</h2>
        ${rowDetail()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Detail RTL</h2>
        ${rtl()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Detail Expand</h2>
        ${rowDetailExpand()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Groups</h2>
        ${rowGroups()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Single Select</h2>
        ${rowSingleSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Multi Select</h2>
        ${rowMultiSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Range Select</h2>
        ${rangeSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Range Select Context Menu</h2>
        ${rangeSelectContextMenu()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Action</h2>
        ${rowAction()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Batch Action</h2>
        ${rowBatchAction()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Sort</h2>
        ${rowSort()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Multi Sort</h2>
        ${rowMultiSort()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Filter</h2>
        ${columnFilter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Multi Filter</h2>
        ${columnMultiFilter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Async Data</h2>
        ${asyncData()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed</h2>
        ${columnFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed Dynamic</h2>
        ${columnFixedDynamic()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Multi Fixed</h2>
        ${columnMultiFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Sticky</h2>
        ${columnSticky()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Align Center</h2>
        ${columnAlignCenter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Align Right</h2>
        ${columnAlignRight()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Cell Editable</h2>
        ${cellEditable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Footer</h2>
        ${footer()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Footer Optional</h2>
        ${footerOptional()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Height</h2>
        ${rowHeight()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Compact</h2>
        ${compact()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Draggable</h2>
        ${rowDraggable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Swappable</h2>
        ${rowSwappable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Draggable</h2>
        ${columnDraggable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Fixed</h2>
        ${rowFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Sticky</h2>
        ${rowSticky()}
      </div>
      <div cds-layout="vertical gap:lg" style="min-height: 650px">
        <h2 cds-text="section">Performance</h2>
        ${performance()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Kitchen Sink</h2>
        ${kitchenSink()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Responsive</h2>
        ${responsive()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Dark Theme</h2>
        ${darkTheme()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Cell</h2>
        ${borderCell()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Column</h2>
        ${borderColumn()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Stripe</h2>
        ${borderStripe()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border None</h2>
        ${borderNone()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Header</h2>
        ${rowHeader()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">No Scroll</h2>
        ${noScroll()}
      </div>
    </section>
  `;
}
