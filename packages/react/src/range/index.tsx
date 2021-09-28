import { CdsRange as RangeInput } from '@cds/core/range';
import '@cds/core/range/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsRange = createComponent(React, 'cds-range', RangeInput);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsRange.displayName = 'CdsRange';

logReactVersion(React);
