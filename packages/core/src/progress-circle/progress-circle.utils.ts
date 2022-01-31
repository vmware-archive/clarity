/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// note: these may be of more general use with progress bars in general; perhaps promote them at some point???

// 36 is the default viewbox dimensions
export function getProgressCircleRadius(lineThickness: number, viewboxDimension = 36) {
  // we need to keep this so that circular-progress remains aligned with our icons
  // we shouldn't change it unless we change the default viewbox of the icons!
  const halfOfViewbox = viewboxDimension / 2;

  // line offset takes the width/thickness of the progress circle into account
  const lineOffset = Math.ceil(lineThickness / 2);

  return halfOfViewbox - lineOffset;
}
