/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import { getIconSvgClasses, getShapeClassname, IconDecorationClassnames } from './icon.classnames.js';

export function getBadgeSvg(shapeClassname: string) {
  return [
    '<circle cx="30" cy="6" r="5"  class="',
    [shapeClassname, IconDecorationClassnames.Badge].join(' '),
    '" />',
  ].join('');
}

export function getAlertSvg(shapeClassname: string) {
  return [
    '<path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="',
    [shapeClassname, IconDecorationClassnames.Alert].join(' '),
    '"/>',
  ].join('');
}

export function decorateSvgWithClassnames(shapeName: string, shapeSvg: string) {
  const shapeClassname = getShapeClassname(shapeName);
  let transformedSvg = shapeSvg.split('/>').join(` class="${shapeClassname}"/>`);

  switch (shapeName) {
    case 'solidBadged':
    case 'outlineBadged':
      transformedSvg = transformedSvg.concat(getBadgeSvg(shapeClassname));
      break;
    case 'solidAlerted':
    case 'outlineAlerted':
      transformedSvg = transformedSvg.concat(getAlertSvg(shapeClassname));
      break;
    default:
      break;
  }
  return transformedSvg;
}

export function getIconSvgOpeningTag(icon: IconShapeCollection) {
  const iconSvgViewboxSize = 36;
  const iconSvgClasses = getIconSvgClasses(icon);

  return `<svg version="1.1" class="${iconSvgClasses}" viewBox="0 0 ${iconSvgViewboxSize} ${iconSvgViewboxSize}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img" aria-label="">`;
}

export function getIconSvgClosingTag(icon: IconShapeCollection): string {
  const makeTypescriptHappy = icon;
  return makeTypescriptHappy ? '</svg>' : '</svg>';
}
