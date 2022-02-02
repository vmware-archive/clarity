import { CdsDivider as Divider } from '@cds/core/divider';
import '@cds/core/divider/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsDivider = createComponent(React, 'cds-divider', Divider, {}, 'CdsDivider');

logReactVersion(React);
