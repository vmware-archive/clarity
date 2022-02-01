import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsDate } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsDate', () => {
  it('renders', async () => {
    render(
      <div>
        <CdsDate layout="horizontal" control-width="shrink">
          <label>Date input</label>
          <input type="date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsDate>
      </div>
    );

    expect(await screen.findByLabelText('Date input'));
    expect(await screen.findByText('message text'));
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsDate layout="horizontal" control-width="shrink">
        <label htmlFor="my-date">Date input</label>
        <input type="date" id="my-date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
        <CdsControlMessage>message text</CdsControlMessage>
      </CdsDate>
    );

    expect(container).toMatchSnapshot();
  });
});
