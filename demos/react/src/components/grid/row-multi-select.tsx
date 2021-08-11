import { useRef, useState, useEffect } from 'react';

import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';
import { CdsCheckbox } from '@cds/react/checkbox';

import { getVMData, TestVM } from '@cds/core/demo';

function RowMultiSelect() {

  const checkAllInput = useRef(null);

  const [selectedItems, selected] = useState<TestVM[]>([]);

  const data = getVMData();

  const selectedIds = () => {
    return selectedItems.map(item => item.id);
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

  const handleSelectAllChange = (checked: boolean) => {
    if(checked) {
      selected(() => [...data]);
    } else {
      selected(() => []);
    }
  }

  const displaySelectedItems = () => {
    return selectedItems.map((item: TestVM, index) => (
      <span key={item.id}>{item.id}{index===selectedItems.length - 1? "":", "}</span>
    ));
  }

  return (
    <div className="demo-content">
      <h2>Row Multi Select</h2>
      <div className="content">
        <p>
          Selected items: [{displaySelectedItems()}]
        </p>
        <CdsGrid className="demo-grid" aria-multiselectable="true">
          <CdsGridColumn type="action">
            <CdsCheckbox>
              <input type="checkbox" aria-label="select all hosts" ref={checkAllInput} onChange={event => handleSelectAllChange(event.target.checked)} />
            </CdsCheckbox>
          </CdsGridColumn>
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>
                <CdsCheckbox>
                  <input
                    type="checkbox"
                    aria-label="select host vm-host-001"
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

          <CdsGridFooter>{selectedItems.length}</CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default RowMultiSelect;
