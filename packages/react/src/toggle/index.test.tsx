import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsToggle, CdsToggleGroup } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsToggle', () => {
  it('renders', async () => {
    render(
      <>
        <CdsToggleGroup>
          <label>A toggle group</label>
          <CdsToggle>
            <label>Toggle 1</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsToggle>
            <label>Toggle 2</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsControlMessage>group message text</CdsControlMessage>
        </CdsToggleGroup>

        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>
      </>
    );

    expect(await (await screen.findByLabelText(/A toggle group/)).tagName).toBe('CDS-TOGGLE-GROUP');
    expect(await screen.findByLabelText(/Toggle 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/group message text/i)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsToggleGroup>
          <label>A toggle group</label>
          <CdsToggle>
            <label>Toggle 1</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsToggle>
            <label>Toggle 2</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsControlMessage>group message text</CdsControlMessage>
        </CdsToggleGroup>

        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
