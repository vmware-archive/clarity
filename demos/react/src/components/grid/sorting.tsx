import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsActionSort } from '@cds/react/action';
import { getVMData, sortStrings } from '@cds/core/demo';
import { useState } from 'react';

import { ActionSort } from '@cds/core/actions';

function Sorting() {
  const data = getVMData();

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

  return (
    <div className="demo-content">
      <h2>Sorting</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn>Host <CdsActionSort sort={sortType} aria-label="sort hosts" onClick={onSortActionClick}></CdsActionSort> </CdsGridColumn>
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
