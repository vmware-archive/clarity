import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsCheckbox } from './index';

describe('CdsCheckbox', () => {
  it('renders', async () => {
    render(
      <CdsCheckbox>
        <label htmlFor="my-checkbox">Hello</label>
        <input id="my-checkbox" type="checkbox" />
      </CdsCheckbox>
    );
    expect(await screen.findByRole('checkbox', { name: 'Hello' })).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsCheckbox>
        <label htmlFor="my-checkbox">Hello</label>
        <input id="my-checkbox" type="checkbox" />
      </CdsCheckbox>
    );
    expect(container).toMatchSnapshot();
  });
});
