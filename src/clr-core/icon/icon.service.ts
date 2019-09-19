/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { isNilOrEmpty, isObjectAndNotNilOrEmpty } from '@clr/core/common';
import {
  IconAlias,
  IconCollection,
  IconRegistrySources,
  IconShapeCollection,
  IconShapeSources,
  IconShapeTuple,
} from './interfaces/icon.interfaces';
import { unknownIcon } from './shapes/unknown';

import { addCollection, addIcon, addIcons, getIcon, hasIcon, legacyAlias } from './utils/icon.service-helpers';

const iconRegistry: IconRegistrySources = {
  unknown: unknownIcon[1] as string,
};

/**
 * ClarityIcons is a static class that gives users the ability to interact with
 * the icon registry. This includes capabilities to add, retrieve, or alias icons
 * in the registry.
 *
 * @privateRemarks
 *
 * The icon registry is private to the module. There is no way to access it directly
 * outside of the module.
 *
 */
// @dynamic
export class ClarityIcons {
  /**
   * registry() returns a clone of the icon registry, not the actual registry itself.
   * Performing actions on the return value of registry() will not be reflected in the
   * actual iconsRegistry
   *
   */
  static get registry() {
    return { ...iconRegistry };
  }

  static has(shapeName: string): boolean {
    return hasIcon(shapeName, iconRegistry);
  }

  static addIcon(shape: IconShapeTuple) {
    addIcon(shape, iconRegistry);
  }

  static addIcons(shapes: IconShapeTuple[]) {
    addIcons(shapes, iconRegistry);
  }

  /** Legacy API call that accepts shapes in dictionary/hash format. */
  static add(shapes: IconShapeSources) {
    for (const shapeName in shapes) {
      if (shapes.hasOwnProperty(shapeName)) {
        addIcon(<IconShapeTuple>[shapeName, shapes[shapeName]], iconRegistry);
      }
    }
  }

  static addCollection(collection: IconCollection) {
    addCollection(collection, iconRegistry);
  }

  /**
   * If passed no arguments, get() will return a clone of the icon registry.
   */
  static get(shapeName?: string): string | IconShapeCollection {
    if (isNilOrEmpty(shapeName)) {
      return { ...iconRegistry };
    }
    return getIcon(shapeName, iconRegistry);
  }

  static alias(aliases: IconAlias) {
    if (!isObjectAndNotNilOrEmpty(aliases)) {
      throw new Error(`The argument must be an object literal passed in the following pattern: 
                  { "shape-name": ["alias-name", ...] }`);
    }
    legacyAlias(aliases, iconRegistry);
  }
}
