import { CdsBadge as Badge } from '@cds/core/badge';
import '@cds/core/badge/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsBadge = createComponent(React, 'cds-badge', Badge);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsBadge.displayName = 'CdsBadge';

logReactVersion(React);
