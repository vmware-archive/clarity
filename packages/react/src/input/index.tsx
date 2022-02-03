import { CdsInput as Input, CdsInputGroup as InputGroup } from '@cds/core/input';
import '@cds/core/input/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsInput = createComponent(React, 'cds-input', Input, {}, 'CdsInput');
export const CdsInputGroup = createComponent(React, 'cds-input-group', InputGroup, {}, 'CdsInputGroup');

logReactVersion(React);
