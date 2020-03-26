/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { existsIn } from '@clr/core/common';
import has from 'ramda/es/has';
import { renderIcon } from '../icon.renderer.js';
import { IconAlias, IconAliasLegacyObject, IconRegistry, IconShapeTuple } from '../interfaces/icon.interfaces.js';

export function addIcon(shape: IconShapeTuple, registry: IconRegistry) {
  const [shapeName] = shape;
  if (!hasIcon(shapeName, registry)) {
    addIconToRegistry(shape, registry);
  }
}

export function addIcons(shapes: IconShapeTuple[], registry: IconRegistry) {
  shapes.forEach(s => {
    addIcon(s, registry);
  });
}

export function hasIcon(shapeName: string, registry: IconRegistry): boolean {
  return has(shapeName, registry);
}

export function setIconAliases(iconAlias: IconAlias, registry: IconRegistry) {
  if (registry[iconAlias[0]]) {
    iconAlias[1].forEach(a => {
      setIconAlias(iconAlias[0], a, registry);
    });
  }
}

export function setIconAlias(shapeName: string, aliasName: string, registry: IconRegistry) {
  if (existsIn([shapeName], registry)) {
    Object.defineProperty(registry, aliasName, {
      get: () => {
        return registry[shapeName];
      },
      enumerable: true,
      configurable: true,
    });
  }
}

export function legacyAlias(aliases: IconAliasLegacyObject, registry: IconRegistry) {
  for (const shapeNameKey in aliases) {
    if (aliases.hasOwnProperty(shapeNameKey)) {
      if (registry.hasOwnProperty(shapeNameKey)) {
        setIconAliases([shapeNameKey, aliases[shapeNameKey]], registry);
      } else {
        throw new Error(`An icon "${shapeNameKey}" you are trying to set aliases to doesn't exist in Clarity Icons.`);
      }
    }
  }
}

export function getIcon(shapeName: string, registry: IconRegistry): string {
  return registry[shapeName] ? (registry[shapeName] as string) : (registry.unknown as string);
}

function addIconToRegistry(shape: IconShapeTuple, registry: IconRegistry) {
  const [shapeName, template] = shape;
  registry[shapeName] = renderIcon(template);
}
