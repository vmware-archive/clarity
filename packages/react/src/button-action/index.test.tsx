import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButtonAction } from './index';

describe('CdsButtonAction', () => {
  it('renders', async () => {
    render(<CdsButtonAction shape="close" aria-label="close"></CdsButtonAction>);
    expect(await screen.findByRole('button', { name: 'close' })).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsButtonAction shape="close" aria-label="close"></CdsButtonAction>);
    expect(container).toMatchSnapshot();
  });
});
