import * as React from 'react';
import { CdsTag as Tag } from '@cds/core/tag';
import '@cds/core/tag/register';
import { createComponent } from '@lit-labs/react';
import { logReactVersion } from '../utils/index.js';

export const CdsTag = createComponent(React, 'cds-tag', Tag, {}, 'CdsTag');

logReactVersion(React);
