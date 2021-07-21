import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from './index';

describe('CdsGrid', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsGrid aria-label="basic datagrid demo">
          <CdsGridColumn>Type</CdsGridColumn>
          <CdsGridColumn>Description</CdsGridColumn>
          <CdsGridColumn>Amount</CdsGridColumn>
          <CdsGridColumn>Balance</CdsGridColumn>
          <CdsGridRow>
            <CdsGridCell>Deposit</CdsGridCell>
            <CdsGridCell>Item</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridRow>
            <CdsGridCell>Credit</CdsGridCell>
            <CdsGridCell>Billing</CdsGridCell>
            <CdsGridCell>$250.00</CdsGridCell>
            <CdsGridCell>$523,750.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridFooter>Footer</CdsGridFooter>
        </CdsGrid>
      </div>
    );
    const renderedComponent = wrapper.find('CdsGrid');
    expect(renderedComponent.html()).toMatch(/Type/);
    expect(renderedComponent.html()).toMatch(/Deposit/);
    expect(renderedComponent.html()).toMatch(/Footer/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsGrid aria-label="basic datagrid demo">
          <CdsGridColumn>Type</CdsGridColumn>
          <CdsGridColumn>Description</CdsGridColumn>
          <CdsGridColumn>Amount</CdsGridColumn>
          <CdsGridColumn>Balance</CdsGridColumn>
          <CdsGridRow>
            <CdsGridCell>Deposit</CdsGridCell>
            <CdsGridCell>Item</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridRow>
            <CdsGridCell>Credit</CdsGridCell>
            <CdsGridCell>Billing</CdsGridCell>
            <CdsGridCell>$250.00</CdsGridCell>
            <CdsGridCell>$523,750.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
