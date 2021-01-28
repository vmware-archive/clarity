import { CdsDivider as Divider } from '@cds/core/divider';
import '@cds/core/divider/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsDivider = createComponent('cds-divider', Divider);
