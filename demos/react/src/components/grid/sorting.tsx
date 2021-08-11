import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';

import { CdsButtonSort } from '@cds/react/button-sort';
import { getVMData, sortStrings } from '@cds/core/demo';
import { useState } from 'react';

import { ButtonSort } from '@cds/core/button-sort';

function Sorting() {
  const data = getVMData();

  const [sortType, setSortType] = useState<ButtonSort>("none");

  const onSortActionClick = () => {
    if(sortType==="none") {
      setSortType("ascending");
    } else if(sortType === "ascending") {
      setSortType('descending');
    } else if(sortType === 'descending') {
      setSortType('none');
    }
  }

  return (
    <div className="demo-content">
      <h2>Sorting</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn>Host <CdsButtonSort sort={sortType} aria-label="sort hosts" onClick={onSortActionClick}></CdsButtonSort> </CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {sortStrings(data, 'id', sortType).map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default Sorting;
