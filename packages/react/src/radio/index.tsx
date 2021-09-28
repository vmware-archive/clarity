import { CdsRadio as Radio, CdsRadioGroup as RadioGroup } from '@cds/core/radio';
import '@cds/core/radio/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsRadio = createComponent(React, 'cds-radio', Radio);
export const CdsRadioGroup = createComponent(React, 'cds-radio-group', RadioGroup);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsRadio.displayName = 'CdsRadio';
CdsRadioGroup.displayName = 'CdsRadioGroup';

logReactVersion(React);
