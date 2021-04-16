import { CdaCounter } from './counter.element.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
declare global {
    interface HTMLElementTagNameMap {
        'cda-counter': CdaCounter;
    }
}
