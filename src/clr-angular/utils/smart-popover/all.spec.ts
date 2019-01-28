/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import {
  ClrSmartTransformSpec,
  ClrSmartAlignmentSpec,
  ClrSmartViewportValidationSpec,
} from './clr-position-operators.spec';
import ClrSmartEventServiceSpec from './providers/smart-popover-events.service.spec';
import ClrSmartToggleServiceSpec from './providers/smart-popover-toggle.service.spec';
import ClrSmartPositionServiceSpec from './providers/smart-popover-position.service.spec';
import ClrSmartPopoverAnchorSpec from './smart-anchor.spec';
import ClrSmartOpenCloseButtonSpec from './smart-open-close-button.spec';
import ClrSmartCloseButtonSpec from './smart-close-button.spec';
import ClrSmartPopoverContentSpec from './smart-popover-content.spec';

describe('ClrSmartPopover', () => {
  describe('ClrPositionOperator functions', () => {
    ClrSmartTransformSpec();
    ClrSmartAlignmentSpec();
    ClrSmartViewportValidationSpec();
  });
  describe('Service', () => {
    ClrSmartEventServiceSpec();
    ClrSmartToggleServiceSpec();
    ClrSmartPositionServiceSpec();
  });
  describe('Directive', () => {
    ClrSmartPopoverAnchorSpec();
    ClrSmartOpenCloseButtonSpec();
    ClrSmartCloseButtonSpec();
    ClrSmartPopoverContentSpec();
  });
});
