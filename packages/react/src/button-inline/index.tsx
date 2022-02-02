import { CdsButtonInline as ButtonInline } from '@cds/core/button-inline';
import '@cds/core/button-inline/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButtonInline = createComponent(React, 'cds-button-inline', ButtonInline, {}, 'CdsButtonInline');

logReactVersion(React);
