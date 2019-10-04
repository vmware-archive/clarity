/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ClrPopoverPosition } from './interfaces/popover-position.interface';
import { ClrAxis } from './enums/axis.enum';
import { ClrSide } from './enums/side.enum';
import { ClrAlignment } from './enums/alignment.enum';
import {
  align,
  flipAxis,
  flipSides,
  flipSidesAndNudgeContent,
  nudgeContent,
  testVisibility,
  positionsEqual,
  posiblePositionsAsStrings,
  findPositionString,
  findPositionObject,
  validPosition,
} from './position-operators';
import { ClrPopoverContentOffset } from './interfaces/popover-content-offset.interface';
import { ClrViewportViolation } from './enums/viewport-violation.enum';

export const TEST_VERSION_OF_SIMPLE_TO_SMART_POSITIONS: { [input: string]: ClrPopoverPosition } = {
  'top-left': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.END,
  },
  'top-middle': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  },
  'top-right': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.START,
  },
  'right-top': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.END,
  },
  'right-middle': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  },
  'right-bottom': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.START,
  },
  'bottom-right': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.START,
  },
  'bottom-middle': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  },
  'bottom-left': {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.END,
  },
  'left-bottom': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.START,
  },
  'left-middle': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  },
  'left-top': {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.END,
  },
};

export function ClrPositionHelperSpec(): void {
  describe('ClrPosition helper functions', () => {
    it('should return array of posible positions', () => {
      expect(posiblePositionsAsStrings()).toEqual(Object.keys(TEST_VERSION_OF_SIMPLE_TO_SMART_POSITIONS));
    });

    it('should let you find position object by passing string names', () => {
      posiblePositionsAsStrings().forEach(position => {
        expect(findPositionObject(position)).toEqual(TEST_VERSION_OF_SIMPLE_TO_SMART_POSITIONS[position]);
      });

      expect(findPositionObject('NOT_VALID_NAME')).toEqual(null);
    });

    it('should find string name of position by passing position object', () => {
      posiblePositionsAsStrings().forEach(position => {
        expect(position).toBe(findPositionString(TEST_VERSION_OF_SIMPLE_TO_SMART_POSITIONS[position]));
      });

      // Not a valid position
      expect(findPositionString({ axis: -5, side: -5, anchor: -5, content: -5 })).toBe(null);
    });

    it('should check that the position is valid', () => {
      // test all known position keys that we want and expect to have
      const positionKeys = Object.keys(TEST_VERSION_OF_SIMPLE_TO_SMART_POSITIONS);

      positionKeys.forEach(positionKey => {
        expect(validPosition(positionKey)).toBe(true);
      });
      // But make sure that it won't work for made up name
      expect(validPosition('NOT_VALID_NAME')).toBe(false);
    });

    it("should compare two position and return false if they don't match", () => {
      // order is not tehe same
      expect(
        positionsEqual({ side: 1, axis: 0, anchor: 0.5, content: 0 }, { side: 1, anchor: 0.5, content: 0, axis: 0 })
      ).toBe(true);

      // `side` & `axis` are not the same - check for more than one prop
      expect(
        positionsEqual({ content: 0, axis: 1, side: 1, anchor: 0.5 }, { axis: 0, anchor: 0.5, side: -1, content: 0 })
      ).toBe(false);

      // null as position
      expect(positionsEqual({ side: 1, axis: 0, anchor: 0.5, content: 0 }, null)).toBe(false);
      expect(positionsEqual(null, { side: 1, axis: 0, anchor: 0.5, content: 0 })).toBe(false);

      // undefined as position
      expect(positionsEqual({ side: 1, axis: 0, anchor: 0.5, content: 0 }, undefined)).toBe(false);
      expect(positionsEqual(undefined, { side: 1, axis: 0, anchor: 0.5, content: 0 })).toBe(false);

      // no need to test for array, number, string - expect TypeScript to prevent it.
    });
  });
}

export function ClrPositionTransformSpec(): void {
  describe('Transorm Function', () => {
    let position: ClrPopoverPosition;
    beforeEach(function() {
      position = {
        anchor: ClrAlignment.START,
        axis: ClrAxis.HORIZONTAL,
        content: ClrAlignment.START,
        side: ClrSide.BEFORE,
      };
    });
    describe('flipSides', () => {
      it('transforms a ClrPopoverPosition.side into the opposite ClrSide', () => {
        position = flipSides(position);
        expect(position.side).toBe(ClrSide.AFTER);
        position = flipSides(position);
        expect(position.side).toBe(ClrSide.BEFORE);
      });
    });
    describe('flipAxis', () => {
      it('transforms ClrPopoverPosition.axis into the opposite ClrAxis', () => {
        position = flipAxis(position);
        expect(position.axis).toBe(ClrAxis.VERTICAL);
        position = flipAxis(position);
        expect(position.axis).toBe(ClrAxis.HORIZONTAL);
      });
    });
    describe('nudgeContent', () => {
      it('transforms a ClrPopoverPosition.content alignment forward from start to middle', () => {
        position = nudgeContent(position, true);
        expect(position.content).toBe(ClrAlignment.CENTER);
      });
      it('transforms the content alignment forward from center to end', () => {
        position.content = ClrAlignment.CENTER;
        position = nudgeContent(position, true);
        expect(position.content).toBe(ClrAlignment.END);
      });
      it('does not transform the content alignment forward when ClrAlignment.END', () => {
        position.content = ClrAlignment.END;
        position = nudgeContent(position, true);
        expect(position.content).toBe(ClrAlignment.END);
      });
      it('does not transform the content alignment backwards when ClrAlignment.START', () => {
        expect(position.content).toBe(ClrAlignment.START);
        position = nudgeContent(position);
        expect(position.content).toBe(ClrAlignment.START);
      });
      it('transforms the content alignment backwards from center to start', () => {
        position.content = ClrAlignment.CENTER;
        position = nudgeContent(position);
        expect(position.content).toBe(ClrAlignment.START);
      });
      it('transforms the content alignment backwards from end to center', () => {
        position.content = ClrAlignment.END;
        position = nudgeContent(position);
        expect(position.content).toBe(ClrAlignment.CENTER);
      });
    });
    describe('flipSidesAndNudgeContent', () => {
      it('should compose a function that performs two transforms on a ClrPosition', () => {
        const flipSidesAndNudgeRight = flipSidesAndNudgeContent(flipSides, nudgeContent, true);
        expect(typeof flipSidesAndNudgeRight).toBe('function');

        // position has horizontal (pushing) axis and starts at side=BEFORE, content alignment=START
        position = flipSidesAndNudgeRight(position);
        expect(position.content).toBe(ClrAlignment.CENTER);
        expect(position.side).toBe(ClrSide.AFTER);
      });
    });
  });
}

export function ClrAlignmentSpec(): void {
  describe('align function', () => {
    positionTestCases.forEach(testCase => {
      it(`should calculate offsets for ClrPopoverPosition: \n{\n${testCase.name}`, function() {
        let testOffsets: ClrPopoverContentOffset;
        testOffsets = align(testCase.position, testAnchorRect, testContentRect);
        expect(testOffsets).toEqual(testCase.expectedOffsets);
      });
    });
  });
}

export function ClrViewportValidationSpec() {
  describe('testVisability function', () => {
    // Remember the default browser size
    const originalWindowSize = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
    beforeEach(() => {
      // resize the browser for this suite
      (<any>window).innerHeight = 600;
      (<any>window).innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });
    afterEach(() => {
      // Put the browser size back to its original
      (<any>window).innerHeight = originalWindowSize.innerHeight;
      (<any>window).innerWidth = originalWindowSize.innerWidth;
      window.dispatchEvent(new Event('resize'));
    });
    describe('Single violations', () => {
      it('should identify top window violations', () => {
        // make content rect very tall for a TOP violation
        const tallContentRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 200,
        };
        // Place content centered above the anchor
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, tallContentRect);
        const errors = testVisibility(testOffset, tallContentRect);
        expect(errors.length).toEqual(1);
        expect(errors[0]).toBe(ClrViewportViolation.TOP);
      });
      it('should identify left window violations', () => {
        const wideContentRect: ClientRect = {
          bottom: 400,
          height: 100,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on left side of anchor and right side of content
        const clrPopover = {
          anchor: ClrAlignment.START,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.END,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, wideContentRect);
        const errors = testVisibility(testOffset, wideContentRect);
        expect(errors.length).toEqual(1);
        expect(errors[0]).toBe(ClrViewportViolation.LEFT);
      });
      it('should identify bottom window violations', () => {
        // make content rect very tall for a BOTTOM violation
        const tallContentRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 200,
        };
        // Place content centered below the anchor
        const centeredPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        const testOffset = align(centeredPopover, testAnchorRect, tallContentRect);
        const errors = testVisibility(testOffset, tallContentRect);
        expect(errors.length).toEqual(1);
        expect(errors[0]).toBe(ClrViewportViolation.BOTTOM);
      });
      it('should identify right window violations', () => {
        const wideContentRect: ClientRect = {
          bottom: 400,
          height: 100,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.END,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.START,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, wideContentRect);
        const errors = testVisibility(testOffset, wideContentRect);
        expect(errors.length).toEqual(1);
        expect(errors[0]).toBe(ClrViewportViolation.RIGHT);
      });
    });
    describe('Double violations', () => {
      it('should identify top+left violations', () => {
        const topLeftRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.START,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.END,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, topLeftRect);
        const errors = testVisibility(testOffset, topLeftRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.LEFT);
        expect(errors).toContain(ClrViewportViolation.TOP);
      });
      it('should identify top+right violations', () => {
        const topRightRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.END,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.START,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, topRightRect);
        const errors = testVisibility(testOffset, topRightRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
        expect(errors).toContain(ClrViewportViolation.TOP);
      });
      it('should identify bottom+left violations', () => {
        const bottomLeftRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.START,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.END,
          side: ClrSide.AFTER,
        };
        const testOffset = align(clrPopover, testAnchorRect, bottomLeftRect);
        const errors = testVisibility(testOffset, bottomLeftRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.LEFT);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
      });
      it('should identify bottom+right violations', () => {
        const bottomRightRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 500,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.END,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.START,
          side: ClrSide.AFTER,
        };
        const testOffset = align(clrPopover, testAnchorRect, bottomRightRect);
        const errors = testVisibility(testOffset, bottomRightRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
      });
      it('should identify top+bottom violations', () => {
        const bottomTopRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 100,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.HORIZONTAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        const testOffset = align(clrPopover, testAnchorRect, bottomTopRect);
        const errors = testVisibility(testOffset, bottomTopRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.TOP);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
      });
      it('should identify left+right violations', () => {
        const leftRightRect: ClientRect = {
          bottom: 400,
          height: 100,
          left: 300,
          right: 400,
          top: 300,
          width: 1000,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, leftRightRect);
        const errors = testVisibility(testOffset, leftRightRect);
        expect(errors.length).toEqual(2);
        expect(errors).toContain(ClrViewportViolation.LEFT);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
      });
    });
    describe('Triple violations', () => {
      it('should identify left+top+right violations', () => {
        const leftRightRect: ClientRect = {
          bottom: 400,
          height: 600,
          left: 300,
          right: 400,
          top: 300,
          width: 1000,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, leftRightRect);
        const errors = testVisibility(testOffset, leftRightRect);
        expect(errors.length).toEqual(3);
        expect(errors).toContain(ClrViewportViolation.LEFT);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
        expect(errors).toContain(ClrViewportViolation.TOP);
      });
      it('should identify top+right+bottom violations', () => {
        const topRightBottomRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 1000,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.HORIZONTAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        const testOffset = align(clrPopover, testAnchorRect, topRightBottomRect);
        const errors = testVisibility(testOffset, topRightBottomRect);
        expect(errors.length).toEqual(3);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
        expect(errors).toContain(ClrViewportViolation.TOP);
      });
      it('should identify right+bottom+left violations', () => {
        const rightBottomLeftRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 1000,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.VERTICAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        const testOffset = align(clrPopover, testAnchorRect, rightBottomLeftRect);
        const errors = testVisibility(testOffset, rightBottomLeftRect);
        expect(errors.length).toEqual(3);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
        expect(errors).toContain(ClrViewportViolation.RIGHT);
        expect(errors).toContain(ClrViewportViolation.LEFT);
      });
      it('should identify bottom+left+top violations', () => {
        const bottomLeftTopRect: ClientRect = {
          bottom: 400,
          height: 1000,
          left: 300,
          right: 400,
          top: 300,
          width: 1000,
        };
        // Place content on right side of anchor and left side of content
        const clrPopover = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.HORIZONTAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.BEFORE,
        };
        const testOffset = align(clrPopover, testAnchorRect, bottomLeftTopRect);
        const errors = testVisibility(testOffset, bottomLeftTopRect);
        expect(errors.length).toEqual(3);
        expect(errors).toContain(ClrViewportViolation.BOTTOM);
        expect(errors).toContain(ClrViewportViolation.TOP);
        expect(errors).toContain(ClrViewportViolation.LEFT);
      });
    });
  });
}

// Do not change these three consts, they are tightly coupled with the tests for alignment and visibility functions
// and independently calculated each of the expectedOffsets. Not sure if there is a better way to test this type of
// positioning code.
const testAnchorRect: ClientRect = {
  bottom: 400,
  height: 100,
  left: 300,
  right: 400,
  top: 300,
  width: 200,
};
const testContentRect: ClientRect = {
  bottom: 400,
  height: 100,
  left: 300,
  right: 400,
  top: 300,
  width: 200,
};
const positionTestCases = [
  // axis: VERTICAL side: BEFORE
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 200,
    },
  }, // anchor: START, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 200,
      yOffset: 200,
    },
  }, // anchor: START, content: CENTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 200,
    },
  }, // anchor: START, content: END
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 400,
      yOffset: 200,
    },
  }, // anchor: CENTER, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 200,
    },
  }, // anchor: CENTER, content: CENTER,
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 200,
      yOffset: 200,
    },
  }, // anchor: CENTER, content: END
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 200,
    },
  }, // anchor: END, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 400,
      yOffset: 200,
    },
  }, // anchor: END, content: CENTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 200,
    },
  }, // anchor: END, content: END
  // axis: VERTICAL, side: AFTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 400,
    },
  }, // anchor: START, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 200,
      yOffset: 400,
    },
  }, // anchor: START, content: CENTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 400,
    },
  }, // anchor: START, content: END
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 400,
      yOffset: 400,
    },
  }, // anchor: CENTER, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 400,
    },
  }, // anchor: CENTER, content: CENTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 200,
      yOffset: 400,
    },
  }, // anchor: CENTER, content: END
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.START,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 400,
    },
  }, // anchor: END, content: START
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 400,
      yOffset: 400,
    },
  }, // anchor: END, content: CENTER
  {
    name:
      '  axis: CLrAxis.VERTICAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.END,
      axis: ClrAxis.VERTICAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 300,
      yOffset: 400,
    },
  }, // anchor: END, content: END
  // axis: HORIZONTAL side: BEFORE
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 300,
    },
  }, // anchor: START, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 250,
    },
  }, // anchor: START, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 200,
    },
  }, // anchor: START, content: END
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 350,
    },
  }, // anchor: CENTER, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 300,
    },
  }, // anchor: CENTER, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 250,
    },
  }, // anchor: CENTER, content: END
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 400,
    },
  }, // anchor: END, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 350,
    },
  }, // anchor: END, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.BEFORE \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.BEFORE,
    },
    expectedOffsets: {
      xOffset: 100,
      yOffset: 300,
    },
  }, // anchor END, content: END
  // axis: HORIZONTAL side: AFTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 300,
    },
  }, // anchor: START, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 250,
    },
  }, // anchor: START, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.START \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.START,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 200,
    },
  }, // anchor: START, content: END
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 350,
    },
  }, // anchor: CENTER, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 300,
    },
  }, // anchor: CENTER, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.CENTER \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.CENTER,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 250,
    },
  }, // anchor: CENTER, content: END
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.START\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.START,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 400,
    },
  }, // anchor: END, content: START
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.CENTER\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.CENTER,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 350,
    },
  }, // anchor: END, content: CENTER
  {
    name:
      '  axis: CLrAxis.HORIZONTAL \n  side: ClrSide.AFTER \n  anchor: ClrAlignment.END \n  content:' +
      ' ClrAlignment.END\n}',
    position: {
      anchor: ClrAlignment.END,
      content: ClrAlignment.END,
      axis: ClrAxis.HORIZONTAL,
      side: ClrSide.AFTER,
    },
    expectedOffsets: {
      xOffset: 500,
      yOffset: 300,
    },
  }, // anchor END, content: END
];
