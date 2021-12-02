import { LitElement, html } from 'lit';
import { query } from 'lit/decorators/query.js';
import { queryAll } from 'lit/decorators/query-all.js';
import {
  baseStyles,
  createId,
  state,
  property,
  AriaGridController,
  querySlotAll,
  i18n,
  I18nService,
  querySlot,
  scrollableVisibility,
  ariaMultiSelectable,
  ariaGrid,
  gridRangeSelection,
  keyNavigationGrid,
  draggableList,
} from '@cds/core/internal';
import { CdsGridRow } from '../row/grid-row.element.js';
import { CdsGridCell } from '../cell/grid-cell.element.js';
import { CdsGridColumn } from '../column/grid-column.element.js';
import { GridLayoutController } from './grid-layout.controller.js';
import styles from './grid.element.scss';
import { CdsGridPlaceholder } from '../placeholder/grid-placeholder.element.js';

/**
 * Grid
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @element cds-grid
 * @event rangeSelectionChange
 * @cssprop --background
 * @cssprop --body-height
 * @cssprop --scrollbar-background
 * @cssprop --scrollbar-thumb-background
 * @cssprop --column-height
 * @cssprop --row-height
 * @cssprop --scroll-padding-top
 * @cssprop --row-content-visibility
 * @cssprop --column-text-align
 * @cssprop --cell-text-algin
 */
@ariaGrid<CdsGrid>()
@ariaMultiSelectable<CdsGrid>()
@keyNavigationGrid<CdsGrid>()
@gridRangeSelection<CdsGrid>()
@scrollableVisibility<CdsGrid>()
@draggableList<CdsGrid>({
  layout: 'horizontal',
  item: 'cds-grid-column',
  dropZone: 'cds-grid-column',
})
@draggableList<CdsGrid>({
  layout: 'vertical',
  item: 'cds-grid-row',
  dropZone: 'cds-grid-placeholder',
  manageFocus: false,
})
export class CdsGrid extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @property({ type: String }) columnLayout: 'fixed' | 'flex' = 'fixed';

  @property({ type: String }) height: string;

  @property({ type: String }) border: 'row' | 'cell' | 'column' | 'none' | 'stripe' = 'row';

  @property({ type: String }) selectable: 'multi' | 'single' | null;

  @property({ type: Boolean }) rangeSelection = true;

  @property({ type: Boolean }) scrollLock = false;

  @state({ type: String, reflect: true }) protected _id = createId();

  protected ariaGridController: AriaGridController<this>;

  protected gridLayoutController = new GridLayoutController(this);

  static styles = [baseStyles, styles];

  @query('[part="column-row-group"]', true) readonly columnRowGroup: HTMLElement;

  @query('[part="column-row"]', true) readonly columnRow: HTMLElement;

  @querySlotAll('cds-grid-column') readonly columns: NodeListOf<CdsGridColumn>;

  @query('[part="body-row-group"]', true) readonly rowGroup: HTMLElement;

  @querySlotAll('cds-grid-row') readonly rows: NodeListOf<CdsGridRow>;

  @querySlotAll('cds-grid-cell') readonly cells: NodeListOf<CdsGridCell>;

  @query('[part="footer-row-group"]', true) readonly footerRowGroup: HTMLElement;

  @query('[part="footer-row"]', true) readonly footerRow: HTMLElement;

  /** @readonly */
  @queryAll('[part="footer-grid-cell"]') readonly footerCells: NodeListOf<HTMLElement>;

  @querySlot('cds-grid-placeholder') readonly placeholder: CdsGridPlaceholder;

  get placeholderCell(): HTMLElement {
    return this.placeholder?.gridCell;
  }

  readonly grid = this;

  render() {
    return html`
      <div role="presentation" class="private-host">
        <div role="presentation" class="scroll-container">
          <div part="column-row-group">
            <div part="column-row">
              <slot name="columns" @slotchange=${() => this.ariaGridController.update()}>
                <cds-grid-column draggable-hidden>
                  <span cds-layout="display:screen-reader-only">${this.i18n.noData}</span>
                </cds-grid-column>
              </slot>
            </div>
          </div>
          <div part="body-row-group">
            <slot @slotchange=${() => this.ariaGridController.update()}>
              <cds-grid-placeholder></cds-grid-placeholder>
            </slot>
          </div>
        </div>
        <div part="footer-row-group">
          <div part="footer-row">
            <div part="footer-grid-cell">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
        <slot name="detail"></slot>
      </div>
    `;
  }
}
