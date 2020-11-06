import { CdsDate as DateInput } from '@cds/core/date';

import '@cds/core/date/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDateInputType = DateInput;

export class CdsDate extends createReactComponent<CdsDateInputType>('cds-date') {}
