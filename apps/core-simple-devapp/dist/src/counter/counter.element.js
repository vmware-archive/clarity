import { __decorate } from "tslib";
import { html, LitElement, property } from 'lit-element';
import { styles } from './counter.element.styles.js';
/**
 * @internal
 * Base styles are currently an internal API not subject to semver updates.
 *
 * The base styles provide styles for core components that use shadow DOM.
 * Components using the base styles are required to have the global clarity
 * core styles loaded in the window.
 */
import { baseStyles } from '@cds/core/internal';
export class CdaCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 0;
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        return html `
      <div cds-layout="horizontal gap:md align:center">
        <cds-icon-button
          aria-label="decrement"
          @click=${() => this.emit('decrement')}
        >
          <cds-icon shape="minus"></cds-icon>
        </cds-icon-button>
        <div class="value">
          <p cds-text="subsection center">
            ${this.value}
            <slot></slot>
          </p>
        </div>
        <cds-icon-button
          aria-label="increment"
          @click=${() => this.emit('increment')}
        >
          <cds-icon shape="plus"></cds-icon>
        </cds-icon-button>
      </div>
    `;
    }
    emit(value) {
        this.dispatchEvent(new CustomEvent(value));
    }
}
__decorate([
    property({ type: Number })
], CdaCounter.prototype, "value", void 0);
//# sourceMappingURL=counter.element.js.map