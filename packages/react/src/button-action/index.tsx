import { CdsButtonAction as ButtonAction } from '@cds/core/button-action';
import '@cds/core/button-action/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButtonAction = createComponent(React, 'cds-button-action', ButtonAction, {}, 'CdsButtonAction');

logReactVersion(React);
