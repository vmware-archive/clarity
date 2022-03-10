import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsDatalist } from './index';

describe('CdsDatalist', () => {
  it('renders', async () => {
    render(
      <CdsDatalist>
        <label htmlFor="my-input">My datalist</label>
        <input id="my-input" list="my-list" placeholder="placeholder text" />
        <datalist id="my-list">
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
      </CdsDatalist>
    );
    expect(await screen.getByLabelText('My datalist')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsDatalist>
        <CdsDatalist>
          <label htmlFor="my-input">datalist</label>
          <input id="my-input" list="my-list" placeholder="placeholder text" />
          <datalist id="my-list">
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </CdsDatalist>
      </CdsDatalist>
    );
    expect(container).toMatchSnapshot();
  });
});
