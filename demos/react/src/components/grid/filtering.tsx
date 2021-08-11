import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsDropdown } from '@cds/react/dropdown';
import { filter, getVMData } from '@cds/core/demo';
import { CdsButtonAction } from '@cds/react/button-action';
import { CdsSearch } from '@cds/react/search';
import { useRef, useState } from 'react';

function Filtering() {

  const filterAnchorRef = useRef<string | HTMLElement | undefined>();

  const [filterDrowdownHidden, setFilterDropdownHidden] = useState<boolean>(true);

  const [filterValue, setFilterValue] = useState<string>("");

  const data = getVMData();

  const onFilterActionClick = () => {
    setFilterDropdownHidden((hidden) => !hidden);
  }

  const onFilterValueChange = (event: any) => {
    setFilterValue(event.target.value);
  }

  return (
    <div className="demo-content">
      <h2>Filtering</h2>
      <p>Host filter value: {filterValue}</p>
      <div className="content">
        <CdsGrid className="demo-grid">
        <CdsGridColumn>
    Host <CdsButtonAction ref={filterAnchorRef} shape="filter" id="id-filter-demo" aria-label="search available hosts" onClick={onFilterActionClick}></CdsButtonAction>
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
        <CdsDropdown className="demo-filter-dropdown" anchor={filterAnchorRef.current} hidden={filterDrowdownHidden ? true : undefined} >
          <CdsSearch control-width="shrink">
            <input type="search" aria-label="search hosts" onChange={onFilterValueChange} />
          </CdsSearch>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default Filtering;
