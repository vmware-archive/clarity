import { CdsSearch as SearchInput } from '@cds/core/search';
import '@cds/core/search/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsSearch = createComponent(React, 'cds-search', SearchInput);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsSearch.displayName = 'CdsSearch';

logReactVersion(React);
