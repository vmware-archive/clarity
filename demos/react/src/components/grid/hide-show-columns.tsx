import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsDropdown } from '@cds/react/grid';
import { CdsAction } from '@cds/react/action';
import { getVMData } from '@cds/core/demo';
import { CdsCheckbox, CdsCheckboxGroup } from '@cds/react/checkbox';
import { CdsButton } from '@cds/react/button';
import { useRef, useState } from 'react';


function HideShowColumns() {
  const data = getVMData();

  const hideShowAnchorRef = useRef(null);

  const [hideShowDrowdownHidden, toggleHideShowDrowdown] = useState<boolean>(true);

  const hiddenColumnsInitState = {
    'status': false,
    'cpu': false,
    'memory': true
  }

  const [hiddenColumns, toggleHiddenStates] = useState<any>(hiddenColumnsInitState);

  const onHideShowAnchorClick = () => {
    toggleHideShowDrowdown(() => !hideShowDrowdownHidden);
  }

  const toggleColumn = (column: string, checked: boolean) => {
    toggleHiddenStates(() => ({...hiddenColumns, [column]: !checked}))
  }

  const onSelectAllClick = () => {
    for(let key in hiddenColumns) {
      hiddenColumns[key] = false;
    }
    toggleHiddenStates(() => ({...hiddenColumns}));
  }

  return (
    <div className="demo-content">
      <h2>Hide/Show Columns</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn>Host</CdsGridColumn>
          {hiddenColumns['status']?null:<CdsGridColumn>Status</CdsGridColumn>}
          {hiddenColumns['cpu']?null:<CdsGridColumn>CPU</CdsGridColumn>}
          {hiddenColumns['memory']?null:<CdsGridColumn>Memory</CdsGridColumn>}

          {data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              {hiddenColumns['status']?null:<CdsGridCell>{item.status}</CdsGridCell>}
              {hiddenColumns['cpu']?null:<CdsGridCell>{item.cpu}</CdsGridCell>}
              {hiddenColumns['memory']?null:<CdsGridCell>{item.memory}</CdsGridCell>}
            </CdsGridRow>
          ))}

          <CdsGridFooter>
            <CdsAction id="toggle-columns" shape="view-columns" aria-label="filter column" ref={hideShowAnchorRef} onClick={onHideShowAnchorClick}></CdsAction>
          </CdsGridFooter>
        </CdsGrid>
        <CdsDropdown {...{'anchor': (hideShowAnchorRef.current as any), 'position': 'top', hidden: hideShowDrowdownHidden}}>
          <CdsCheckboxGroup layout="vertical">
            <CdsCheckbox>
              <label>Status</label>
              <input type="checkbox" checked={!hiddenColumns['status']} onChange={event => toggleColumn('status', event.target.checked)}  />
            </CdsCheckbox>
            <CdsCheckbox>
              <label>CPU</label>
              <input type="checkbox" checked={!hiddenColumns['cpu']} onChange={event => toggleColumn('cpu', event.target.checked)} />
            </CdsCheckbox>
            <CdsCheckbox>
              <label>Memory</label>
              <input type="checkbox" checked={!hiddenColumns['memory']} onChange={event => toggleColumn('memory', event.target.checked)} />
            </CdsCheckbox>
          </CdsCheckboxGroup>
          <CdsButton action="flat" onClick={onSelectAllClick}>Select All</CdsButton>
        </CdsDropdown>
      </div>
    </div>
  );
}

export default HideShowColumns;
