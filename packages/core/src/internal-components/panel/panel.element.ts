import { LitElement, html } from 'lit-element';
import { baseStyles } from '@cds/core/internal';
import { styles } from './panel.element.css.js';

export const CdsInternalPanelTagName = 'cds-internal-panel';

/**
 *
 * ```typescript
 * import '@cds/core/internal-components/panel/register.js';
 * ```
 *
 * ```html
 * <cds-internal-panel>
 *  // content
 * </cds-internal-panel>
 * ```
 *
 * @beta
 * @element cds-internal-panel
 * @slot - Content slot for the content inside the panel
 * @cssprop --width
 * @cssprop --height
 * @cssprop --color
 * @cssprop --overflow
 * @cssprop --overflow-x
 * @cssprop --overflow-y
 * @cssprop --background
 * @cssprop --border
 * @cssprop --border-radius
 * @cssprop --padding
 * @cssprop --box-shadow
 */
export class CdsInternalPanel extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
      </div>
    `;
  }
}
