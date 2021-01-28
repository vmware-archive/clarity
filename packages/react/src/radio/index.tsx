import { CdsRadio as Radio, CdsRadioGroup as RadioGroup } from '@cds/core/radio';
import '@cds/core/radio/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsRadio = createComponent('cds-radio', Radio);
export const CdsRadioGroup = createComponent('cds-radio-group', RadioGroup);
