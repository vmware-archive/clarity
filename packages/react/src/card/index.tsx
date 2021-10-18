import { CdsCard as Card } from '@cds/core/card';
import '@cds/core/card/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsCard = createComponent(React, 'cds-card', Card);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsCard.displayName = 'CdsCard';

logReactVersion(React);
