import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsInternalOverlay } from './index';

describe('CdsInternalOverlay', () => {
  it('renders', async () => {
    render(<CdsInternalOverlay>Internal Overlay</CdsInternalOverlay>);

    expect(await screen.findByText('Internal Overlay')).toHaveAttribute('aria-modal', 'true');
  });

  it('snapshot', () => {
    const { container } = render(<CdsInternalOverlay>Internal Overlay</CdsInternalOverlay>);
    expect(container).toMatchSnapshot();
  });
});
