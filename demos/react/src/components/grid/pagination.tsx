import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { getVMData, paginate } from '@cds/core/demo';
import { useState } from 'react';



function Pagination() {
  const data = getVMData();

  const pageSizes = [5, 10, 15, 100];

  const [pageSize, pageSizeChange] = useState<number>(5);

  const [currentPage, currentPageChange] = useState<number>(0);

  const onPageSizeChange = (event: any) => {
    currentPageChange(() => 0);
    pageSizeChange(() => event.target.value)
  }

  let dataInPages = paginate(data, pageSize);

  const onFirstPageClick = () => {
    currentPageChange(() => 0);
  }

  const onPrevPageClick = () => {
    currentPageChange(() => currentPage - 1);
  }

  const onNextPageClick = () => {
    currentPageChange(() => currentPage + 1);
  }

  const onLastPageClick = () => {
    currentPageChange(() => dataInPages.length - 1);
  }

  const onCurrentPageChange = (event: any) => {
    if(event.target.value > dataInPages.length) return;
    if(event.target.value < 1) return;
    currentPageChange(() => event.target.value - 1);
  }
  return (
    <div className="demo-content">
      <h2>Pagination</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {dataInPages[currentPage].map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridFooter>
          <CdsPagination aria-label="pagination">
              <CdsSelect>
                <select aria-label="per page" defaultValue={pageSize} onChange={onPageSizeChange}>

                {pageSizes.map((n: number) => (
                  <option key={'page-size-option-'+n}>{n}</option>
                ))}
                  
                </select>
              </CdsSelect>
              <CdsPaginationButton action="first" aria-label="go to first" {...{'disabled': currentPage === 0}} onClick={onFirstPageClick}></CdsPaginationButton>
              <CdsPaginationButton action="prev" aria-label="go to previous" {...{'disabled': currentPage === 0}} onClick={onPrevPageClick}></CdsPaginationButton>
              <CdsInput cds-pagination-number>
                <input type="number" value={currentPage + 1} onChange={onCurrentPageChange} size={1} aria-label="current page" min="1" max="5" />
                <CdsControlMessage>/ {dataInPages.length}</CdsControlMessage>
              </CdsInput>
              <CdsPaginationButton action="next" aria-label="go to next" {...{'disabled': currentPage === dataInPages.length - 1}} onClick={onNextPageClick}></CdsPaginationButton>
              <CdsPaginationButton action="last" aria-label="go to last" {...{'disabled': currentPage === dataInPages.length - 1}} onClick={onLastPageClick}></CdsPaginationButton>
            </CdsPagination>
          </CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default Pagination;
