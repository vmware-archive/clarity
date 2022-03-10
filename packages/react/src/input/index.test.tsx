import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsInput, CdsInputGroup } from './index';

describe('CdsInput', () => {
  it('renders', async () => {
    render(
      <div>
        <CdsInputGroup>
          <CdsInput layout="vertical">
            <label>label</label>
            <input placeholder="placeholder" />
          </CdsInput>
          <CdsInput layout="vertical">
            <label>disabled</label>
            <input placeholder="name" disabled />
          </CdsInput>
        </CdsInputGroup>
      </div>
    );

    expect(await screen.findByPlaceholderText('placeholder')).toBeInTheDocument();
    expect(await screen.findByLabelText('disabled')).toBeDisabled();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsInputGroup>
        <CdsInput layout="vertical">
          <label>label</label>
          <input placeholder="name" />
        </CdsInput>
        <CdsInput layout="vertical">
          <label>disabled</label>
          <input placeholder="name" disabled />
        </CdsInput>
      </CdsInputGroup>
    );
    expect(container).toMatchSnapshot();
  });
});
