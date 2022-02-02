import { CdsButtonExpand as ButtonExpand } from '@cds/core/button-expand';
import '@cds/core/button-expand/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButtonExpand = createComponent(React, 'cds-button-expand', ButtonExpand, {}, 'CdsButtonExpand');

logReactVersion(React);
