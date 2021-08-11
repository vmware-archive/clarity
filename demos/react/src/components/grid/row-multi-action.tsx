import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';

import { CdsDropdown } from '@cds/react/dropdown';
import { CdsCheckbox } from '@cds/react/checkbox';
import { CdsButtonAction } from '@cds/react/button-action';

import { getVMData } from '@cds/core/demo';
import { CdsButton } from '@cds/react/button';
import { useRef, useState } from 'react';


function RowMultiAction() {
  const data = getVMData();

  const [multiRowActionDrowdownHidden, setMultiRowActionDrowdownHidden] = useState<boolean>(true);
  
  const toggleMultiRowActionOnClick = () => {
    setMultiRowActionDrowdownHidden((hidden) => !hidden); 
  }

  const multiRowActionAnchor = useRef<HTMLElement | string | undefined>();

  return (
    <div className="demo-content">
      <h2>Row Multi Action</h2>
      <div className="content">
      <CdsGrid className="demo-grid">
          <CdsGridColumn type="action">
            <CdsCheckbox>
              <input type="checkbox" aria-label="select all hosts" />
            </CdsCheckbox>
          </CdsGridColumn>
          <CdsGridColumn>
            Host
            <CdsButtonAction id="batch-action" ref={multiRowActionAnchor} aria-label="host options" onClick={toggleMultiRowActionOnClick}></CdsButtonAction>
          </CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {data.map((item: any) => (
            <CdsGridRow key={item.id} {...{'select':true}}>
              <CdsGridCell>
                <CdsCheckbox>
                  <input type="checkbox" aria-label="select host" />
                </CdsCheckbox>
              </CdsGridCell>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
        <CdsDropdown hidden={multiRowActionDrowdownHidden ? true : undefined} anchor={multiRowActionAnchor.current}>
          <CdsButton action="flat" block size="sm">Restart Selected</CdsButton>
          <CdsButton action="flat" block size="sm">Shutdown Selected</CdsButton>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default RowMultiAction;
