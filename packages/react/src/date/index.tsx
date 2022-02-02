import { CdsDate as DateInput } from '@cds/core/date';
import '@cds/core/date/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsDate = createComponent(React, 'cds-date', DateInput, {}, 'CdsDate');

logReactVersion(React);
