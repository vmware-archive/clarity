/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import {
  IconAlias,
  IconAliasLegacyObject,
  IconRegistry,
  IconShapeSources,
  IconShapeTuple,
} from './interfaces/icon.interfaces';
import { unknownIcon } from './shapes/unknown';

import { addIcon, addIcons, getIcon, legacyAlias, setIconAliases } from './utils/icon.service-helpers';

const iconRegistry: IconRegistry = {
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
   */
  static get registry(): IconRegistry {
    return { ...iconRegistry };
  }

  static addIcons(...shapes: IconShapeTuple[]) {
    addIcons(shapes, iconRegistry);
  }

  static addAliases(...aliases: IconAlias[]) {
    aliases.forEach(alias => setIconAliases(alias, iconRegistry));
  }

  /** @deprecated legacy API */
  static get(shapeName?: string): string | IconRegistry {
    return shapeName ? getIcon(shapeName, iconRegistry) : { ...iconRegistry };
  }

  /** @deprecated legacy API */
  static add(shapes: IconShapeSources) {
    for (const shapeName in shapes) {
      if (shapes.hasOwnProperty(shapeName)) {
        addIcon(<IconShapeTuple>[shapeName, shapes[shapeName]], iconRegistry);
      }
    }
  }

  /** @deprecated legacy API */
  static alias(alias: IconAliasLegacyObject) {
    legacyAlias(alias, iconRegistry);
  }
}
