import { CdsProgressCircle as ProgressCircle } from '@cds/core/progress-circle';
import '@cds/core/progress-circle/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsProgressCircle = createComponent(React, 'cds-progress-circle', ProgressCircle, {}, 'CdsProgressCircle');

logReactVersion(React);
