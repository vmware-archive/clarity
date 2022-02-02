import { CdsButtonHandle as ButtonHandle } from '@cds/core/button-handle';
import '@cds/core/button-handle/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButtonHandle = createComponent(React, 'cds-button-handle', ButtonHandle, {}, 'CdsButtonHandle');

logReactVersion(React);
