/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { addHelpers } from '../../data/datagrid/helpers.spec';

import DropdownMenuSpecs from './dropdown-menu.spec';
import DropdownSpecs from './dropdown.spec';

describe('Dropdown', function() {
  addHelpers();

  describe('Components', function() {
    DropdownSpecs();
    DropdownMenuSpecs();
  });
});
