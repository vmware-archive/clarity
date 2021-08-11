import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { getVMData, paginate } from '@cds/core/demo';
import { useMemo, useState } from 'react';


/**
 * This is an example custom hook for paginating data
 * 
 * @param data the data to paginate
 * @returns object with current pagination state and callbacks for changing page/pagesize
 */
 function usePaginatedData<T>(data: T[], paginateData: (arr: T[], size: number) => T[][]) {
  const pageSizes = [5, 10, 15, 100];

  const [pageSize, setPageSize] = useState<number>(10);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const paginatedData = useMemo(() => paginateData(data, pageSize), [paginateData, data, pageSize]);

  const onPageSizeChange = (pageSize: number) => {
    setCurrentPage(0);
    setPageSize(pageSize);
  }

  const onFirstPageClick = () => {
    setCurrentPage(0);
  }

  const onPrevPageClick = () => {
    setCurrentPage((currPage) => currPage - 1);
  }

  const onNextPageClick = () => {
    setCurrentPage((currPage) => currPage + 1);
  }

  const onLastPageClick = () => {
    setCurrentPage(paginatedData.length - 1);
  }

  const onCurrentPageChange = (page: number) => {
    if(page > paginatedData.length) return;
    if(page < 1) return;
    setCurrentPage(page - 1);
  }

  const currentPageData = useMemo(() => paginatedData[currentPage] || [], [paginatedData, currentPage])

  return {
    pageSizes,
    pageSize,
    currentPage,
    pageCount: paginatedData.length,
    currentPageData,
    onPageSizeChange,
    onFirstPageClick, 
    onPrevPageClick,
    onNextPageClick,
    onLastPageClick,
    onCurrentPageChange
  };
}



function Pagination() {
  const data = getVMData();


  const {
    pageSize, 
    pageSizes, 
    currentPage, 
    currentPageData,
    pageCount,
    onPageSizeChange,
    onFirstPageClick, 
    onPrevPageClick,
    onNextPageClick,
    onLastPageClick,
    onCurrentPageChange
  } = usePaginatedData(data, paginate); 

  return (
    <div className="demo-content">
      <h2>Pagination</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {currentPageData.map((item: any) => (
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
                <select aria-label="per page" defaultValue={pageSize} onChange={(e) => onPageSizeChange(parseInt(e.target.value))}>

                {pageSizes.map((n: number) => (
                  <option key={'page-size-option-'+n}>{n}</option>
                ))}
                  
                </select>
              </CdsSelect>
              <CdsPaginationButton action="first" aria-label="go to first" disabled={currentPage === 0 ? true : undefined} onClick={onFirstPageClick}></CdsPaginationButton>
              <CdsPaginationButton action="prev" aria-label="go to previous" disabled={currentPage === 0 ? true : undefined} onClick={onPrevPageClick}></CdsPaginationButton>
              <CdsInput cds-pagination-number>
                <input type="number" value={currentPage + 1} onChange={(e) => onCurrentPageChange(parseInt(e.target.value))} size={1} aria-label="current page" min="1" max="5" />
                <CdsControlMessage>/ {pageCount}</CdsControlMessage>
              </CdsInput>
              <CdsPaginationButton action="next" aria-label="go to next" disabled={currentPage === pageCount-1 ? true : undefined} onClick={onNextPageClick}></CdsPaginationButton>
              <CdsPaginationButton action="last" aria-label="go to last" disabled={currentPage === pageCount-1 ? true : undefined} onClick={onLastPageClick}></CdsPaginationButton>
            </CdsPagination>
          </CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default Pagination;
