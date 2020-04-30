/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isString, transformToUnspacedString } from '@clr/core/internal';
import { IconShapeCollection, IconShapeSources } from './interfaces/icon.interfaces.js';
import { decorateSvgWithClassnames, getIconSvgClosingTag, getIconSvgOpeningTag } from './utils/icon.svg-helpers.js';

export function getInnerSvgFromShapes(iconShapes: IconShapeSources) {
  const renderFns = [];
  for (const shape in iconShapes) {
    // eslint-disable-next-line no-prototype-builtins
    if (iconShapes.hasOwnProperty(shape)) {
      renderFns.push(() => decorateSvgWithClassnames(shape, iconShapes[shape] as string));
    }
  }
  return renderFns;
}

// keeping this for separation of concerns and also so we have a place to do
// proper string manipulation in the (near?) future
export function renderIconFromString(icon: string): string {
  return icon;
}

export function renderIconFromShapes(icon: IconShapeSources): string {
  let iconRender = [getIconSvgOpeningTag];
  iconRender = iconRender.concat(getInnerSvgFromShapes(icon));
  iconRender.push(getIconSvgClosingTag);
  return transformToUnspacedString(iconRender, icon);
}

export function renderIcon(shapeOrStringIcon: IconShapeCollection | string): string {
  if (isString(shapeOrStringIcon)) {
    return renderIconFromString(shapeOrStringIcon as string);
  }
  return renderIconFromShapes(shapeOrStringIcon as IconShapeSources);
}
