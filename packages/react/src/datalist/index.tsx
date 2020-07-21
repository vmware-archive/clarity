import { CdsDatalist as Datalist } from '@clr/core/datalist';

import '@clr/core/datalist/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDatalistType = Datalist;

export class CdsDatalist extends createReactComponent<CdsDatalistType>('cds-datalist') {}
