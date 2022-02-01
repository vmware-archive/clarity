import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsInternalPointer, CdsInternalPopup } from './index';

describe('CdsInternalPopup', () => {
  it.skip('renders', () => {
    render(
      <CdsInternalPopup>
        <CdsInternalPointer type="angle"></CdsInternalPointer>
        Ohai
      </CdsInternalPopup>
    );

    screen.debug();
  });

  it.skip('snapshot', () => {
    const { container } = render(
      <CdsInternalPopup>
        <CdsInternalPointer type="angle"></CdsInternalPointer>
        Ohai
      </CdsInternalPopup>
    );
    expect(container).toMatchSnapshot();
  });
});
