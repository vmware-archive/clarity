/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AllCardinalPositionConfigs,
  AxisAligns,
  CardinalPositionConfig,
  CardinalPositions,
  PointerElement,
  PointerObj,
  PositionConfig,
  PositionObjOrNot,
  PositionObj,
  PositionableElement,
  Positions,
  WindowDims,
} from './interfaces.js';
import { capitalizeFirstLetter, removePrefix, transformSpacedStringToArray } from '../utils/string.js';
import { getWindowDimensions, setAttributes } from '../utils/dom.js';
import { isNil } from '../utils/identity.js';
import { getCssPropertyValue, updateElementStyles } from '../utils/css.js';
import { sumAndSubtract } from '../utils/math.js';
import { getEnumValueFromStringKey } from '../utils/enum.js';

export function getPopupOffsetOrDefaultOffsets(
  existingMainAxisOffset: number,
  existingCrossAxisOffset: number,
  pointer: PointerElement,
  pointerAlign: string,
  anchorAlign: string
): { mainAxisOffset: number; crossAxisOffset: number } {
  const returnObj = { mainAxisOffset: 0, crossAxisOffset: 0 };
  const isDefaultPointerType = pointer && pointer.type === 'default';

  if (!isNil(existingMainAxisOffset)) {
    returnObj.mainAxisOffset = existingMainAxisOffset;
  } else {
    if (isDefaultPointerType) {
      returnObj.mainAxisOffset = -10;
    }
  }

  if (!isNil(existingCrossAxisOffset)) {
    returnObj.crossAxisOffset = existingCrossAxisOffset;
  } else {
    if (isDefaultPointerType && pointerAlign === 'end' && anchorAlign === 'start') {
      returnObj.crossAxisOffset = -10;
    }
  }

  return returnObj;
}

export function setPopupPosition(component: PositionableElement) {
  // have to pre-emptively remove stealth attr so that measurements won't take responsive width/height
  // as the popup's actual width/height
  component.removeAttribute('responsive');

  const offsets = getPopupOffsetOrDefaultOffsets(
    component.mainAxisOffset,
    component.crossAxisOffset,
    component.pointer,
    component.pointerAlign,
    component.anchorAlign
  );

  const myPosition = getPopupPosition(
    component.orientation,
    component.anchorRect,
    component.anchorAlign,
    component.pointer,
    component.pointerAlign,
    component.contentWrapper,
    offsets.mainAxisOffset,
    offsets.crossAxisOffset
  );

  if (myPosition === (false as unknown)) {
    // have to manually set this here because the CSS needs it and the work needs to
    // happen outside of the update loop
    setAttributes(component, ['responsive', ''], ['_position-at', false]);
    updateElementStyles(component.hostWrapper, ['position', ''], ['top', ''], ['left', '']);
    updateElementStyles(component.pointerWrapper, ['visibility', 'hidden']);
  } else {
    if (component.pointer) {
      const positionedPointer = ((myPosition as unknown) as PositionObj).pointer;
      updateElementStyles(component.pointerWrapper, ['visibility', 'visible']);
      setAttributes(component, ['_pointer-type', component.pointer.type || false]);
      setAttributes(component, ['_position-at', (positionedPointer as PointerObj).location as string]);
    } else {
      updateElementStyles(component.pointerWrapper, ['visibility', 'hidden']);
      setAttributes(component, ['_position-at', false], ['_pointer-type', false]);
    }

    const posTop = ((myPosition as unknown) as PositionObj).popup.top + 'px';
    const posLeft = ((myPosition as unknown) as PositionObj).popup.left + 'px';
    updateElementStyles(component.hostWrapper, ['position', 'absolute'], ['top', posTop], ['left', posLeft]);
  }
}

type PositioningPreferencesTuple = [number[], number];

export function getOrientationTuple(orientationPrefs: string): PositioningPreferencesTuple {
  const preferredPositions: number[] = [];
  const deniedPositions: number[] = [];

  /* c8 ignore next */
  for (const userPref of transformSpacedStringToArray(orientationPrefs)) {
    if (userPref === 'none') {
      return [[], 0];
    } else if (userPref.indexOf('only:') > -1) {
      return [
        [getEnumValueFromStringKey(Positions, removePrefix(userPref, 'only:'), capitalizeFirstLetter) as number],
        0,
      ];
    } else if (userPref.indexOf('not:') > -1) {
      deniedPositions.push(
        getEnumValueFromStringKey(Positions, removePrefix(userPref, 'not:'), capitalizeFirstLetter) as number
      );
    } else {
      const positionVal = getEnumValueFromStringKey(Positions, userPref, capitalizeFirstLetter) as number;
      deniedPositions.push(positionVal);
      preferredPositions.push(positionVal);
    }
  }

  return [preferredPositions, sumAndSubtract(0, [Positions.All], deniedPositions)];
}

export function getCrossAxisOrderOfPreference(preference: string): number[] {
  switch (preference) {
    case 'mid':
      return [1, 0, 2];
    case 'end':
      return [2, 1, 0];
    case 'start':
    default:
      return [0, 1, 2];
  }
}

export function checkNextPosition(
  whichPosition: number,
  positions: PositionConfig,
  anchorAlignPref: string
): PositionObjOrNot {
  if (positions === false) {
    return false;
  }

  const positionToCheck = (positions as AllCardinalPositionConfigs)[
    Positions[whichPosition]?.toLowerCase()
  ] as CardinalPositionConfig;

  if (!positionToCheck) {
    return false;
  }

  const [startOfAnchor, middleOfAnchor, endOfAnchor] = positionToCheck;

  if (startOfAnchor === false && middleOfAnchor === false && endOfAnchor === false) {
    return false;
  }

  for (const i of getCrossAxisOrderOfPreference(anchorAlignPref)) {
    if (positionToCheck[i]) {
      return Object.assign({}, positionToCheck[i]);
    }
  }

  return false;
}

export function getNextDefaultPosition(currentPositionTotal: number): number[] {
  const defaults = [Positions.Bottom, Positions.Right, Positions.Left, Positions.Top, Positions.Responsive];

  for (const position of defaults) {
    if (currentPositionTotal >= position) {
      return [position, currentPositionTotal - position];
    }
  }

  return [0, 0];
}

export function getNextPosition(userPrefs: number[], prefTotal: number): [number, number[], number] {
  if (userPrefs.length < 1) {
    const [positionIndexToCheck, newPrefTotal] = getNextDefaultPosition(prefTotal);
    return [positionIndexToCheck, userPrefs, newPrefTotal];
  }

  return [userPrefs[0], userPrefs.slice(1), userPrefs[0] !== Positions.Responsive ? prefTotal : 0];
}

/* c8 ignore next */
export function getPointerPosition(workingPositionRelativeToAnchor: string): string {
  switch (workingPositionRelativeToAnchor.toLowerCase()) {
    case 'top':
      return 'popup-bottom';
    case 'bottom':
      return 'popup-top';
    case 'left':
      return 'popup-right';
    case 'right':
    default:
      return 'popup-left';
  }
}

export function getPointerAlignment(popupPosition: string, pointerAlign: string) {
  let myAligns: any;

  if (popupPosition === 'popup-bottom' || popupPosition === 'popup-top') {
    myAligns = { start: 'pointer-left', mid: 'pointer-center', end: 'pointer-right' };
  } else {
    myAligns = { start: 'pointer-top', mid: 'pointer-mid', end: 'pointer-bottom' };
  }

  return myAligns[pointerAlign];
}

export function getBestPositionForPreferences(
  positions: PositionConfig,
  preferences: PositioningPreferencesTuple,
  anchorAlignPref: string
): PositionObjOrNot {
  let [arrayOfUserPrefs, currentPrefTotal] = preferences;
  let returnPref: PositionObjOrNot | null = null;

  while (returnPref === null) {
    const [positionToCheck, newArrayOfUserPrefs, newCurrentPrefTotal] = getNextPosition(
      arrayOfUserPrefs,
      currentPrefTotal
    );
    const positionWillWork = checkNextPosition(positionToCheck, positions, anchorAlignPref);

    switch (true) {
      case positionWillWork !== false:
        returnPref = Object.assign({}, positionWillWork, {
          pointer: { location: getPointerPosition(Positions[positionToCheck]) },
        });
        break;
      case positionWillWork === false && newCurrentPrefTotal === 0:
        // tested all positions; none of them work
        returnPref = false;
        break;
      case positionWillWork === false:
        // this position won't work but there are more positions to check!
        arrayOfUserPrefs = newArrayOfUserPrefs;
        currentPrefTotal = newCurrentPrefTotal;
        break;
    }
  }

  return returnPref as PositionObjOrNot;
}

export function getPopupPosition(
  orientationPrefs: string,
  anchorRect: DOMRect,
  anchorAlign: AxisAligns,
  pointer: HTMLElement,
  pointerAlign: AxisAligns,
  popup: HTMLElement,
  mainAxisOffset: number,
  crossAxisOffset: number
): PositionObjOrNot {
  if (!anchorRect) {
    return false; // anchor does not exist; force responsive
  }

  // we have to use offsetHeight/Width here because the DOMRect shifts dimensions when the pointer is rotated
  // the caveat with using offsetHeight/Width is that the values are rounded to an integer
  // that does not seem to be a big risk, however, because these pointers are created by users.
  // if there is a rounding issue, it's likely because a rem sizing has something set to a fractional value
  // and any rounding error would likely be negligible in effect
  const pointerHeight = pointer ? pointer.offsetHeight : 0;
  const windowDims = getWindowDimensions();

  /* c8 ignore next 3 */
  if (windowDims.width <= parseInt(getCssPropertyValue('--cds-global-layout-width-xs-static'), 10)) {
    return false;
  }

  const positions = getPositions(
    anchorRect,
    pointerHeight,
    pointerAlign,
    popup.getBoundingClientRect(),
    windowDims,
    mainAxisOffset,
    crossAxisOffset
  );

  const myPosition = getBestPositionForPreferences(positions, getOrientationTuple(orientationPrefs), anchorAlign);

  if (myPosition === false) {
    return false;
  }

  const pointerLocationRelativeToAnchor = ((myPosition as PositionObj).pointer as PointerObj).location as string;
  const pointerLocation =
    pointerLocationRelativeToAnchor + ' ' + getPointerAlignment(pointerLocationRelativeToAnchor, pointerAlign);
  const pointerObj = { pointer: { size: pointerHeight, location: pointerLocation } };
  return Object.assign({}, myPosition, pointerObj);
}

export function getPositions(
  anchorRect: DOMRect,
  pointerHeight: number,
  pointerAlign: AxisAligns,
  popupRect: DOMRect,
  windowDims: WindowDims,
  mainAxisOffset: number,
  crossAxisOffset: number
): AllCardinalPositionConfigs {
  return {
    top: getPositionConfig(
      'top',
      pointerAlign,
      anchorRect,
      popupRect,
      pointerHeight,
      windowDims,
      mainAxisOffset,
      crossAxisOffset
    ),
    right: getPositionConfig(
      'right',
      pointerAlign,
      anchorRect,
      popupRect,
      pointerHeight,
      windowDims,
      mainAxisOffset,
      crossAxisOffset
    ),
    bottom: getPositionConfig(
      'bottom',
      pointerAlign,
      anchorRect,
      popupRect,
      pointerHeight,
      windowDims,
      mainAxisOffset,
      crossAxisOffset
    ),
    left: getPositionConfig(
      'left',
      pointerAlign,
      anchorRect,
      popupRect,
      pointerHeight,
      windowDims,
      mainAxisOffset,
      crossAxisOffset
    ),
  };
}

// TODO: convert arguments list to a config object?
export function getPositionConfig(
  cardinalPos: CardinalPositions,
  pointerAlign: AxisAligns,
  anchor: DOMRect,
  popup: DOMRect,
  pointerHeight: number,
  win: WindowDims,
  mainAxisOffset: number,
  crossAxisOffset: number
): false | CardinalPositionConfig {
  let mainAxisPosition: number | false;

  switch (cardinalPos) {
    case 'top':
      mainAxisPosition = getMainAxisPositionOrViolation(anchor.top, pointerHeight, popup.height, mainAxisOffset, 0);

      if (mainAxisPosition === false) {
        return false;
      } else {
        return getPositionOrViolationFromCrossAxis(
          anchor.left,
          anchor.width,
          popup.width,
          crossAxisOffset,
          0,
          win.width,
          pointerAlign
        ).map(
          (crossAxisPos): PositionObjOrNot => {
            if (crossAxisPos === false) {
              return false;
            } else {
              return {
                popup: {
                  top: mainAxisPosition as number,
                  left: crossAxisPos,
                },
              };
            }
          }
        );
      }
    case 'bottom':
      mainAxisPosition = getMainAxisPositionOrViolation(
        anchor.bottom,
        0, // pointer doesn't need to be in this calc
        popup.height,
        mainAxisOffset,
        win.height
      );

      if (mainAxisPosition === false) {
        return false;
      } else {
        return getPositionOrViolationFromCrossAxis(
          anchor.left,
          anchor.width,
          popup.width,
          crossAxisOffset,
          0,
          win.width,
          pointerAlign
        ).map(
          (crossAxisPos): PositionObjOrNot => {
            if (crossAxisPos === false) {
              return false;
            } else {
              return {
                popup: {
                  top: mainAxisPosition as number,
                  left: crossAxisPos,
                },
              };
            }
          }
        );
      }
    case 'left':
      mainAxisPosition = getMainAxisPositionOrViolation(anchor.left, pointerHeight, popup.width, mainAxisOffset, 0);

      if (mainAxisPosition === false) {
        return false;
      } else {
        return getPositionOrViolationFromCrossAxis(
          anchor.top,
          anchor.height,
          popup.height,
          crossAxisOffset,
          0,
          win.height,
          pointerAlign
        ).map(
          (crossAxisPos): PositionObjOrNot => {
            if (crossAxisPos === false) {
              return false;
            } else {
              return {
                popup: {
                  top: crossAxisPos,
                  left: mainAxisPosition as number,
                },
              };
            }
          }
        );
      }
    case 'right':
      mainAxisPosition = getMainAxisPositionOrViolation(
        anchor.right,
        0, // pointer doesn't need to be in this calc
        popup.width,
        mainAxisOffset,
        win.width
      );

      if (mainAxisPosition === false) {
        return false;
      } else {
        return getPositionOrViolationFromCrossAxis(
          anchor.top,
          anchor.height,
          popup.height,
          crossAxisOffset,
          0,
          win.height,
          pointerAlign
        ).map(
          (crossAxisPos): PositionObjOrNot => {
            if (crossAxisPos === false) {
              return false;
            } else {
              return {
                popup: {
                  top: crossAxisPos,
                  left: mainAxisPosition as number,
                },
              };
            }
          }
        );
      }
  }
}

type PositionOrViolation = false | number;

export function getMainAxisPosition(
  startPos: number,
  pointer: number,
  popup: number,
  offset: number,
  limit: number
): number {
  return limit === 0
    ? sumAndSubtract(startPos, [], [pointer, popup, offset])
    : sumAndSubtract(startPos, [pointer, popup, offset], []);
}

export function testMainAxisPosition(pos: number, startPos: number, limit: number): PositionOrViolation {
  if (limit === 0) {
    // -- for positions that *pull* (a.k.a top and left) --
    // if limit is zero, see if position is above zero and return it
    return pos > limit && pos;
  } else {
    // -- for positions that *push* (a.k.a. bottom and right)
    // if limit is not zero, position is the start + popup dimension;
    // return start position if position is less than the limit
    return pos < limit && startPos; // needs offsets!
  }
}

export function getCrossAxisPosition(
  position: AxisAligns,
  startPos: number,
  anchorAlign: number,
  anchorWidth: number,
  offset: number,
  popup = 0
): number {
  switch (position) {
    case 'mid':
      return startPos + anchorAlign * anchorWidth - 0.5 * popup + offset;
    case 'end':
      return startPos + anchorAlign * anchorWidth - offset;
    case 'start':
      return startPos + anchorAlign * anchorWidth + offset;
  }
}

export function testCrossAxisPosition(
  axisAlign: AxisAligns,
  position: number,
  popup: number,
  limit: [number, number]
): PositionOrViolation {
  const [limitMin, limitMax] = limit;

  switch (axisAlign) {
    case 'mid':
      return position > limitMin && position + popup < limitMax ? position : false;
    case 'end': {
      const pulledPosition = position - popup;
      return pulledPosition > limitMin ? pulledPosition : false;
    }
    case 'start':
      return position + popup < limitMax ? position : false;
  }
}
export function getPositionOrViolationFromCrossAxis(
  startPos: number,
  anchorLength: number,
  popupLength: number,
  offset: number,
  limitMinimum: number,
  limitMaximum: number,
  pointerPosition: AxisAligns
): PositionOrViolation[] {
  const anchorAlignments = [0, 0.5, 1];

  return anchorAlignments.map((anchorAlignment: number) => {
    return testCrossAxisPosition(
      pointerPosition,
      getCrossAxisPosition(pointerPosition, startPos, anchorAlignment, anchorLength, offset, popupLength),
      popupLength,
      [limitMinimum, limitMaximum]
    );
  });
}

export function getMainAxisPositionOrViolation(
  startPos: number,
  pointerLength: number,
  popupLength: number,
  offset: number,
  limit = 0
): false | number {
  return testMainAxisPosition(
    getMainAxisPosition(startPos, pointerLength, popupLength, offset, limit), // returned by *pull* positions
    startPos + offset, // only returned with *push* positions
    limit
  );
}
