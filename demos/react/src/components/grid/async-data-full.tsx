import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsGridPlaceholder, CdsDropdown } from '@cds/react/grid';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { TestVM } from '@cds/core/demo';
import { useEffect, useRef, useState } from 'react';
import { GridStateInterface, MockAPI } from '../utils/mock-api';
import { CdsProgressCircle } from '@cds/react/progress-circle';
import { CdsActionSort, CdsAction } from '@cds/react/action';
import { CdsSearch } from '@cds/react/search';
import { ActionSort } from '@cds/core/actions';

import { useDebounce } from 'use-debounce';


function AsyncDataFull() {

  const [data, setData] = useState<TestVM[]>([]);

  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  /* Filtering */

  const filterAnchorRef = useRef(null);

  const [filterDrowdownHidden, toggleFilterDrowdown] = useState<boolean>(true);

  const [filterValue, filterValueChange] = useState<string>("");

  const [debouncedFilterValue] = useDebounce(filterValue, 500);

  const onFilterActionClick = () => {
    toggleFilterDrowdown(() => !filterDrowdownHidden);
  }

  const onFilterValueChange = (event: any) => {
    filterValueChange(() => event.target.value);
  }

  /* Pagination */
  
  const pageSizes = [5, 10, 15, 100];

  const [pageSize, pageSizeChange] = useState<number>(5);

  const [totalPages, totalPagesChange] = useState<number>(0);

  const [currentPage, currentPageChange] = useState<number>(0);

  const onPageSizeChange = (event: any) => {
    currentPageChange(() => 0);
    pageSizeChange(() => event.target.value)
  }

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
    currentPageChange(() => totalPages - 1);
  }

  const onCurrentPageChange = (event: any) => {
    if(event.target.value > totalPages) return;
    if(event.target.value < 1) return;
    currentPageChange(() => event.target.value - 1);
  }

  /* Sorting */

  const [sortType, sortTypeChange] = useState<ActionSort>("none");

  const onSortActionClick = () => {
    if(sortType==="none") {
      sortTypeChange(() => "ascending");
    } else if(sortType === "ascending") {
      sortTypeChange(() => 'descending');
    } else if(sortType === 'descending') {
      sortTypeChange(() => 'none');
    }
  }

  const mockAPI = new MockAPI();

  const makeApiRequest = (state: GridStateInterface) => {
    setDataLoaded(() => false);
    mockAPI.requestData(state).then((response: any) => {
      setData(() => response.pageVMs);
      totalPagesChange(() => response.totalPages);
      if(response.totalPages <= currentPage) {
        currentPageChange(() => response.totalPages - 1);
      }
      setDataLoaded(() => true);
    })
  }

  useEffect(() => {
    console.log("filter value change")
    makeApiRequest({page: {current: currentPage, size: pageSize}, sort: {by: 'status', sortType}, filters: [{key: 'id', filterValue}]});

    return () => {
      mockAPI.disconnect();
    }
  }, [pageSize, currentPage, sortType, debouncedFilterValue]);

  

  return (
    <div className="demo-content">
      <h2>Async Data - Full Demo</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn>
            Host
            <CdsAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsAction>
          </CdsGridColumn>
          <CdsGridColumn>Status
            <CdsActionSort sort={sortType} aria-label="sort by status" onClick={onSortActionClick}></CdsActionSort>
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
        <CdsDropdown className="demo-filter-dropdown" {...{'hidden':filterDrowdownHidden, 'anchor': 'id-filter-demo'}} >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default AsyncDataFull;
