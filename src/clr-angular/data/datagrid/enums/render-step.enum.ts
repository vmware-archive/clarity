/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export enum DatagridRenderStep {
  ALIGN_COLUMNS,
  CALCULATE_MODE_ON,
  CALCULATE_MODE_OFF,
  CLEAR_WIDTHS, // Note this is listened to by both cells and columns
  COMPUTE_COLUMN_WIDTHS,
  DETECT_STRICT_WIDTHS,
  UPDATE_ROW_WIDTH,
}
