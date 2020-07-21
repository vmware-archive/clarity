import { CdsPassword as Password } from '@clr/core/password';

import '@clr/core/password/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsPasswordType = Password;

export class CdsPassword extends createReactComponent<CdsPasswordType>('cds-password') {}
