import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsProgressCircle } from './index';

describe('CdsProgressCircle', () => {
  it('renders', async () => {
    render(
      <>
        <CdsProgressCircle status="info" value={49}></CdsProgressCircle>
        <CdsProgressCircle value={0}></CdsProgressCircle>
        <CdsProgressCircle status="success" value={100}></CdsProgressCircle>
      </>
    );
    expect(document.querySelectorAll('cds-progress-circle')).toHaveLength(3);
    expect(await screen.findAllByRole('img')).toHaveLength(3);
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsProgressCircle status="info" value={49}></CdsProgressCircle>
        <CdsProgressCircle value={0}></CdsProgressCircle>
        <CdsProgressCircle status="success" value={100}></CdsProgressCircle>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
