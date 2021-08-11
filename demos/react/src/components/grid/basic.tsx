import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from '@cds/react/grid';

import { getVMData } from '@cds/core/demo';

function Basic() {
  const data = getVMData();

  return (
    <div className="demo-content">
      <h2>Basic</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

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

export default Basic;
