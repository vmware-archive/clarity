import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsDivider } from './index';

describe('CdsDivider', () => {
  it('renders', () => {
    render(<CdsDivider></CdsDivider>);
    expect(document.querySelector('cds-divider')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const { container } = render(
      <div>
        <CdsDivider></CdsDivider>
        <div style={vertDivStyle}>
          <CdsDivider orientation="vertical">1</CdsDivider>
        </div>
      </div>
    );
    expect(container).toMatchSnapshot();
  });
});
