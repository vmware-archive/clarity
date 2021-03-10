import { CdsDate as DateInput } from '@cds/core/date';
import '@cds/core/date/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsDate = createComponent('cds-date', DateInput);
