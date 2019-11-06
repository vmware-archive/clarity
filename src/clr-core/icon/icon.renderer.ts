/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import { isString, transformToUnspacedString } from '@clr/core/common';
import { IconShapeCollection, IconShapeSources } from './interfaces/icon.interfaces';
import { decorateSvgWithClassnames, getIconSvgClosingTag, getIconSvgOpeningTag } from './utils/icon.svg-helpers';

export function renderIcon(shapeOrStringIcon: IconShapeCollection | string): string {
  if (isString(shapeOrStringIcon)) {
    return renderIconFromString(shapeOrStringIcon as string);
  }
  return renderIconFromShapes(shapeOrStringIcon as IconShapeSources);
}

export function renderIconFromShapes(icon: IconShapeSources): string {
  let iconRender = [getIconSvgOpeningTag];
  iconRender = iconRender.concat(getInnerSvgFromShapes(icon));
  iconRender.push(getIconSvgClosingTag);
  return transformToUnspacedString(iconRender, icon);
}

// keeping this for separation of concerns and also so we have a place to do
// proper string manipulation in the (near?) future
export function renderIconFromString(icon: string): string {
  return icon;
}

export function getInnerSvgFromShapes(iconShapes: IconShapeSources) {
  const renderFns = [];
  for (const shape in iconShapes) {
    if (iconShapes.hasOwnProperty(shape)) {
      renderFns.push(() => decorateSvgWithClassnames(shape, <string>iconShapes[shape]));
    }
  }
  return renderFns;
}
