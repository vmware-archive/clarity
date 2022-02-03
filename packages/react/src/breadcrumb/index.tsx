import { CdsBreadcrumb as Breadcrumb } from '@cds/core/breadcrumb';
import '@cds/core/breadcrumb/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsBreadcrumb = createComponent(React, 'cds-breadcrumb', Breadcrumb, {}, 'CdsBreadcrumb');

logReactVersion(React);
