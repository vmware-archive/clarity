import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsTree, CdsTreeItem } from './index';

describe('CdsTree', () => {
  it('renders', async () => {
    render(
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
    );

    expect(await screen.findByRole('tree')).toBeInTheDocument();
    expect(await screen.findAllByRole('treeitem')).toHaveLength(10);
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsTree>
        <CdsTreeItem expanded id="tree-item-1">
          1
          <CdsTreeItem id="tree-item-1-1">
            1-1
            <CdsTreeItem id="tree-item-1-1-1">1-1-1</CdsTreeItem>
            <CdsTreeItem id="tree-item-1-1-2">1-1-2</CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem id="tree-item-1-2">1-2</CdsTreeItem>
          <CdsTreeItem id="tree-item-1-3">1-3</CdsTreeItem>
        </CdsTreeItem>
        <CdsTreeItem id="tree-item-2">
          2<CdsTreeItem id="tree-item-2-1">2-1</CdsTreeItem>
          <CdsTreeItem id="tree-item-2-2">2-2</CdsTreeItem>
        </CdsTreeItem>
        <CdsTreeItem id="tree-item-3">3</CdsTreeItem>
      </CdsTree>
    );
    expect(container).toMatchSnapshot();
  });
});
