import { CdsSelect as SelectInput } from '@cds/core/select';
import '@cds/core/select/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsSelect = createComponent(React, 'cds-select', SelectInput, {}, 'CdsSelect');

logReactVersion(React);
