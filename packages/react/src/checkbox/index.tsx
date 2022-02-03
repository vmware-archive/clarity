import { CdsCheckbox as Checkbox, CdsCheckboxGroup as CheckboxGroup } from '@cds/core/checkbox';
import '@cds/core/checkbox/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsCheckbox = createComponent(React, 'cds-checkbox', Checkbox, {}, 'CdsCheckbox');
export const CdsCheckboxGroup = createComponent(React, 'cds-checkbox-group', CheckboxGroup, {}, 'CdsCheckboxGroup');

logReactVersion(React);
