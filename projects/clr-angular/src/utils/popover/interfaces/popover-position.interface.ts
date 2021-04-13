/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ClrAlignment } from '../enums/alignment.enum';
import { ClrSide } from '../enums/side.enum';
import { ClrAxis } from '../enums/axis.enum';

/**
 * ClrPopoverPosition
 *
 * @description
 * A ClrPopover needs a way to describe the relationship between the anchor and the content (for when its
 * visible). The ClrPopoverPosition interface is that description.
 */

export interface ClrPopoverPosition {
  axis: ClrAxis; // The axis on which content and anchor push against each other
  side: ClrSide; // The side where content appears (top/bottom or left/right depending on the axis)
  anchor: ClrAlignment; // The position that the content element should align to
  content: ClrAlignment; // The position that the anchor element should align to
}
