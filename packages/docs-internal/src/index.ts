import { DocComponentStatus } from './component-status/component-status.element.js';

!customElements.get('doc-component-status')
  ? window.customElements.define('doc-component-status', DocComponentStatus)
  : console.warn('doc-component-status registered already');

declare global {
  interface HTMLElementTagNameMap {
    'doc-component-status': DocComponentStatus;
  }
}
