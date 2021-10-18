import { CdsTime as TimeInput } from '@cds/core/time';
import '@cds/core/time/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsTime = createComponent(React, 'cds-time', TimeInput);

logReactVersion(React);
