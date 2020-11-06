import { CdsRadio as Radio } from '@cds/core/radio';
import { CdsRadioGroup as RadioGroup } from '@cds/core/radio';

import '@cds/core/radio/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsRadioType = Radio;
type CdsRadioGroupType = RadioGroup;

export class CdsRadio extends createReactComponent<CdsRadioType>('cds-radio') {}
export class CdsRadioGroup extends createReactComponent<CdsRadioGroupType>('cds-radio-group') {}
