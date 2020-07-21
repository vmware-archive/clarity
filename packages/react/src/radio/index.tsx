import { CdsRadio as Radio } from '@clr/core/radio';
import { CdsRadioGroup as RadioGroup } from '@clr/core/radio';

import '@clr/core/radio/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsRadioType = Radio;
type CdsRadioGroupType = RadioGroup;

export class CdsRadio extends createReactComponent<CdsRadioType>('cds-radio') {}
export class CdsRadioGroup extends createReactComponent<CdsRadioGroupType>('cds-radio-group') {}
