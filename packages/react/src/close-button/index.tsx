import { CdsInternalCloseButton as CloseButton } from '@cds/core/internal-components/close-button';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsInternalCloseButton = createComponent(React, 'cds-internal-close-button', CloseButton);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsInternalCloseButton.displayName = 'CdsInternalCloseButton';

logReactVersion(React);
