/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { addHelpers } from '../../data/datagrid/helpers.spec';

import DropdownMenuSpecs from './dropdown-menu.spec';
import DropdownSpecs from './dropdown.spec';
import DropdownItemSpecs from './dropdown-item.spec';
import DropdownTriggerSpecs from './dropdown-trigger.spec';
import DropdownFocusHandlerSpecs from './providers/dropdown-focus-handler.spec';

describe('Dropdown', function () {
  addHelpers();

  describe('Providers', function () {
    DropdownFocusHandlerSpecs();
  });

  describe('Components', function () {
    DropdownSpecs();
    DropdownMenuSpecs();
    DropdownItemSpecs();
    DropdownTriggerSpecs();
  });
});
