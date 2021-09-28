/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsNavigation, CdsNavigationGroup, CdsNavigationStart, CdsNavigationItem } from './index';

describe('CdsNavigation', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
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
      </div>
    );
    const renderedComponent = wrapper.find(CdsNavigation);
    expect(renderedComponent.at(0).html()).toMatch(/Root start/);
    expect(renderedComponent.at(0).html()).toMatch(/Root item/);
    expect(renderedComponent.at(0).html()).toMatch(/Group start/);
    expect(renderedComponent.at(0).html()).toMatch(/Group item/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsNavigation>
          <CdsNavigationStart>Root start</CdsNavigationStart>
          <CdsNavigationItem>
            <a>Root item</a>
          </CdsNavigationItem>
          <CdsNavigationGroup>
            <CdsNavigationStart>
              <CdsNavigationStart>Group start</CdsNavigationStart>
              <CdsNavigationItem>
                <a>Group item</a>
              </CdsNavigationItem>
            </CdsNavigationStart>
          </CdsNavigationGroup>
        </CdsNavigation>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
