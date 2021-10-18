import { CdsButton as Button, CdsIconButton as IconButton, CdsInlineButton as InlineButton } from '@cds/core/button';
import '@cds/core/button/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsButton = createComponent(React, 'cds-button', Button);
export const CdsIconButton = createComponent(React, 'cds-icon-button', IconButton);
export const CdsInlineButton = createComponent(React, 'cds-inline-button', InlineButton);
/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsButton.displayName = 'CdsButton';
CdsIconButton.displayName = 'CdsIconButton';
CdsInlineButton.displayName = 'CdsInlineButton';

logReactVersion(React);
