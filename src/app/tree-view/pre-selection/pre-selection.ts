/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrSelectedState } from '@clr/angular';

@Component({
  selector: 'clr-pre-selection-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './pre-selection.html',
})
export class PreSelectionDemo {
  eager = {
    consistent: {
      unselected: {
        parent: ClrSelectedState.UNSELECTED,
        child1: ClrSelectedState.UNSELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
      selected: {
        parent: ClrSelectedState.SELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.SELECTED,
      },
      indeterminate: {
        parent: ClrSelectedState.INDETERMINATE,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
    },

    inconsistent: {
      unselected: {
        parent: ClrSelectedState.INDETERMINATE,
        child1: ClrSelectedState.UNSELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
      selected: {
        parent: ClrSelectedState.UNSELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.SELECTED,
      },
      indeterminate: {
        parent: ClrSelectedState.SELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
    },

    childrenOnly: {
      unselected: {
        child1: ClrSelectedState.UNSELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
      selected: {
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.SELECTED,
      },
      indeterminate: {
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
    },
  };

  lazy = {
    consistent: {
      unselected: {
        parent: ClrSelectedState.UNSELECTED,
        child1: ClrSelectedState.UNSELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
      selected: {
        parent: ClrSelectedState.SELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.SELECTED,
      },
      indeterminate: {
        parent: ClrSelectedState.INDETERMINATE,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
    },

    inconsistent: {
      unselected: {
        parent: ClrSelectedState.INDETERMINATE,
        child1: ClrSelectedState.UNSELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
      selected: {
        parent: ClrSelectedState.UNSELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.SELECTED,
      },
      indeterminate: {
        parent: ClrSelectedState.SELECTED,
        child1: ClrSelectedState.SELECTED,
        child2: ClrSelectedState.UNSELECTED,
      },
    },
  };

  larger = [
    {
      name: 'Item A',
      selected: ClrSelectedState.UNSELECTED,
      children: this.addChildren('A'),
    },
    {
      name: 'Item B',
      selected: ClrSelectedState.UNSELECTED,
      children: this.addChildren('B'),
    },
    {
      name: 'Item C',
      selected: ClrSelectedState.UNSELECTED,
      children: this.addChildren('C'),
    },
  ];

  private addChildren(letter: string) {
    return Array.from(Array(50).keys()).map(key => ({
      name: `Item ${letter}.${key}`,
      selected: ClrSelectedState.UNSELECTED,
    }));
  }
}
