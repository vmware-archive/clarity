import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsGridDetail } from '@cds/react/grid';
import { CdsButtonExpand } from '@cds/react/button-expand';

import { getVMData, TestVM } from '@cds/core/demo';
import { useRef, useState } from 'react';


function Detail() {
  const data = getVMData();

  const detailAnchorRef = useRef<string | HTMLElement | undefined>();
  const [detailItem, setDetailItem] = useState<TestVM>();

  const onDetailExpand = (anchor: any, item: TestVM) => {
    if(item.id === detailItem?.id) {
      setDetailItem(undefined);
      detailAnchorRef.current = undefined;
      return;
    }
    setDetailItem(item);
    detailAnchorRef.current = anchor;
  }

  const onCloseChange = () => {
    setDetailItem(undefined);
    detailAnchorRef.current = undefined;
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
                <CdsButtonExpand pressed={item.id === detailItem?.id} onClick={event => {onDetailExpand(event.target, item)}} id="current-detail-demo" aria-label="view host details" action="detail" />
              </CdsGridCell>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          ))}

          <CdsGridDetail hidden ={!detailItem ? true : undefined} anchor={detailAnchorRef.current} onCloseChange={onCloseChange}>
            <h2>Host: {detailItem?.id}</h2>
            <p>Status: {detailItem?.status}</p>
            <p>CPU: {detailItem?.cpu}</p>
            <p>Memory: {detailItem?.memory}</p>
          </CdsGridDetail>

          <CdsGridFooter />
        </CdsGrid>
      </div>
    </div>
  );
}

export default Detail;
