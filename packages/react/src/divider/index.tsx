import { CdsDivider as Divider } from '@cds/core/divider';
import '@cds/core/divider/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsDivider = createComponent(React, 'cds-divider', Divider);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsDivider.displayName = 'CdsDivider';

logReactVersion(React);
