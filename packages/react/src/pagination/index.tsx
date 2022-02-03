import { CdsPagination as Pagination, CdsPaginationButton as PaginationButton } from '@cds/core/pagination';
import '@cds/core/pagination/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsPagination = createComponent(React, 'cds-pagination', Pagination, {}, 'CdsPagination');
export const CdsPaginationButton = createComponent(
  React,
  'cds-pagination-button',
  PaginationButton,
  {},
  'CdsPaginationButton'
);

logReactVersion(React);
