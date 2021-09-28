import { CdsInternalVisualCheckbox as VisualCheckbox } from '@cds/core/internal-components/visual-checkbox';
import '@cds/core/internal-components/visual-checkbox/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsInternalVisualCheckbox = createComponent(React, 'cds-internal-visual-checkbox', VisualCheckbox);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsInternalVisualCheckbox.displayName = 'CdsInternalVisualCheckbox';

logReactVersion(React);
