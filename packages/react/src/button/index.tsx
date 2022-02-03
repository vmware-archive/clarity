import { CdsButton as Button, CdsIconButton as IconButton, CdsInlineButton as InlineButton } from '@cds/core/button';
import '@cds/core/button/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButton = createComponent(React, 'cds-button', Button, {}, 'CdsButton');
export const CdsIconButton = createComponent(React, 'cds-icon-button', IconButton, {}, 'CdsIconButton');
export const CdsInlineButton = createComponent(React, 'cds-inline-button', InlineButton, {}, 'CdsInlineButton');

logReactVersion(React);
