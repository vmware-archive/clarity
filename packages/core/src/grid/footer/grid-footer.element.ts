import { LitElement, html } from 'lit';
import { baseStyles, i18n, I18nService } from '@cds/core/internal';
import styles from './grid-footer.element.scss';

/**
 * Grid Footer
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @beta
 * @element cds-grid-footer
 * @cssprop --min-height
 */
export class CdsGridFooter extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host">
        <slot>
          <div cds-layout="display:screen-reader-only">${this.i18n.footerEnd}</div>
        </slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'footer';
  }
}
