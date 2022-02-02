import { CdsInternalPanel as Panel } from '@cds/core/internal-components/panel';
import '@cds/core/internal-components/panel/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../../utils/index.js';

export const CdsInternalPanel = createComponent(React, 'cds-internal-panel', Panel, {}, 'CdsInternalPanel');

logReactVersion(React);
