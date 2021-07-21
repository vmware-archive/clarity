import { LitElement, html } from 'lit';
import { baseStyles, EventEmitter, i18n, I18nService, property, event } from '@cds/core/internal';
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
 * @beta
 * @element cds-grid-column
 * @event resizeChange - notifies when column has been resized
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

  protected gridColumnSizeController = new GridColumnSizeController(this);

  protected gridColumnPositionController = new GridColumnPositionController(this);

  private get grid() {
    return this.parentElement as HTMLElement & { scrollLock: boolean };
  }

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host" focusable>
        <slot>
          ${this.type === 'action'
            ? html`<span cds-layout="display:screen-reader-only">${this.i18n.action}</span>`
            : ''}
        </slot>
        ${this.resizable
          ? html`<cds-internal-split-handle
              @cdsTouchStart=${() => (this.grid.scrollLock = true)}
              @cdsTouchEnd=${() => (this.grid.scrollLock = false)}
            >
              <input
                type="range"
                step="10"
                .ariaLabel=${this.i18n.resizeColumn}
                @change=${(e: any) => this.resizeChange.emit(e.target.valueAsNumber)}
              />
            </cds-internal-split-handle>`
          : html`<cds-internal-split-handle readonly></cds-internal-split-handle>`}
        <div class="line"></div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'columns';
  }
}
