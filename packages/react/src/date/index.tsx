import { CdsDate as DateInput } from '@clr/core/date';

import '@clr/core/date/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDateInputType = DateInput;

export class CdsDate extends createReactComponent<CdsDateInputType>('cds-date') {}
