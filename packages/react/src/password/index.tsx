import { CdsPassword as Password } from '@cds/core/password';

import '@cds/core/password/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsPasswordType = Password;

export class CdsPassword extends createReactComponent<CdsPasswordType>('cds-password') {}
