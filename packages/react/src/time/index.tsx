import { CdsTime as TimeInput } from '@cds/core/time';
import '@cds/core/time/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsTime = createComponent(React, 'cds-time', TimeInput);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsTime.displayName = 'CdsTime';

logReactVersion(React);
