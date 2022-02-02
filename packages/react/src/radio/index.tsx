import { CdsRadio as Radio, CdsRadioGroup as RadioGroup } from '@cds/core/radio';
import '@cds/core/radio/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsRadio = createComponent(React, 'cds-radio', Radio, {}, 'CdsRadio');
export const CdsRadioGroup = createComponent(React, 'cds-radio-group', RadioGroup, {}, 'CdsRadioGroup');

logReactVersion(React);
