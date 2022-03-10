import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsCard } from './index';

describe('CdsCard', () => {
  it('renders', async () => {
    render(
      <CdsCard>
        <div cds-layout="vertical gap:md">
          <h2 id="myCardTitle" cds-text="section">
            Card Title
          </h2>
        </div>
      </CdsCard>
    );
    expect(await screen.findByRole('region'));
    expect(await screen.findByRole('heading', { name: 'Card Title' }));
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsCard>
        <div cds-layout="vertical gap:md">
          <h2 id="myCardTitle" cds-text="section">
            Card Title
          </h2>
        </div>
      </CdsCard>
    );
    expect(container).toMatchSnapshot();
  });
});
