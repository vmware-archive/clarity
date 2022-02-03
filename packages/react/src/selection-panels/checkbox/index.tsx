import { CdsCheckboxPanel as CheckboxPanel } from '@cds/core/selection-panels/checkbox';
import '@cds/core/selection-panels/checkbox/register.js';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../../utils/index.js';

export const CdsCheckboxPanel = createComponent(React, 'cds-checkbox', CheckboxPanel, {}, 'CdsCheckboxPanel');

logReactVersion(React);
