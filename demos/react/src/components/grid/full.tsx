import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsDropdown } from '@cds/react/grid';
import { CdsPagination, CdsPaginationButton } from '@cds/react/pagination';
import { CdsSelect } from '@cds/react/select'
import { CdsInput } from '@cds/react/input/';
import { CdsControlMessage } from '@cds/react/forms';

import { filter, getVMData, paginate, sortStrings, TestVM } from '@cds/core/demo';
import { useEffect, useRef, useState } from 'react';
import { CdsCheckbox } from '@cds/react/checkbox';
import { CdsAction, CdsActionSort } from '@cds/react/action';
import { ActionSort } from '@cds/core/actions';
import { CdsSearch } from '@cds/react/search';

function FullDemo () {
  const data = getVMData();

  /* Filtering */

  const filterAnchorRef = useRef(null);

  const [filterDrowdownHidden, toggleFilterDrowdown] = useState<boolean>(true);

  const [filterValue, filterValueChange] = useState<string>("");

  const onFilterActionClick = () => {
    toggleFilterDrowdown(() => !filterDrowdownHidden);
  }

  const onFilterValueChange = (event: any) => {
    filterValueChange(() => event.target.value);
  }

  
  /* Sorting */

  const [sortType, sortTypeChange] = useState<ActionSort>("none");

  const onSortStatusActionClick = () => {
    if(sortType==="none") {
      sortTypeChange(() => "ascending");
    } else if(sortType === "ascending") {
      sortTypeChange(() => 'descending');
    } else if(sortType === 'descending') {
      sortTypeChange(() => 'none');
    }
  }

  /* Pagination */

  const pageSizes = [5, 10, 15, 100];

  const [pageSize, pageSizeChange] = useState<number>(10);

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
    currentPageChange(() => dataInPages.length - 1);
  }

  const onCurrentPageChange = (event: any) => {
    if(event.target.value > dataInPages.length) return;
    if(event.target.value < 1) return;
    currentPageChange(() => event.target.value - 1);
  }

  /* Data Set */

  let dataInPages: TestVM[][];

  const getQualifiedData = () => {
    const filtered = filter(data, 'id', filterValue);
    const sorted = sortStrings(filtered, 'status', sortType);
    return paginate(sorted, pageSize);
  }
  
  dataInPages = getQualifiedData();

  const getCurrentPageData = () => {
    if(dataInPages[currentPage]) {
      return dataInPages[currentPage];
    } else {
      return [];
    }
  }

  /* Multi Select */

  const checkAllInput = useRef(null);

  const [selectedItems, selected] = useState<TestVM[]>([]);

  const selectedIds = () => {
    return selectedItems.map(item => item.id);
  }

  const handleSelectAllChange = (checked: boolean) => {
    if(checked) {
      selected(() => [...data]);
    } else {
      selected(() => []);
    }
  }

  const handleSelectedChange = (checked: boolean, item: TestVM) => {
    if (checked) {
      selected(() => [...selectedItems, item]);
    } else {
      const pos = selectedItems.findIndex(i => i.id === item.id);

      if (pos > -1) {
        selectedItems.splice(pos, 1);
        selected(() => [...selectedItems]);
      }
    }
  };

  useEffect(() => {
    if(selectedItems.length > 0 && selectedItems.length < data.length) {
      (checkAllInput.current as any).indeterminate = true;
    } else {
      (checkAllInput.current as any).indeterminate = false;
    }
  });

  return (
    <div className="demo-content">
      <h2>Full Demo</h2>
      <div className="content">
        <CdsGrid className="demo-grid grid-content-height">
          <CdsGridColumn type="action">
            <CdsCheckbox>
              <input type="checkbox" aria-label="select all hosts" ref={checkAllInput} onChange={event => handleSelectAllChange(event.target.checked)}  />
            </CdsCheckbox>
          </CdsGridColumn>
          <CdsGridColumn>Host
            <CdsAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsAction>
          </CdsGridColumn>
          <CdsGridColumn>Status
            <CdsActionSort sort={sortType} aria-label="sort by status" onClick={onSortStatusActionClick}></CdsActionSort> 
          </CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>
          
          {getCurrentPageData().map((item: any) => (
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
        <CdsDropdown className="demo-filter-dropdown" {...{'hidden':filterDrowdownHidden, 'anchor': 'id-filter-demo'}} >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default FullDemo;
