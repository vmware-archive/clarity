import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButton } from './index';

describe('CdsButton', () => {
  it('renders', async () => {
    render(
      <>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </>
    );

    expect(await screen.findByRole('button', { name: 'primary' })).toHaveAttribute('status', 'primary');
    expect(await screen.findByRole('button', { name: 'success' })).toHaveAttribute('status', 'success');
    expect(await screen.findByRole('button', { name: 'disabled' })).toHaveAttribute('disabled', '');
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
