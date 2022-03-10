import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButtonSort } from './index';

describe('CdsButtonSort', () => {
  it('renders', async () => {
    render(<CdsButtonSort></CdsButtonSort>);
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsButtonSort></CdsButtonSort>);
    expect(container).toMatchSnapshot();
  });
});
