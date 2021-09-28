import * as React from 'react';
import { CdsTag as Tag } from '@cds/core/tag';
import '@cds/core/tag/register';
import { createComponent } from '@lit-labs/react';
import { logReactVersion } from '../utils';

export const CdsTag = createComponent(React, 'cds-tag', Tag);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsTag.displayName = 'CdsTag';

logReactVersion(React);
