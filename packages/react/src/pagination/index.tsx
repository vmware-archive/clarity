import { CdsPagination as Pagination, CdsPaginationButton as PaginationButton } from '@cds/core/pagination';
import '@cds/core/pagination/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsPagination = createComponent(React, 'cds-pagination', Pagination);
export const CdsPaginationButton = createComponent(React, 'cds-pagination-button', PaginationButton);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsPagination.displayName = 'CdsPagination';
CdsPaginationButton.displayName = 'CdsPaginationButton';

logReactVersion(React);
