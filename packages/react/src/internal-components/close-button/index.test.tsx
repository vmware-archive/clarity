import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsInternalCloseButton } from './index';

describe('CdsInternalCloseButton', () => {
  it('renders', async () => {
    render(<CdsInternalCloseButton />);

    expect(document.querySelector('cds-internal-close-button')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsInternalCloseButton />);
    expect(container).toMatchSnapshot();
  });
});
