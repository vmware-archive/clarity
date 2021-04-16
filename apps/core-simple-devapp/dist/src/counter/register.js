import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { minusIcon } from '@cds/core/icon/shapes/minus.js';
import { plusIcon } from '@cds/core/icon/shapes/plus.js';
import { CdaCounter } from './counter.element.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
ClarityIcons.addIcons(plusIcon, minusIcon);
let CdaCounterRegistration = class CdaCounterRegistration extends CdaCounter {
}; // eslint-disable-line
CdaCounterRegistration = __decorate([
    customElement('cda-counter')
], CdaCounterRegistration);
//# sourceMappingURL=register.js.map