import { CdsInternalPanel as Panel } from '@cds/core/internal-components/panel';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsInternalPanel = createComponent(React, 'cds-internal-panel', Panel);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsInternalPanel.displayName = 'CdsInternalPanel';

logReactVersion(React);
