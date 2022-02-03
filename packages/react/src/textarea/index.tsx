import { CdsTextarea as Textarea } from '@cds/core/textarea';
import '@cds/core/textarea/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsTextarea = createComponent(React, 'cds-textarea', Textarea, {}, 'CdsTextarea');

logReactVersion(React);
