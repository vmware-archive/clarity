import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsSelect } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsSelect', () => {
  it('renders', async () => {
    render(
      <CdsFormGroup>
        <CdsSelect>
          <label>label</label>
          <select>
            <option>option one</option>
            <option>option two</option>
            <option>option three</option>
          </select>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSelect>
      </CdsFormGroup>
    );

    expect(await screen.findByLabelText(/label/i)).toBeInTheDocument();
    expect(await screen.findByText(/message text/i)).toBeInTheDocument();
    expect(await screen.findAllByRole('option')).toHaveLength(3);
  });

  it('snapshot', () => {
    const { container } = render(
      <div>
        <h3>Selects</h3>

        <CdsFormGroup layout="horizontal">
          <CdsSelect>
            <label>label</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="error">
            <label>error</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="success">
            <label>success</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSelect>
        </CdsFormGroup>

        <h3>Multi-selects</h3>
        <CdsSelect>
          <label>label</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSelect>
      </div>
    );

    expect(container).toMatchSnapshot();
  });
});
