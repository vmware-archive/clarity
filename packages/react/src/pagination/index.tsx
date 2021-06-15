import { CdsPagination as Pagination, CdsPaginationButton as PaginationButton } from '@cds/core/pagination';
import '@cds/core/pagination/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsPagination = createComponent('cds-pagination', Pagination);
export const CdsPaginationButton = createComponent('cds-pagination-button', PaginationButton);
