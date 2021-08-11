import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsDropdown } from '@cds/react/dropdown';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { filter, getVMData, paginate, sortStrings, TestVM } from '@cds/core/demo';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CdsCheckbox } from '@cds/react/checkbox';
import { CdsButtonAction } from '@cds/react/button-action';
import { CdsButtonSort } from '@cds/react/button-sort';
import { ButtonSort } from '@cds/core/button-sort';
import { CdsSearch } from '@cds/react/search';


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

function FullDemo () {
  const data = getVMData();

  /* Filtering */

  const filterAnchorRef = useRef<typeof CdsButtonAction & HTMLElement>();

  const [filterDrowdownHidden, setFilterDropdownHidden] = useState<boolean>(true);

  const [filterValue, setFilterValue] = useState<string>("");

  const onFilterActionClick = () => {
    setFilterDropdownHidden((hidden) => !hidden);
  }

  const onFilterValueChange = (event: any) => {
    setFilterValue(event.target.value);
  }

  
  /* Sorting */

  const [sortType, setSortType] = useState<ButtonSort>("none");

  const onSortStatusActionClick = () => {
    setSortType((sort) => {
      if(sort==="none") {
        return "ascending";
      } 
      if(sort === "ascending") {
        return 'descending';
      } 
      return 'none';
    });
  }

  /* Pagination */

  const filteredData = useMemo(() => {
    const filtered = filter(data, 'id', filterValue);
    return sortStrings(filtered, 'status', sortType);

  }, [data, filterValue, sortType]);

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
  } = usePaginatedData(filteredData, paginate); 

  /* Multi Select */

  const [selectedItems, setSelectedItems] = useState<TestVM[]>([]);

  const selectedIds = () => {
    return selectedItems.map(item => item.id);
  }

  const handleSelectAllChange = (checked: boolean) => {
    if(checked) {
      setSelectedItems([...data]);
    } else {
      setSelectedItems([]);
    }
  }

  const handleSelectedChange = (checked: boolean, item: TestVM) => {
    if (checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const pos = selectedItems.findIndex(i => i.id === item.id);

      if (pos > -1) {
        selectedItems.splice(pos, 1);
        setSelectedItems([...selectedItems]);
      }
    }
  };

  const checkAllInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // checkbox is indeteterminate if some items are selected but not all
    if(checkAllInputRef.current) {
      checkAllInputRef.current.indeterminate = selectedItems.length > 0 && selectedItems.length < data.length
    }
  });

  return (
    <div className="demo-content">
      <h2>Full Demo</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn type="action">
            <CdsCheckbox>
              <input type="checkbox" aria-label="select all hosts" ref={checkAllInputRef} onChange={event => handleSelectAllChange(event.target.checked)}  />
            </CdsCheckbox>
          </CdsGridColumn>
          <CdsGridColumn>Host
            <CdsButtonAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsButtonAction>
          </CdsGridColumn>
          <CdsGridColumn>Status
            <CdsButtonSort sort={sortType} aria-label="sort by status" onClick={onSortStatusActionClick}></CdsButtonSort> 
          </CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>
          
          {currentPageData.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>
                <CdsCheckbox>
                  <input
                    type="checkbox"
                    aria-label="select host"
                    {...{checked: selectedIds().includes(item.id)}}
                    onChange={event => handleSelectedChange(event.target.checked, item)}
                  />
                </CdsCheckbox>
              </CdsGridCell>
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
        <CdsDropdown className="demo-filter-dropdown" hidden={filterDrowdownHidden? true : undefined} anchor="id-filter-demo" >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default FullDemo;
