import { CdsTextarea as Textarea } from '@cds/core/textarea';
import '@cds/core/textarea/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsTextarea = createComponent(React, 'cds-textarea', Textarea);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsTextarea.displayName = 'CdsTextarea';

logReactVersion(React);
