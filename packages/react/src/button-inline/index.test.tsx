import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButtonInline } from './index';

describe('CdsButtonInline', () => {
  it('renders', async () => {
    render(<CdsButtonInline></CdsButtonInline>);

    expect(await screen.findByRole('button')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsButtonInline></CdsButtonInline>);
    expect(container).toMatchSnapshot();
  });
});
