import { CdsTime as TimeInput } from '@clr/core/time';

import '@clr/core/time/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTimeInputType = TimeInput;

export class CdsTime extends createReactComponent<CdsTimeInputType>('cds-time') {}
