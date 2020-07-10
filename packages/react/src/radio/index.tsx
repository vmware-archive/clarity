import { CdsRadio as Radio } from '@clr/core/radio';
import { CdsRadioGroup as RadioGroup } from '@clr/core/radio';

import '@clr/core/radio/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsRadioype = Radio;
type CdsRadioGroupType = RadioGroup;

export const CdsRadio = createReactComponent<CdsRadioype>('cds-radio');
export const CdsRadioGroup = createReactComponent<CdsRadioGroupType>('cds-radio-group');
