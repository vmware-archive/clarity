/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { GlobalStateService } from '@cds/core/internal';
import { unknownIcon } from './shapes/unknown.js';
import { IconAlias, IconRegistry, IconShapeTuple } from './interfaces/icon.interfaces.js';

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
   * Returns a readonly reference of the icon registry.
   */
  static get registry(): Readonly<IconRegistry> {
    return { unknown: unknownIcon[1] as string, ...GlobalStateService.state.iconRegistry };
  }

  static addIcons(...shapes: IconShapeTuple[]) {
    GlobalStateService.state.iconRegistry = {
      ...GlobalStateService.state.iconRegistry,
      ...Object.fromEntries(shapes.filter(([name]) => !ClarityIcons.registry[name])),
    };
  }

  /**
   * @description
   * Use `addIcons` instead of `addAliases`
   *
   * This method is a backwords compatibility function to the old API
   *
   * The team will revisit this method for possible deprecation.
   */
  static addAliases(...aliases: IconAlias[]) {
    const updated = aliases
      .filter(([name]) => ClarityIcons.registry[name])
      .flatMap(([name, aliases]) => aliases.map(alias => [alias, ClarityIcons.registry[name]]));

    GlobalStateService.state.iconRegistry = {
      ...GlobalStateService.state.iconRegistry,
      ...Object.fromEntries(updated),
    };
  }

  static getIconNameFromShape(iconShape: IconShapeTuple) {
    return iconShape[0];
  }
}
