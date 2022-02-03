import { CdsPassword as Password } from '@cds/core/password';
import '@cds/core/password/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsPassword = createComponent(React, 'cds-password', Password, {}, 'CdsPassword');

logReactVersion(React);
