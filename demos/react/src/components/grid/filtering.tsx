import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsDropdown } from '@cds/react/grid';

import { filter, getVMData } from '@cds/core/demo';
import { CdsAction } from '@cds/react/action';
import { CdsSearch } from '@cds/react/search';
import { useRef, useState } from 'react';

function Filtering() {

  const filterAnchorRef = useRef(null);

  const [filterDrowdownHidden, toggleFilterDrowdown] = useState<boolean>(true);

  const [filterValue, filterValueChange] = useState<string>("");

  const data = getVMData();

  const onFilterActionClick = () => {
    toggleFilterDrowdown(() => !filterDrowdownHidden);
  }

  const onFilterValueChange = (event: any) => {
    filterValueChange(() => event.target.value);
  }

  return (
    <div className="demo-content">
      <h2>Filtering</h2>
      <p>Host filter value: {filterValue}</p>
      <div className="content">
        <CdsGrid className="demo-grid">
        <CdsGridColumn>
    Host <CdsAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsAction>
  </CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {filter(data, 'id', filterValue).map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}
          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
        <CdsDropdown className="demo-filter-dropdown" {...{'hidden':filterDrowdownHidden, 'anchor': (filterAnchorRef.current as any)}} >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default Filtering;
