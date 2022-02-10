import { css } from 'lit';
import { globalStyle } from '@cds/core/internal';
import { CdsInternalPanel } from '@cds/core/internal-components/panel';
import styles from './card.element.scss';

/**
 * Web component card.
 *
 * ```typescript
 * import '@cds/core/card/register.js';
 * ```
 *
 * ```html
 * <cds-card aria-labelledby="{label your card}">
    <div cds-layout="vertical gap:md">
      <h2 id="{label your card}" cds-text="section">
        <!-- Card title -->
      </h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light">
        <!-- Card content -->
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>
 * ```
 *
 * @beta
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
  @globalStyle() protected globalStyles = css`
    [cds-card-remove-margin] {
      margin-left: calc(-1 * var(--card-remove-margin));
      width: calc(100% + calc(var(--card-remove-margin) * 2));
    }
  `;

  static get styles() {
    return [...super.styles, styles];
  }

  connectedCallback() {
    super.connectedCallback();
    this.role = 'region';
  }
}
