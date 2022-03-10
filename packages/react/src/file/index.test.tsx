import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsFile } from './index';

describe('CdsFile', () => {
  it('renders', async () => {
    render(
      <CdsFile layout="vertical">
        <label>File</label>
        <input type="file" multiple />
      </CdsFile>
    );

    expect(await screen.findByLabelText('File')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsFile layout="vertical">
        <label>label</label>
        <input type="file" multiple />
      </CdsFile>
    );
    expect(container).toMatchSnapshot();
  });
});
