import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsIcon } from './index';
import { ClarityIcons, userIcon, timesIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, timesIcon);

describe('CdsIcon', () => {
  it('renders', () => {
    render(
      <>
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
      </>
    );

    expect(document.querySelectorAll('cds-icon')).toHaveLength(5);
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
