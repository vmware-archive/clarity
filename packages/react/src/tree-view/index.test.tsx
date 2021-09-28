import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsTree, CdsTreeItem } from './index';

describe('CdsTree', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsTree>
          <CdsTreeItem expanded>
            1
            <CdsTreeItem>
              1-1
              <CdsTreeItem>1-1-1</CdsTreeItem>
              <CdsTreeItem>1-1-2</CdsTreeItem>
            </CdsTreeItem>
            <CdsTreeItem>1-2</CdsTreeItem>
            <CdsTreeItem>1-3</CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem>
            2<CdsTreeItem>2-1</CdsTreeItem>
            <CdsTreeItem>2-2</CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem>3</CdsTreeItem>
        </CdsTree>
      </div>
    );
    const renderedComponent = wrapper.find(CdsTreeItem);
    expect(renderedComponent.at(0).html()).toMatch(/1/);
    expect(renderedComponent.at(1).html()).toMatch(/1-1/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsTree>
          <CdsTreeItem expanded>
            1
            <CdsTreeItem>
              1-1
              <CdsTreeItem>1-1-1</CdsTreeItem>
              <CdsTreeItem>1-1-2</CdsTreeItem>
            </CdsTreeItem>
            <CdsTreeItem>1-2</CdsTreeItem>
            <CdsTreeItem>1-3</CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem>
            2<CdsTreeItem>2-1</CdsTreeItem>
            <CdsTreeItem>2-2</CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem>3</CdsTreeItem>
        </CdsTree>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
