import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';

import { getVMData } from '@cds/core/demo';

function PinColumns() {
  const data = getVMData();

  return (
    <div className="demo-content">
      <h2>Pin Columns</h2>
      <div className="content">
        <CdsGrid className="demo-grid demo-grid-pin-column">
          <CdsGridColumn position="fixed">Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn position="fixed">Memory</CdsGridColumn>

          {data.map((item: any) => (
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

export default PinColumns;
