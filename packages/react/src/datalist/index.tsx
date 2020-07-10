import { CdsDatalist as Datalist } from '@clr/core/datalist';

import '@clr/core/datalist/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDatalist = Datalist;

export const CdsDatalist = createReactComponent<CdsDatalist>('cds-datalist');
