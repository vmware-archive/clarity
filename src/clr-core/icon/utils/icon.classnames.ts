/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getEnumValues, transformToSpacedString } from '@clr/core/common';
import ifElse from 'ramda/es/ifElse';
import { CwcIcon } from '../icon.element';
import { IconShapeCollection } from '../interfaces/icon.interfaces';
import { iconHasAlertedShapes, iconHasBadgedShapes, iconHasSolidShapes } from './icon.has-shape';

export enum IconSvgClassnames {
  Badged = 'can-badge',
  Alerted = 'can-alert',
  Solid = 'has-solid',
}

export enum IconDecorationClassnames {
  Badge = 'clr-i-badge',
  Alert = 'clr-i-alert',
}

export enum IconShapeClassnames {
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

// testme
export const updateIconSizeStyleOrClassnames = ifElse(
  (el: CwcIcon, size: string) => {
    // have to call el here to keep TS happy...
    return el && !isNaN(parseInt(size, 10));
  },
  (el: CwcIcon, size: string) => {
    el.addEquilateralStyles(size + 'px');
    el.removeClassnames(getAllIconTshirtSizeClassnames());
  },
  (el: CwcIcon, size: string) => {
    let newTshirtSize;
    if (isIconTshirtSizeClassname(size)) {
      newTshirtSize = getIconTshirtSizeClassname(size);
      el.addClassname(newTshirtSize);
      el.removeClassnamesUnless(getAllIconTshirtSizeClassnames(), [newTshirtSize]);
      el.removeEquilateralStyles();
    }
  }
);

enum IconTshirtSizes {
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
  ExtraExtraLarge = 'xxl',
}

const iconTshirtSizeClassnamePrefix = 'clr-i-size-';

// testme
export function getIconTshirtSizeClassname(
  sizeToLookup: string,
  prefix = iconTshirtSizeClassnamePrefix,
  sizes = IconTshirtSizes
): string {
  const tshirtSizesVals = getEnumValues(sizes);
  const indexOfSize = tshirtSizesVals.indexOf(sizeToLookup);
  if (indexOfSize > -1) {
    return prefix + tshirtSizesVals[indexOfSize];
  }
  return '';
}

// testme
export function getAllIconTshirtSizeClassnames(prefix = iconTshirtSizeClassnamePrefix, sizes = IconTshirtSizes) {
  return getEnumValues(sizes).map((sz: string) => prefix + sz);
}

// testme
export function isIconTshirtSizeClassname(classname: string, sizes = IconTshirtSizes) {
  return getEnumValues(sizes).indexOf(classname) > -1;
}
