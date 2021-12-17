/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export type WindowDims = { height: number; width: number };

export type PointerObj = { size?: number; location?: string };

export type PositionObj = {
  popup: { top: number; left: number };
  pointer?: PointerObj;
};

export type PositionObjOrNot = false | PositionObj;

export type CardinalPositionConfig = false | PositionObjOrNot[];

export type CardinalPositions = 'top' | 'right' | 'bottom' | 'left';

export type AxisAligns = 'start' | 'mid' | 'end';

export type AllCardinalPositionConfigs = {
  [index: string]: CardinalPositionConfig;
  top: CardinalPositionConfig;
  bottom: CardinalPositionConfig;
  left: CardinalPositionConfig;
  right: CardinalPositionConfig;
};

export type PositionConfig = false | AllCardinalPositionConfigs;

// ordered so the highest default priority has the largest integer. this allows for number sums to be
// followed downward without risk of preference knocking things out of whack.
export enum Positions {
  Responsive = 0,
  Top = 1,
  Left = 2,
  TopOrLeft = 3,
  Right = 4,
  TopOrRight = 5,
  Horizontal = 6,
  TopOrHorizontal = 7,
  Bottom = 8,
  Vertical = 9,
  BottomOrLeft = 10,
  VerticalOrLeft = 11,
  BottomOrRight = 12,
  VerticalOrRight = 13,
  BottomOrHorizontal = 14,
  All = 15,
}

export type PositionableElement = HTMLElement & {
  crossAxisOffset: number;
  mainAxisOffset: number;
  orientation: string;
  pointer: PointerElement;
  pointerAlign: AxisAligns;
  anchorAlign: AxisAligns;
  anchorRect: DOMRect;
  contentWrapper: HTMLElement;
  hostWrapper: HTMLElement;
  pointerWrapper: HTMLElement;
};

export type PointerElement = HTMLElement & {
  type: string;
  axisAlign: string;
};
