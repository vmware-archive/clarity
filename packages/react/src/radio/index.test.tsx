import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsRadio, CdsRadioGroup } from './index';

describe('CdsRadio', () => {
  it('renders', async () => {
    render(
      <>
        <CdsRadioGroup>
          <label>radio group</label>
          <CdsRadio>
            <label>radio 1</label>
            <input type="radio" defaultChecked />
          </CdsRadio>

          <CdsRadio>
            <label>radio 2</label>
            <input type="radio" />
          </CdsRadio>

          <CdsRadio>
            <label>radio 3</label>
            <input type="radio" />
          </CdsRadio>
        </CdsRadioGroup>
      </>
    );

    expect(document.querySelectorAll('cds-radio')).toHaveLength(3);
    expect(await screen.findByLabelText(/radio group/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/radio 1/i)).toBeChecked();
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsRadioGroup>
          <label>radio group</label>
          <CdsRadio>
            <label>radio 1</label>
            <input type="radio" defaultChecked />
          </CdsRadio>

          <CdsRadio>
            <label>radio 2</label>
            <input type="radio" />
          </CdsRadio>

          <CdsRadio>
            <label>radio 3</label>
            <input type="radio" />
          </CdsRadio>
        </CdsRadioGroup>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
