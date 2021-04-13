/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Point } from '../common/popover';

export interface Position {
  anchorPoint: Point;
  popoverPoint: Point;
  offsetY: number;
  offsetX: number;
}

export const SIGNPOST_POSITIONS: { [input: string]: Position } = {
  'top-left': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_RIGHT, offsetY: -10, offsetX: 0 },
  'top-middle': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_CENTER, offsetY: -10, offsetX: 0 },
  'top-right': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_LEFT, offsetY: -10, offsetX: 0 },
  'right-top': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_BOTTOM, offsetY: 2, offsetX: 14 },
  'right-middle': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_CENTER, offsetY: 6, offsetX: 14 },
  'right-bottom': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_TOP, offsetY: -1, offsetX: 14 },
  'bottom-right': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_LEFT, offsetY: 9, offsetX: -1 },
  'bottom-middle': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_CENTER, offsetY: 9, offsetX: 12 },
  'bottom-left': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_RIGHT, offsetY: 9, offsetX: 0 },
  'left-bottom': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_TOP, offsetY: 0, offsetX: -14 },
  'left-middle': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_CENTER, offsetY: 4, offsetX: -14 },
  'left-top': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_BOTTOM, offsetY: 0, offsetX: -14 },
  default: { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_CENTER, offsetY: 6, offsetX: 14 },
};
