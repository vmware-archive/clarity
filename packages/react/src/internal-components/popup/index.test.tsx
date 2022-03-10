import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsInternalPointer, CdsInternalPopup } from './index';

describe('CdsInternalPopup', () => {
  // throws  Error: Uncaught [TypeError: Cannot read property 'disconnect' of undefined]
  it.skip('renders', () => {
    render(
      <CdsInternalPopup>
        <CdsInternalPointer type="angle"></CdsInternalPointer>
        Ohai
      </CdsInternalPopup>
    );
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
