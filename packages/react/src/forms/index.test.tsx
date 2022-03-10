import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsControl, CdsControlMessage } from './index';

describe('CdsControl', () => {
  it('renders', async () => {
    render(
      <div cds-layout="vertical gap:lg">
        <CdsControl layout="compact">
          <label>Foo</label>
          <input placeholder="some custom control" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsControl>
      </div>
    );

    expect(await screen.findByLabelText('Foo')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('some custom control')).toBeInTheDocument();
    expect(await screen.findByText('message text')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <div cds-layout="vertical gap:lg">
        <CdsControl layout="compact">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="error">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="success">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsControl>
      </div>
    );
    expect(container).toMatchSnapshot();
  });
});
