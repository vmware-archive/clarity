import { CdsRange as RangeInput } from '@clr/core/range';

import '@clr/core/range/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsRangeInputType = RangeInput;

export class CdsRange extends createReactComponent<CdsRangeInputType>('cds-range') {}
