import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsRange } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsRange', () => {
  it('renders', async () => {
    render(
      <CdsFormGroup>
        <CdsRange>
          <label>label</label>
          <input type="range" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsRange>
      </CdsFormGroup>
    );

    expect(await screen.findByLabelText(/label/i)).toBeInTheDocument();
    expect(await screen.findByText(/message text/i)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsFormGroup layout="horizontal">
        <CdsRange layout="horizontal">
          <label>label</label>
          <input type="range" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal">
          <label>disabled</label>
          <input type="range" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal" status="error">
          <label>error</label>
          <input type="range" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal" status="success">
          <label>success</label>
          <input type="range" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsRange>
      </CdsFormGroup>
    );

    expect(container).toMatchSnapshot();
  });
});
