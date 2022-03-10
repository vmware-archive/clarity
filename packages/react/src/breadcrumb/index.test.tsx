import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsBreadcrumb } from './index';

describe('CdsBreadcrumb', () => {
  it('renders', async () => {
    render(
      <CdsBreadcrumb>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </CdsBreadcrumb>
    );

    expect(await screen.findByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'link 2' }));
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsBreadcrumb>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </CdsBreadcrumb>
    );
    expect(container).toMatchSnapshot();
  });
});
