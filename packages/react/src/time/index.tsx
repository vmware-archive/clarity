import { CdsTime as TimeInput } from '@cds/core/time';

import '@cds/core/time/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTimeInputType = TimeInput;

export class CdsTime extends createReactComponent<CdsTimeInputType>('cds-time') {}
