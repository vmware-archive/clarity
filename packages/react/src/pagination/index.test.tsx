import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsPagination, CdsPaginationButton } from './index';

describe('CdsPagination', () => {
  it('renders', async () => {
    render(
      <CdsPagination aria-label="pagination">
        <CdsPaginationButton aria-label="go to first" action="first" disabled></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to previous" action="prev" disabled></CdsPaginationButton>
        <span aria-label="current page">1 / 3</span>
        <CdsPaginationButton aria-label="go to next" action="next"></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to last" action="last"></CdsPaginationButton>
      </CdsPagination>
    );
    expect(document.querySelector('cds-pagination')).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /go to first/i })).toBeDisabled();
    expect(await screen.findByRole('button', { name: /go to last/i })).not.toBeDisabled();
    expect(await screen.findByLabelText('current page')).toHaveTextContent(/1 \/ 3/i);
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsPagination aria-label="pagination">
        <CdsPaginationButton aria-label="go to first" action="prev" disabled></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to next" action="next"></CdsPaginationButton>
      </CdsPagination>
    );
    expect(container).toMatchSnapshot();
  });
});
