/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import TooltipContentSpecs from './tooltip-content.spec';
import TooltipTriggerSpecs from './tooltip-trigger.spec';
import TooltipSpecs from './tooltip.spec';

describe('Tooltip', () => {
  TooltipContentSpecs();
  TooltipTriggerSpecs();
  TooltipSpecs();
});
