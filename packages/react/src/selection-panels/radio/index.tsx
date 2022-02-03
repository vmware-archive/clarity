import { CdsRadioPanel as RadioPanel } from '@cds/core/selection-panels/radio';
import '@cds/core/selection-panels/radio/register.js';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../../utils/index.js';

export const CdsRadioPanel = createComponent(React, 'cds-radio', RadioPanel, {}, 'CdsRadioPanel');

logReactVersion(React);
