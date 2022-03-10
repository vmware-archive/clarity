import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsBadge } from './index';

describe('CdsBadge', () => {
  it('renders', async () => {
    render(
      <>
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
      </>
    );

    expect(await screen.findByText(2)).toBeInTheDocument();
    expect(document.querySelectorAll('cds-badge').length).toEqual(2);
    expect(document.querySelector("[color='gray']")).toBeInTheDocument();
    expect(document.querySelector("[status='info']")).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge status="success">3</CdsBadge>
        <CdsBadge status="warning">12</CdsBadge>
        <CdsBadge status="danger">15</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
        <CdsBadge color="purple">6</CdsBadge>
        <CdsBadge color="blue">15</CdsBadge>
        <CdsBadge color="orange">2</CdsBadge>
        <CdsBadge color="light-blue">3</CdsBadge>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
