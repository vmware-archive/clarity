import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsInternalVisualCheckbox } from './index';

describe('CdsInternalVisualCheckbox', () => {
  it('renders', () => {
    render(<CdsInternalVisualCheckbox />);

    expect(document.querySelector('cds-internal-visual-checkbox')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<CdsInternalVisualCheckbox />);
    expect(container).toMatchSnapshot();
  });
});
