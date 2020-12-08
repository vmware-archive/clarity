/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsIcon } from '../icon.element.js';
import { ClarityIcons } from '../icon.service.js';
import { IconShapeCollection } from '../interfaces/icon.interfaces.js';

export function hasAlertBadge(icon: CdsIcon) {
  return icon.badge && (icon.badge === 'inherit-triangle' || icon.badge === 'warning-triangle');
}

export function getIconBadgeSVG(icon: CdsIcon) {
  let badge = '';

  if (icon.badge && hasAlertBadge(icon)) {
    badge =
      '<path d="M26.85 1.14L21.13 11a1.28 1.28 0 001.1 2h11.45a1.28 1.28 0 001.1-2l-5.72-9.86a1.28 1.28 0 00-2.21 0z" class="alert" />';
  } else if (icon.badge) {
    badge = '<circle cx="30" cy="6" r="5" class="badge" />';
  }

  return badge;
}

export function getIconSVG(icon: CdsIcon) {
  const iconShape = (ClarityIcons.registry[icon.shape] ?? ClarityIcons.registry['unknown']) as IconShapeCollection;
  let shape = icon.solid && iconShape.solid ? iconShape.solid : iconShape.outline;

  if (icon.badge && !hasAlertBadge(icon)) {
    shape = icon.solid ? iconShape.solidBadged ?? shape : iconShape.outlineBadged ?? shape;
  }

  if (hasAlertBadge(icon)) {
    shape = icon.solid ? iconShape.solidAlerted ?? shape : iconShape.outlineAlerted ?? shape;
  }

  return shape;
}
