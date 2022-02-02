import { CdsFile as File } from '@cds/core/file';
import '@cds/core/file/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsFile = createComponent(React, 'cds-file', File, {}, 'CdsFile');

logReactVersion(React);
