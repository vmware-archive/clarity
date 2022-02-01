import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsPassword } from './index';

describe('CdsPassword', () => {
  it('renders', async () => {
    render(
      <CdsPassword layout="vertical">
        <label>label</label>
        <input type="password" defaultValue="123456" />
      </CdsPassword>
    );
    expect(await screen.findByLabelText('label')).toHaveValue('123456');
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsPassword layout="vertical">
        <label>label</label>
        <input type="password" defaultValue="123456" />
      </CdsPassword>
    );
    expect(container).toMatchSnapshot();
  });
});
