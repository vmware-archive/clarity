import { CdsBadge as Badge } from '@cds/core/badge';
import '@cds/core/badge/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsBadge = createComponent(React, 'cds-badge', Badge, {}, 'CdsBadge');

logReactVersion(React);
