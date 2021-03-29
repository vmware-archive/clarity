import { property, globalStyle } from '@cds/core/internal';
import { CdsInternalPanel } from '@cds/core/internal-components/panel';
import { css } from 'lit-element';
import { styles } from './card.element.css.js';

export const CdsCardTagName = 'cds-card';

/**
 * Web component card.
 *
 * ```typescript
 * import '@cds/core/card/register.js';
 * ```
 *
 * ```html
 * <cds-card>
    <div cds-layout="vertical gap:md">
      <div cds-text="section" cds-layout="p-y:sm">
        <!-- Card title -->
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body" cds-layout="p-y:md">
        <!-- Card content -->
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>
 * ```
 *
 * @element cds-card
 * @slot - For projecting card content
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
 * @cssprop --cds-card-remove-margin
 */
export class CdsCard extends CdsInternalPanel {
  @property({ type: String, reflect: true }) role = 'region';

  @globalStyle() globalStyles = css`
    [cds-card-remove-margin] {
      margin-left: calc(-1 * var(--card-remove-margin));
      width: calc(100% + calc(var(--card-remove-margin) * 2));
    }
  `;

  static get styles() {
    return [...super.styles, styles];
  }
}
