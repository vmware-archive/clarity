/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { existsIn } from '@clr/core/internal';
import anyPass from 'ramda/es/anyPass';
import { IconShapeCollection } from '../interfaces/icon.interfaces.js';

export function iconHasBadgedShapes(icon: IconShapeCollection): boolean {
  const shapeIsBadged = anyPass([existsIn(['outlineBadged']), existsIn(['solidBadged'])]);
  return shapeIsBadged(icon);
}

export function iconHasAlertedShapes(icon: IconShapeCollection): boolean {
  const shapeIsAlerted = anyPass([existsIn(['outlineAlerted']), existsIn(['solidAlerted'])]);
  return shapeIsAlerted(icon);
}

export function iconHasSolidShapes(icon: IconShapeCollection): boolean {
  const shapeIsSolid = anyPass([existsIn(['solid']), existsIn(['solidBadged']), existsIn(['solidAlerted'])]);
  return shapeIsSolid(icon);
}
