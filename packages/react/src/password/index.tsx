import { CdsPassword as Password } from '@cds/core/password';
import '@cds/core/password/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsPassword = createComponent('cds-password', Password);
