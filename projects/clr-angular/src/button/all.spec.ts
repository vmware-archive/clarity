/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import ButtonGroupSpecs from './button-group/button-group.spec';
import ButtonSpecs from './button-group/button.spec';
import ButtonInGroupServiceSpecs from './providers/button-in-group.service.spec';

describe('Button Group Directives', () => {
  ButtonSpecs();
  ButtonInGroupServiceSpecs();
  ButtonGroupSpecs();
});
