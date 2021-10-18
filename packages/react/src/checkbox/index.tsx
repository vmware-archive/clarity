import { CdsCheckbox as Checkbox, CdsCheckboxGroup as CheckboxGroup } from '@cds/core/checkbox';
import '@cds/core/checkbox/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsCheckbox = createComponent(React, 'cds-checkbox', Checkbox);
export const CdsCheckboxGroup = createComponent(React, 'cds-checkbox-group', CheckboxGroup);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsCheckbox.displayName = 'CdsCheckbox';
CdsCheckboxGroup.displayName = 'CdsCheckboxGroup';

logReactVersion(React);
