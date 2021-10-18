import { CdsSelect as SelectInput } from '@cds/core/select';
import '@cds/core/select/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsSelect = createComponent(React, 'cds-select', SelectInput);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsSelect.displayName = 'CdsSelect';

logReactVersion(React);
