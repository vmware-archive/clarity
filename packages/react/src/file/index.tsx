import { CdsFile as File } from '@cds/core/file';
import '@cds/core/file/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsFile = createComponent(React, 'cds-file', File);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsFile.displayName = 'CdsFile';

logReactVersion(React);
