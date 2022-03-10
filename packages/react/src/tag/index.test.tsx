import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsTag } from './index';

describe('CdsTag', () => {
  it('renders', async () => {
    render(
      <>
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
      </>
    );
    expect(document.querySelectorAll('cds-tag')).toHaveLength(2);
    expect(await screen.findByText(/Info/i)).toHaveAttribute('status', 'info');
    expect(await screen.findByText(/Success/i)).toHaveAttribute('status', 'success');
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
