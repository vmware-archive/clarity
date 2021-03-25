import { baseStyles, createId, internalProperty, querySlot } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './breadcrumb.element.css.js';

/**
 * ```typescript
 * import '@cds/core/breadcrumb/register.js';
 * ```
 *
 * ```html
 * <cds-breadcrumb aria-label="breadcrumb">
 *   <a href="/home" cds-text="link">Home</a>
 *   <a href="/parent" cds-text="link">Parent page</a>
 *   <span aria-current="page">Current page</span>
 * </cds-breadcrumb>
 * ```
 *
 * @beta
 * @element cds-breadcrumb
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --color
 */
export class CdsBreadcrumb extends LitElement {
  @internalProperty({ type: String, reflect: true, attribute: 'role' })
  protected role = 'navigation';

  @internalProperty({ type: Array }) private navItems: Element[] = [];

  @querySlot('[slot="cds-separator"]') private customSeparator: HTMLElement;

  render() {
    return html`
      <div class="private-host">
        <ol cds-layout="horizontal gap:sm align:vertical-center">
          ${this.slotNames.map(
            slotName => html`
              <li cds-layout="horizontal gap:sm align:vertical-center">
                <slot name="${slotName}"></slot>
                <span part="separator" aria-hidden="true">${this.separator}</span>
              </li>
            `
          )}
        </ol>
      </div>
      <slot @slotchange=${this.assignSlots}></slot>
    `;
  }
  private get separator() {
    if (this.customSeparator) {
      const separatorClone = this.customSeparator.cloneNode(true) as Element;
      separatorClone.removeAttribute('slot');
      return separatorClone;
    } else {
      return html`/`;
    }
  }

  private assignSlots() {
    this.navItems = Array.from(this.children)
      .filter(c => c.getAttribute('slot') !== 'cds-separator')
      .map(element => {
        element.setAttribute('slot', createId());
        return element;
      });
  }

  private get slotNames(): string[] {
    return this.navItems.map(element => element.slot);
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
