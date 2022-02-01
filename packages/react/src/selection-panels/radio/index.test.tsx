import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsRadioPanel } from './index';

describe('CdsRadioPanel', () => {
  it('renders', () => {
    render(
      <CdsRadioPanel>
        <label>Hello</label>
        <input type="checkbox" />
      </CdsRadioPanel>
    );
    expect(document.querySelector('cds-radio')).toHaveTextContent(/Hello/i);
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsRadioPanel>
        <label>Hello</label>
        <input type="checkbox" />
      </CdsRadioPanel>
    );
    expect(container).toMatchSnapshot();
  });
});
