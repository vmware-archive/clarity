import { useState } from 'react';

import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsRadio } from '@cds/react/radio';
import { getVMData, TestVM } from '@cds/core/demo';

function RowSingleSelect() {
  const [selectedItem, selected] = useState<TestVM>();

  const data = getVMData();

  return (
    <div className="demo-content">
      <h2>Row Single Select</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn type="action" aria-label="select column"></CdsGridColumn>
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {data.map((item: TestVM) => (
            <CdsGridRow key={item.id} {...{'select':true}}>
              <CdsGridCell>
                <CdsRadio>
                  <input
                    type="radio"
                    name="hosts"
                    aria-label="select host vm-host-001"
                    onChange={() => selected(item)}
                  />
                </CdsRadio>
              </CdsGridCell>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridFooter>{selectedItem ? `Selected item's id: ` + selectedItem.id : ''}</CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default RowSingleSelect;
