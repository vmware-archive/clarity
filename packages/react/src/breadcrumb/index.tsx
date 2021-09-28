import { CdsBreadcrumb as Breadcrumb } from '@cds/core/breadcrumb';
import '@cds/core/breadcrumb/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsBreadcrumb = createComponent(React, 'cds-breadcrumb', Breadcrumb);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsBreadcrumb.displayName = 'CdsBreadcrumb';

logReactVersion(React);
