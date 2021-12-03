import { LitElement, html } from 'lit';
import { baseStyles, EventEmitter, i18n, I18nService, property, state, event } from '@cds/core/internal';
import { GridColumnSizeController } from './grid-column-size.controller.js';
import { GridColumnPositionController } from './grid-column-position.controller.js';
import styles from './grid-column.element.scss';

/**
 * Grid Column
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @element cds-grid-column
 * @csspart column
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --justify-content
 * @cssprop --padding-block
 * @cssprop --padding-inline-start
 * @cssprop --padding-inline-end
 */
export class CdsGridColumn extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @property({ type: String }) width: string;

  @property({ type: Boolean }) resizable = false;

  @property({ type: String }) type: '' | 'action' = '';

  @property({ type: String }) position: '' | 'sticky' | 'fixed' = '';

  @event() resizeChange: EventEmitter<number>;

  @state({ type: String, attribute: 'slot', reflect: true }) slot = 'columns';

  protected gridColumnSizeController = new GridColumnSizeController(this);

  protected gridColumnPositionController = new GridColumnPositionController(this);

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div part="column" focusable>
        <slot
          >${this.type === 'action'
            ? html`<span cds-layout="display:screen-reader-only">${this.i18n.action}</span>`
            : ''}</slot
        >
        <cds-action-resize>
          ${this.resizable
            ? html`<input
                type="range"
                step="10"
                .ariaLabel=${this.i18n.resizeColumn}
                @change=${(e: any) => this.resizeChange.emit(e.target.valueAsNumber)}
              />`
            : ''}
        </cds-action-resize>
        <div class="line"></div>
      </div>
    `;
  }
}
