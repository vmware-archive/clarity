import { CdsRange as RangeInput } from '@cds/core/range';

import '@cds/core/range/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsRangeInputType = RangeInput;

export class CdsRange extends createReactComponent<CdsRangeInputType>('cds-range') {}
