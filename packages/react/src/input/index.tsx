import { CdsInput as Input, CdsInputGroup as InputGroup } from '@cds/core/input';
import '@cds/core/input/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsInput = createComponent(React, 'cds-input', Input);
export const CdsInputGroup = createComponent(React, 'cds-input-group', InputGroup);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsInput.displayName = 'CdsInput';
CdsInputGroup.displayName = 'CdsInputGroup';

logReactVersion(React);
