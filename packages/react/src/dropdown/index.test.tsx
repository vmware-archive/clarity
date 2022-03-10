import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsDropdown } from './index';

const TestComponent = () => {
  const ref = React.useRef<HTMLSpanElement>();

  return (
    <>
      <span ref={ref}>Anchor Element</span>
      <CdsDropdown anchor={ref.current}></CdsDropdown>
    </>
  );
};

describe('CdsDropdown', () => {
  // throws Error: Uncaught [TypeError: Cannot read property 'disconnect' of undefined]
  it('renders', () => {
    render(<TestComponent></TestComponent>);
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const { container } = render(
      <div>
        <CdsDropdown></CdsDropdown>
        <div style={vertDivStyle}>
          <CdsDropdown orientation="vertical">1</CdsDropdown>
        </div>
      </div>
    );
    expect(container).toMatchSnapshot();
  });
});
