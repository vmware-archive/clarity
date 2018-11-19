/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
}
