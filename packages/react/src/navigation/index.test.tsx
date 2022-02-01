/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsNavigation, CdsNavigationGroup, CdsNavigationStart, CdsNavigationItem } from './index';

describe('CdsNavigation', () => {
  it('renders', async () => {
    render(
      <CdsNavigation>
        <CdsNavigationStart>Root start</CdsNavigationStart>
        <CdsNavigationItem>
          <a>Root item</a>
        </CdsNavigationItem>
        <CdsNavigationGroup>
          <CdsNavigationStart>Group start</CdsNavigationStart>
          <CdsNavigationItem>
            <a>Group item</a>
          </CdsNavigationItem>
        </CdsNavigationGroup>
      </CdsNavigation>
    );

    expect(document.querySelector('cds-navigation')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(4);
    expect(await screen.findByText(/Root item/i)).toBeInTheDocument();
    expect(await screen.findByText(/Group item/i)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsNavigation>
        <CdsNavigationStart id="nav-start">Root start</CdsNavigationStart>
        <CdsNavigationItem id="nav-item-1">
          <a>Root item</a>
        </CdsNavigationItem>
        <CdsNavigationGroup id="nav-group">
          <CdsNavigationStart id="nav-start-1">
            <CdsNavigationStart id="nav-start-2">Group start</CdsNavigationStart>
            <CdsNavigationItem id="nav-item">
              <a>Group item</a>
            </CdsNavigationItem>
          </CdsNavigationStart>
        </CdsNavigationGroup>
      </CdsNavigation>
    );
    expect(container).toMatchSnapshot();
  });
});
