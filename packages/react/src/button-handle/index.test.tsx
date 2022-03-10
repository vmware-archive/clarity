import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButtonHandle } from './index';

describe('CdsButtonAction', () => {
  it('renders', async () => {
    render(<CdsButtonHandle aria-label="resize"></CdsButtonHandle>);
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsButtonHandle aria-label="resize"></CdsButtonHandle>);
    expect(container).toMatchSnapshot();
  });
});
