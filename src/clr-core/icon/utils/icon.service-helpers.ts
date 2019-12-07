/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { existsIn } from '@clr/core/common';
import has from 'ramda/es/has';
import { renderIcon } from '../icon.renderer';
import { IconAlias, IconCollection, IconRegistrySources, IconShapeTuple } from '../interfaces/icon.interfaces';

export function addIcon(shape: IconShapeTuple, registry: IconRegistrySources) {
  const [shapeName] = shape;
  if (!hasIcon(shapeName, registry)) {
    addIconToRegistry(shape, registry);
  }
}

export function addIcons(shapes: IconShapeTuple[], registry: IconRegistrySources) {
  shapes.forEach(s => {
    addIcon(s, registry);
  });
}

export function hasIcon(shapeName: string, registry: IconRegistrySources): boolean {
  return has(shapeName, registry);
}

export function setIconAliases(shapeName: string, aliasNames: string[], registry: IconRegistrySources) {
  if (existsIn([shapeName], registry)) {
    aliasNames.forEach(a => {
      setIconAlias(shapeName, a, registry);
    });
  }
}

export function setIconAlias(shapeName: string, aliasName: string, registry: IconRegistrySources) {
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

export function addCollection(collection: IconCollection, registry: IconRegistrySources) {
  collection.icons.forEach((shape: any) => {
    addIcon(shape, registry);
  });
  collection.aliases.forEach((alias: IconAlias) => {
    legacyAlias(alias, registry);
  });
}

export function legacyAlias(aliases: IconAlias, registry: IconRegistrySources) {
  for (const shapeNameKey in aliases) {
    if (aliases.hasOwnProperty(shapeNameKey)) {
      if (registry.hasOwnProperty(shapeNameKey)) {
        setIconAliases(shapeNameKey, aliases[shapeNameKey], registry);
      } else {
        throw new Error(`An icon "${shapeNameKey}" you are trying to set aliases to doesn't exist in Clarity Icons.`);
      }
    }
  }
}

export function getIcon(shapeName: string, registry: IconRegistrySources): string {
  return hasIcon(shapeName, registry) ? retrieveIconFromRegistry(shapeName, registry) : getUnknownIcon(registry);
}

export function getUnknownIcon(registry: IconRegistrySources): string {
  return registry.unknown;
}

function addIconToRegistry(shape: IconShapeTuple, registry: IconRegistrySources) {
  const [shapeName, template] = shape;
  registry[shapeName] = renderIcon(template);
}

function retrieveIconFromRegistry(shapeName: string, registry: IconRegistrySources): string {
  return registry[shapeName];
}
