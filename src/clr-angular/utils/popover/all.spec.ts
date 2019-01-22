/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ClrPositionTransformSpec, ClrAlignmentSpec, ClrViewportValidationSpec } from './position-operators.spec';
import EventServiceSpec from './providers/popover-events.service.spec';
import ToggleServiceSpec from './providers/popover-toggle.service.spec';
import PositionServiceSpec from './providers/popover-position.service.spec';
import ClrPopoverAnchorSpec from './popover-anchor.spec';
import ClrPopoverOpenCloseButtonSpec from './popover-open-close-button.spec';
import ClrPopoverCloseButtonSpec from './popover-close-button.spec';
import ClrPopoverContentSpec from './popover-content.spec';

describe('ClrPopover', () => {
  describe('ClrPositionOperator functions', () => {
    ClrPositionTransformSpec();
    ClrAlignmentSpec();
    ClrViewportValidationSpec();
  });
  describe('Service', () => {
    EventServiceSpec();
    ToggleServiceSpec();
    PositionServiceSpec();
  });
  describe('Directive', () => {
    ClrPopoverAnchorSpec();
    ClrPopoverOpenCloseButtonSpec();
    ClrPopoverCloseButtonSpec();
    ClrPopoverContentSpec();
  });
});
