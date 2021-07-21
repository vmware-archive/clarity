import { LitElement, html } from 'lit';
import { baseStyles, i18n, I18nService, state } from '@cds/core/internal';
import styles from './grid-footer.element.scss';

/**
 * Grid Footer
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @element cds-grid-footer
 * @csspart footer
 * @cssprop --min-height
 */
export class CdsGridFooter extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @state({ type: String, reflect: true, attribute: 'slot' }) slot = 'footer';

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div part="footer">
        <slot>
          <div cds-layout="display:screen-reader-only">${this.i18n.footerEnd}</div>
        </slot>
      </div>
    `;
  }
}
