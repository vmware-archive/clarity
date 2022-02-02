import { CdsButton as Button, CdsIconButton as IconButton } from '@cds/core/button';
import '@cds/core/button/register';
import { CdsButtonInline as InlineButton } from '@cds/core/button-inline';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsButton = createComponent(React, 'cds-button', Button, {}, 'CdsButton');
export const CdsIconButton = createComponent(React, 'cds-icon-button', IconButton, {}, 'CdsIconButton');

/**
 * @deprecated
 * renamed to `cds-button-inline` in 6.0 to align to rest of the `cds-button-*` APIs
 */
export const CdsInlineButton = createComponent(React, 'cds-inline-button', InlineButton, {}, 'CdsInlineButton');

logReactVersion(React);
