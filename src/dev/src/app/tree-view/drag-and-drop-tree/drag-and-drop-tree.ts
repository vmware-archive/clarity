/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

function moveItem(newTree, item, afterItem) {
  for (let i = newTree.length - 1; i >= 0; i--) {
    if (newTree[i] === item) {
      newTree.splice(i, 1);
      break;
    }
  }
  if (afterItem) {
    for (let i = 0; i < newTree.length; i++) {
      if (newTree[i] === afterItem) {
        newTree.splice(i, 0, item);
        break;
      }
    }
  }
  for (const node of newTree) {
    if (node.children) {
      moveItem(node.children, item, afterItem);
    }
  }
}

@Component({
  selector: 'clr-drag-and-drop-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './drag-and-drop-tree.html',
})
export class DragAndDropTreeDemo {
  tree = [
    { name: 'File A' },
    {
      name: 'Folder B',
      expanded: false,
      children: [
        { name: 'File B.1' },
        { name: 'File B.2' },
        { name: 'Folder B.3', expanded: false, children: [{ name: 'File B.3.1' }] },
      ],
    },
    { name: 'Folder C', expanded: false, children: [{ name: 'File C.1' }] },
    { name: 'File D' },
  ];

  getChildren(item) {
    return item.children;
  }

  getShape(item) {
    if (item.children) {
      return item.expanded ? 'folder-open' : 'folder';
    } else {
      return 'file';
    }
  }

  onDrop(item, afterItem?) {
    if (item === afterItem) {
      return;
    }

    const newTree = [...this.tree];
    moveItem(newTree, item, afterItem);
    if (!afterItem) {
      newTree.push(item);
    }
    this.tree = newTree;
  }
}
