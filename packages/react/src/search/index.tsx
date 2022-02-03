import { CdsSearch as SearchInput } from '@cds/core/search';
import '@cds/core/search/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsSearch = createComponent(React, 'cds-search', SearchInput, {}, 'CdsSearch');

logReactVersion(React);
