import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsInternalPanel } from './index';

describe('CdsInternalPanel', () => {
  it('renders', () => {
    render(<CdsInternalPanel>Hello!</CdsInternalPanel>);

    expect(document.querySelector('cds-internal-panel')).toHaveTextContent('Hello!');
  });

  it('snapshot', () => {
    const { container } = render(<CdsInternalPanel>Hello!</CdsInternalPanel>);
    expect(container).toMatchSnapshot();
  });
});
