import { CdsDatalist as Datalist } from '@cds/core/datalist';

import '@cds/core/datalist/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDatalistType = Datalist;

export class CdsDatalist extends createReactComponent<CdsDatalistType>('cds-datalist') {}
