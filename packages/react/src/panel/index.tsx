import { CdsInternalPanel as Panel } from '@cds/core/internal-components/panel';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsInternalPanel = createComponent(React, 'cds-internal-panel', Panel, {}, 'CdsInternalPanel');

logReactVersion(React);
