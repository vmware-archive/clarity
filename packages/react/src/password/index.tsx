import { CdsPassword as Password } from '@clr/core/password';

import '@clr/core/password/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsPassword = Password;

export const CdsPassword = createReactComponent<CdsPassword>('cds-password');
