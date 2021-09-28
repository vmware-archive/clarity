import { CdsDate as DateInput } from '@cds/core/date';
import '@cds/core/date/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsDate = createComponent(React, 'cds-date', DateInput);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsDate.displayName = 'CdsDate';

logReactVersion(React);
