import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsPagination, CdsPaginationButton } from './index';

describe('CdsPagination', () => {
  it('renders', () => {
    const wrapper = shallow(
      <CdsPagination aria-label="pagination">
        <CdsPaginationButton aria-label="go to first" action="first" disabled></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to previous" action="prev" disabled></CdsPaginationButton>
        <span aria-label="current page">1 / 3</span>
        <CdsPaginationButton aria-label="go to next" action="next"></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to last" action="last"></CdsPaginationButton>
      </CdsPagination>
    );
    const renderedComponent = wrapper.find(CdsPagination);
    expect(renderedComponent.at(0)).toBeDefined();
    expect(renderedComponent.at(1)).toBeDefined();
    expect(renderedComponent.at(2)).toBeDefined();
  });

  it('snapshot', () => {
    const wrapper = mount(
      <CdsPagination aria-label="pagination">
        <CdsPaginationButton aria-label="go to first" action="prev" disabled></CdsPaginationButton>
        <CdsPaginationButton aria-label="go to next" action="next"></CdsPaginationButton>
      </CdsPagination>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
