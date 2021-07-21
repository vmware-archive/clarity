import { LitElement, html } from 'lit';
import { query } from 'lit/decorators/query.js';
import { baseStyles, i18n, I18nService } from '@cds/core/internal';
import styles from './grid-placeholder.element.scss';

/**
 * Grid Placeholder
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @element cds-grid-placeholder
 * @csspart placeholder
 */
export class CdsGridPlaceholder extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @query('[role="gridcell"]', true) readonly gridCell: HTMLElement;

  static styles = [baseStyles, styles];

  role = 'row';

  render() {
    return html`
      <div role="gridcell" part="placeholder" cds-layout="vertical gap:lg align:center">
        <slot>
          ${this.getAttribute('draggable') !== 'false'
            ? html`<cds-icon shape="filter" size="xl"></cds-icon>
                <p cds-text="message">${this.i18n.noData}</p>`
            : html`<p cds-layout="display:screen-reader-only">${this.i18n.dropTarget}</p>`}
        </slot>
      </div>
    `;
  }
}
