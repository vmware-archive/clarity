import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsCheckboxPanel } from './index';

describe('CdsCheckboxPanel', () => {
  it('renders', async () => {
    render(
      <CdsCheckboxPanel>
        <label>Hello</label>
        <input type="checkbox" />
      </CdsCheckboxPanel>
    );
    expect(document.querySelector('cds-checkbox')).toHaveTextContent(/Hello/i);
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsCheckboxPanel>
        <label>Hello</label>
        <input type="checkbox" />
      </CdsCheckboxPanel>
    );
    expect(container).toMatchSnapshot();
  });
});
