import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsGridPlaceholder } from '@cds/react/grid';
import { CdsDropdown } from '@cds/react/dropdown';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { TestVM } from '@cds/core/demo';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GridStateInterface, MockAPI } from '../utils/mock-api';
import { CdsProgressCircle } from '@cds/react/progress-circle';
import { CdsButtonAction } from '@cds/react/button-action';
import { CdsButtonSort } from '@cds/react/button-sort';
import { ButtonSort } from '@cds/core/button-sort';
import { CdsSearch } from '@cds/react/search';

import { useDebounce } from 'use-debounce';
import { useCallback } from 'react';


function AsyncDataFull() {

  const [data, setData] = useState<TestVM[]>([]);

  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  /* Filtering */

  const filterAnchorRef = useRef(null);
  const [filterDrowdownHidden, setFilterDropdownHidden] = useState<boolean>(true);
  const [filterValue, setFilterValue] = useState<string>("");
  const [debouncedFilterValue] = useDebounce(filterValue, 500);
  
  const onFilterActionClick = () => {
    setFilterDropdownHidden((hidden) => !hidden);
  }

  const onFilterValueChange = (event: any) => {
    setFilterValue(event.target.value);
  }

  /* Pagination */
  
  const pageSizes = [5, 10, 15, 100];
  const [pageSize, setPageSize] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onPageSizeChange = (event: any) => {
    setCurrentPage(0);
    setPageSize(event.target.value);
  }

  const onFirstPageClick = () => {
    setCurrentPage(0);
  }

  const onPrevPageClick = () => {
    setCurrentPage((page) => page - 1);
  }

  const onNextPageClick = () => {
    setCurrentPage((page) => page + 1);
  }

  const onLastPageClick = () => {
    setCurrentPage(totalPages - 1);
  }

  const onCurrentPageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if(value > totalPages) return;
    if(value < 1) return;
    setCurrentPage(value - 1);
  }, [totalPages])

  /* Sorting */

  const [sortType, sortTypeChange] = useState<ButtonSort>("none");

  const onSortActionClick = useCallback(() => {
    if(sortType==="none") {
      sortTypeChange(() => "ascending");
    } else if(sortType === "ascending") {
      sortTypeChange(() => 'descending');
    } else if(sortType === 'descending') {
      sortTypeChange(() => 'none');
    }
  }, [sortType]);

  const mockAPI = useMemo(() => new MockAPI(), []);

  const makeApiRequest = useCallback((state: GridStateInterface) => {
    setDataLoaded(false);
    mockAPI.requestData(state).then((response: any) => {
      setData(response.pageVMs);
      setTotalPages(response.totalPages);
      if(response.totalPages <= currentPage) {
        setCurrentPage(response.totalPages - 1);
      }
      setDataLoaded(true);
    })
  }, [mockAPI, currentPage]);

  useEffect(() => {
    console.log("filter value change")
    makeApiRequest({page: {current: currentPage, size: pageSize}, sort: {by: 'status', sortType}, filters: [{key: 'id', filterValue: debouncedFilterValue}]});

    return () => {
      mockAPI.disconnect();
    }
  }, [pageSize, currentPage, sortType, debouncedFilterValue, makeApiRequest, mockAPI]);

  

  return (
    <div className="demo-content">
      <h2>Async Data - Full Demo</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn>
            Host
            <CdsButtonAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsButtonAction>
          </CdsGridColumn>
          <CdsGridColumn>Status
            <CdsButtonSort sort={sortType} aria-label="sort by status" onClick={onSortActionClick}></CdsButtonSort>
          </CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {dataLoaded? data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          )): (<CdsGridPlaceholder>
            <CdsProgressCircle size="xl" status="info"></CdsProgressCircle>
            <p cds-text="subsection">Loading VMs</p>
          </CdsGridPlaceholder>)}

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
                <CdsControlMessage>/ {totalPages}</CdsControlMessage>
              </CdsInput>
              <CdsPaginationButton action="next" aria-label="go to next" {...{'disabled': currentPage === totalPages - 1}} onClick={onNextPageClick}></CdsPaginationButton>
              <CdsPaginationButton action="last" aria-label="go to last" {...{'disabled': currentPage === totalPages - 1}} onClick={onLastPageClick}></CdsPaginationButton>
            </CdsPagination>
          </CdsGridFooter>
        </CdsGrid>
        <CdsDropdown className="demo-filter-dropdown" anchor= 'id-filter-demo' hidden={filterDrowdownHidden ? true : undefined} >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default AsyncDataFull;
