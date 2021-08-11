import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter, CdsGridPlaceholder } from '@cds/react/grid';
import { CdsProgressCircle } from '@cds/react/progress-circle';

import { TestVM } from '@cds/core/demo';
import { useEffect, useState } from 'react';
import { MockAPI } from '../utils/mock-api';


function AsyncData() {
  
  const [data, setData] = useState<TestVM[]>([]);

  const mockAPI = new MockAPI();

  useEffect(() => {
    mockAPI.requestData().then((data: TestVM[]) => {
      setData(() => data);
    })

    return () => {
      mockAPI.disconnect();
    }
  }, []);

  return (
    <div className="demo-content">
      <h2>Async Data</h2>
      <div className="content">
        <CdsGrid className="demo-grid">
          <CdsGridColumn>Host</CdsGridColumn>
          <CdsGridColumn>Status</CdsGridColumn>
          <CdsGridColumn>CPU</CdsGridColumn>
          <CdsGridColumn>Memory</CdsGridColumn>


          {data.length? data.map((item: any) => (
            <CdsGridRow key={item.id}>
              <CdsGridCell>{item.id}</CdsGridCell>
              <CdsGridCell>{item.status}</CdsGridCell>
              <CdsGridCell>{item.cpu}</CdsGridCell>
              <CdsGridCell>{item.memory}</CdsGridCell>
            </CdsGridRow>
          )):(<CdsGridPlaceholder>
            <CdsProgressCircle size="xl" status="info"></CdsProgressCircle>
            <p cds-text="subsection">Loading VMs</p>
          </CdsGridPlaceholder>)}

          

          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
      </div>
    </div>
  );
}

export default AsyncData;
