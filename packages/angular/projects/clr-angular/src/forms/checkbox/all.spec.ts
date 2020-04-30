/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import CheckboxContainerSpecs from './checkbox-container.spec';
import CheckboxWrapperSpecs from './checkbox-wrapper.spec';
import CheckboxSpecs from './checkbox.spec';
import ToggleContainerSpecs from './toggle-container.spec';
import ToggleWrapperSpecs from './toggle-wrapper.spec';
import ToggleSpecs from './toggle.spec';

describe('Checkbox component', function () {
  CheckboxContainerSpecs();
  CheckboxWrapperSpecs();
  CheckboxSpecs();
  ToggleContainerSpecs();
  ToggleWrapperSpecs();
  ToggleSpecs();
});
