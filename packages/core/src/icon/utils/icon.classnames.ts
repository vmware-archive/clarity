/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isTshirtSize, transformToSpacedString, updateElementStyles } from '@cds/core/internal';
import isNil from 'ramda/es/isNil';
import { CdsIcon } from '../icon.element.js';
import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import { iconHasAlertedShapes, iconHasBadgedShapes, iconHasSolidShapes } from './icon.has-shape.js';

export const enum IconSvgClassnames {
  Badged = 'can-badge',
  Alerted = 'can-alert',
  Solid = 'has-solid',
}

export const enum IconDecorationClassnames {
  Badge = 'clr-i-badge',
  Alert = 'clr-i-alert',
}

export const enum IconShapeClassnames {
  Outline = 'outline',
  Solid = 'solid',
  OutlineBadged = 'outline--badged',
  OutlineAlerted = 'outline--alerted',
  SolidBadged = 'solid--badged',
  SolidAlerted = 'solid--alerted',
}

export function getShapeClassname(shapeType: string) {
  const classNamePrefix = 'clr-i-';
  let className: string;

  switch (shapeType) {
    case 'solid':
      className = `${classNamePrefix}${IconShapeClassnames.Solid}`;
      break;
    case 'outlineBadged':
      className = `${classNamePrefix}${IconShapeClassnames.OutlineBadged}`;
      break;
    case 'outlineAlerted':
      className = `${classNamePrefix}${IconShapeClassnames.OutlineAlerted}`;
      break;
    case 'solidBadged':
      className = `${classNamePrefix}${IconShapeClassnames.SolidBadged}`;
      break;
    case 'solidAlerted':
      className = `${classNamePrefix}${IconShapeClassnames.SolidAlerted}`;
      break;
    default:
      className = `${classNamePrefix}${IconShapeClassnames.Outline}`;
      break;
  }

  return className;
}

export function getIconSvgClasses(icon: IconShapeCollection): string {
  const testSolid = (i: IconShapeCollection) => (iconHasSolidShapes(i) ? IconSvgClassnames.Solid : '');
  const testBadged = (i: IconShapeCollection) => (iconHasBadgedShapes(i) ? IconSvgClassnames.Badged : '');
  const testAlerted = (i: IconShapeCollection) => (iconHasAlertedShapes(i) ? IconSvgClassnames.Alerted : '');
  const tests = [testSolid, testBadged, testAlerted];
  return transformToSpacedString(tests, icon);
}

export const enum SizeUpdateStrategies {
  BadSizeValue = 'bad-value',
  ValidSizeString = 'value-is-string',
  ValidNumericString = 'value-is-numeric',
  NilSizeValue = 'value-is-nil',
}

export function getUpdateSizeStrategy(size: string) {
  if (isNil(size) || size === '') {
    return SizeUpdateStrategies.NilSizeValue;
  }

  if (isTshirtSize(size)) {
    return SizeUpdateStrategies.ValidSizeString;
  }

  if (!isNaN(parseInt(size, 10))) {
    return SizeUpdateStrategies.ValidNumericString;
  }

  return SizeUpdateStrategies.BadSizeValue;
}

export function updateIconSizeStyle(el: CdsIcon, size: string) {
  const updateStrategy = getUpdateSizeStrategy(size);

  switch (updateStrategy) {
    case SizeUpdateStrategies.ValidNumericString:
      updateElementStyles(el, ['width', `${size}px`], ['height', `${size}px`]);
      return;
    case SizeUpdateStrategies.ValidSizeString:
      updateElementStyles(el, ['width', ''], ['height', '']);
      return;
    case SizeUpdateStrategies.NilSizeValue: // nil values empty out all sizing
      updateElementStyles(el, ['width', ''], ['height', '']);
      return;
    case SizeUpdateStrategies.BadSizeValue:
      // bad-value is ignored
      return;
    default:
      return;
  }
}
