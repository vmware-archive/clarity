import { CdsTime as TimeInput } from '@cds/core/time';
import '@cds/core/time/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsTime = createComponent('cds-time', TimeInput);
