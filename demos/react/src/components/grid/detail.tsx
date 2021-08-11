import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsGridDetail } from '@cds/react/grid';
import { CdsActionExpand } from '@cds/react/action';

import { getVMData, TestVM } from '@cds/core/demo';
import { useState } from 'react';


function Detail() {
  const data = getVMData();

  const [detailAnchor, detailAnchorChange] = useState<any>();
  const [detailItem, detailItemChange] = useState<TestVM>();

  const onDetailExpand = (anchor: any, item: TestVM) => {
    if(item.id === detailItem?.id) {
      detailItemChange(() => undefined);
      detailAnchorChange(() => undefined);  
      return;
    }
    detailItemChange(() => item);
    detailAnchorChange(() => anchor);
  }

  const onCloseChange = () => {
    detailItemChange(() => undefined);
    detailAnchorChange(() => undefined);
  }

  return (
    <div className="demo-content">
      <h2>Detail</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn type="action"></CdsGridColumn>
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>

          {data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>
                <CdsActionExpand expanded={item.id === detailItem?.id} onClick={event => {onDetailExpand(event.target, item)}} id="current-detail-demo" aria-label="view host details" action="detail"></CdsActionExpand>
              </CdsGridCell>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

            <CdsGridDetail {...{'hidden': !detailItem, 'anchor': detailAnchor}} onCloseChange={onCloseChange}>
              <h2>Host: {detailItem?.id}</h2>
              <p>Status: {detailItem?.status}</p>
              <p>CPU: {detailItem?.cpu}</p>
              <p>Memory: {detailItem?.memory}</p>
            </CdsGridDetail>

            <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default Detail;
