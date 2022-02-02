import { CdsButtonSort as ButtonSort } from '@cds/core/button-sort';
import '@cds/core/button-sort/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButtonSort = createComponent(React, 'cds-button-sort', ButtonSort, {}, 'CdsButtonSort');

logReactVersion(React);
