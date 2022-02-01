import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsTime } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsTime', () => {
  it('renders', async () => {
    render(
      <div>
        <CdsTime control-width="shrink">
          <label>Time input</label>
          <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTime>
      </div>
    );

    expect(await screen.findByLabelText(/Time input/i)).toHaveValue('11:00');
    expect(await screen.findByText(/message text/i)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsTime control-width="shrink">
        <label>Time input</label>
        <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
        <CdsControlMessage>message text</CdsControlMessage>
      </CdsTime>
    );

    expect(container).toMatchSnapshot();
  });
});
