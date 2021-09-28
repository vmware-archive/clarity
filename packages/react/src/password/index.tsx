import { CdsPassword as Password } from '@cds/core/password';
import '@cds/core/password/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsPassword = createComponent(React, 'cds-password', Password);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsPassword.displayName = 'CdsPassword';

logReactVersion(React);
