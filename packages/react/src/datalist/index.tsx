import { CdsDatalist as Datalist } from '@cds/core/datalist';
import '@cds/core/datalist/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsDatalist = createComponent('cds-datalist', Datalist);
