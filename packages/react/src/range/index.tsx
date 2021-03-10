import { CdsRange as RangeInput } from '@cds/core/range';
import '@cds/core/range/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsRange = createComponent('cds-range', RangeInput);
