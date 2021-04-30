import { baseStyles, internalProperty } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './breadcrumb.element.css.js';

export const CdsBreadcrumbTagName = 'cds-breadcrumb';

interface ItemEntry {
  element: Element;
  separator: Element;
}

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

  render() {
    return html`
      <div class="private-host">
        <ol cds-layout="horizontal gap:sm align:vertical-center">
          ${this.getItems().map(
            item =>
              html`<li cds-layout="horizontal gap:sm align:vertical-center">
                ${item.element} ${item.separator}
              </li>`
          )}
        </ol>
      </div>
    `;
  }

  getItems(): ItemEntry[] {
    const customSeparator = Array.from(this.children).find(c => c.getAttribute('slot') === 'cds-separator');
    return Array.from(this.children)
      .filter(c => !(c.getAttribute('slot') || '').startsWith('cds-separator'))
      .map(element => {
        let separator: Element;
        if (customSeparator) {
          separator = customSeparator.cloneNode(true) as Element;
          separator.setAttribute('part', 'separator');
          separator.removeAttribute('slot');
        } else {
          separator = document.createElement('span');
          separator.setAttribute('part', 'separator');
          separator.setAttribute('aria-hidden', 'true');
          separator.textContent = '/';
        }
        return { element, separator };
      });
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
