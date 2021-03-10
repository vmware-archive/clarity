import { CdsDatalist as Datalist } from '@cds/core/datalist';
import '@cds/core/datalist/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsDatalist = createComponent('cds-datalist', Datalist);
