import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsDropdown } from '@cds/react/grid';
import { CdsAction } from '@cds/react/action';

import { getVMData, TestVM } from '@cds/core/demo';
import { CdsButton } from '@cds/react/button';
import { useState } from 'react';


function RowSingleAction() {
  const data = getVMData();

  const [rowActionDrowdownHidden, toggleRowActionDrowdownHidden] = useState<boolean>(true);

  const [rowActionAnchor, rowActionAnchorChange] = useState<any>(null);
  
  const [rowActionItem, rowActionItemChange] = useState<TestVM>();

  const rowActionOnClick = (event: any, item: TestVM) => {
    toggleRowActionDrowdownHidden(() => !rowActionDrowdownHidden);
    rowActionAnchorChange(() => event.target);
    rowActionItemChange(() => item);
  }
  
  return (
    <div className="demo-content">
      <h2>Row Single Action</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn type="action" aria-label="action column"></CdsGridColumn>
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell {...{'type':'action'}}>
                <CdsAction aria-label="choose available host actions" onClick={event => rowActionOnClick(event, item)}></CdsAction>
              </CdsGridCell>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>

        <CdsDropdown {...{'hidden':rowActionDrowdownHidden, anchor: rowActionAnchor}} >
            <CdsButton block action="flat" size="sm">Shutdown {rowActionItem?.id}</CdsButton>
            <CdsButton block action="flat" size="sm">Restart {rowActionItem?.id}</CdsButton>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default RowSingleAction