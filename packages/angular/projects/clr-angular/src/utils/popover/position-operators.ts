/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ClrPopoverPosition } from './interfaces/popover-position.interface';
import { ClrPopoverContentOffset } from './interfaces/popover-content-offset.interface';
import { ClrViewportViolation } from './enums/viewport-violation.enum';
import { ClrVisibilityCoords } from './interfaces/visibility-coords.interface';
import { ClrAlignment } from './enums/alignment.enum';

// Put the forward arg here but it is only needed when nudging content or anchors.
export type ClrTransform = (position: ClrPopoverPosition, back?: boolean) => ClrPopoverPosition;

export const flipSides: ClrTransform = position => {
  return {
    ...position,
    side: -1 * position.side,
  };
};

// This could be used in more advanced positioning algorithms.
// flipAxisFlipSideAndNudgeContent(flipAxis, flipSide, nudge, nudgeForward?): ClrTransform {...}
// I would like to keep it for now.
export const flipAxis: ClrTransform = position => {
  return {
    ...position,
    axis: position.axis === 0 ? 1 : 0,
  };
};

export const nudgeContent: ClrTransform = (position, forward) => {
  const nextAlignment = position.content + (forward ? 0.5 : -0.5);
  if (nextAlignment < 0 || nextAlignment > 1) {
    return position;
  } else {
    return {
      ...position,
      content: nextAlignment,
    };
  }
};

export function flipSidesAndNudgeContent(flip: ClrTransform, nudge: ClrTransform, nudgeBack?: boolean): ClrTransform {
  return (position: ClrPopoverPosition): ClrPopoverPosition => nudge(flip(position), nudgeBack);
}

export function align(position: ClrPopoverPosition, anchor: ClientRect, content: ClientRect): ClrPopoverContentOffset {
  let xDiff = anchor.left;
  let yDiff = anchor.top;

  // When ClrAxis is VERTICAL BEFORE = left, AFTER = right
  // When ClrAxis is HORIZONTAL BEFORE is top, AFTER is bottom
  switch (position.axis + position.side) {
    case -1: {
      // ClrAxis.VERTICAL + ClrSide.BEFORE
      xDiff += alignHorizontal(position, anchor, content);
      yDiff -= content.height; // pull content up to the top of the anchor
      break;
    }
    case 1: {
      // ClrAxis.VERTICAL + ClrSide.AFTER
      xDiff += alignHorizontal(position, anchor, content);
      yDiff += anchor.height; // push the content down to below the anchor
      break;
    }
    case 0: {
      // ClrAxis.HORIZONTAL + ClrSide.BEFORE
      xDiff -= content.width; // pull the content left of the anchor
      yDiff += alignVertical(position, anchor, content);
      break;
    }
    case 2: {
      // ClrAxis.HORIZONTAL + ClrSide.AFTER
      xDiff += anchor.width; // push the content right of of the anchor
      yDiff += alignVertical(position, anchor, content);
      break;
    }
    default: {
      break;
    }
  }
  return { xOffset: xDiff, yOffset: yDiff };
}

function alignHorizontal(position: ClrPopoverPosition, anchor: ClientRect, content: ClientRect): number {
  let horizontalOffset = 0;
  // horizontal offset for the anchor position
  switch (position.anchor /*calculate for the anchor alignment*/) {
    case ClrAlignment.START: {
      // nothing to calculate here
      break;
    }
    case ClrAlignment.CENTER: {
      horizontalOffset += anchor.width / 2; // push content over 1/2 anchor width
      break;
    }
    case ClrAlignment.END: {
      horizontalOffset += anchor.width; //  push content over width of the anchor
      break;
    }
    default: {
      break;
    }
  }

  // horizontal offsets for anchor alignment
  switch (
    position.content // calculate for the content alignment
  ) {
    case ClrAlignment.START: {
      // Nothing to calculate here
      break;
    }
    case ClrAlignment.CENTER: {
      horizontalOffset -= content.width / 2; // pull content left by a value of 1/2 content width
      break;
    }
    case ClrAlignment.END: {
      // subtract the width of currentContent from horizontalOffset to pull it back
      horizontalOffset -= content.width;
      break;
    }
    default: {
      break;
    }
  }

  return horizontalOffset;
}

function alignVertical(position: ClrPopoverPosition, anchor: ClientRect, content: ClientRect): number {
  // y axis offsets for anchor alignment
  let verticalOffset = 0;

  // Calculate y offset for anchor position
  switch (position.anchor) {
    case ClrAlignment.START: {
      // nothing to calculate here
      break;
    }
    case ClrAlignment.CENTER: {
      verticalOffset += anchor.height / 2; // push content down to the middle of the anchor rect
      break;
    }
    case ClrAlignment.END: {
      verticalOffset += anchor.height; // push content down to the bottom of the anchor
      break;
    }
    default: {
      break;
    }
  }

  // Calculate y offsets for content alignment
  switch (position.content) {
    case ClrAlignment.START: {
      // aligned to the top of the content rect
      break;
    }
    case ClrAlignment.CENTER: {
      verticalOffset -= content.height / 2; // pull content back up to the middle of the content rect
      break;
    }
    case ClrAlignment.END: {
      verticalOffset -= content.height; // pull content back up to the bottom of the content rect
      break;
    }
    default: {
      break;
    }
  }
  return verticalOffset;
}

export function testVisibility(offset: ClrPopoverContentOffset, content: ClientRect): ClrViewportViolation[] {
  const violations: ClrViewportViolation[] = [];
  const mockCoords: ClrVisibilityCoords = {
    bottom: offset.yOffset + content.height,
    left: offset.xOffset,
    right: offset.xOffset + content.width,
    top: offset.yOffset,
  };

  if (!(mockCoords.top >= 0)) {
    violations.push(ClrViewportViolation.TOP);
  }
  if (!(mockCoords.left >= 0)) {
    violations.push(ClrViewportViolation.LEFT);
  }
  if (!(mockCoords.bottom <= (window.innerHeight || document.documentElement.clientHeight))) {
    violations.push(ClrViewportViolation.BOTTOM);
  }
  if (!(mockCoords.right <= (window.innerWidth || document.documentElement.clientWidth))) {
    violations.push(ClrViewportViolation.RIGHT);
  }

  return violations;
}
