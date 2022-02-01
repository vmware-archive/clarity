import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButtonExpand } from './index';

describe('CdsButtonAction', () => {
  it('renders', async () => {
    render(<CdsButtonExpand></CdsButtonExpand>);
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsButtonExpand></CdsButtonExpand>);
    expect(container).toMatchSnapshot();
  });
});
