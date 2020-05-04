/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconRegistrySources } from '@clr/core/internal';

type IconSvgString = string;
type IconNameString = string;
type IconAliases = string[];

export interface IconShapeCollection {
  outline?: IconSvgString;
  solid?: IconSvgString;
  outlineBadged?: IconSvgString;
  outlineAlerted?: IconSvgString;
  solidBadged?: IconSvgString;
  solidAlerted?: IconSvgString;
}

type IconShapeTupleAsString = [IconNameString, IconSvgString];
type IconShapeTupleAsObject = [IconNameString, IconSvgString];

export type IconShapeTuple = IconShapeTupleAsString | IconShapeTupleAsObject;

export interface IconShapeSources {
  [key: string]: IconSvgString | IconShapeCollection;
}

declare module '@clr/core/internal' {
  interface IconRegistrySources {
    [key: string]: IconSvgString;
  }
}

export type IconRegistry = Partial<IconRegistrySources>;

export interface IconAliasLegacyObject {
  [key: string]: IconAliases;
}

type NameOfIconToAlias = string;

export type IconAlias = [NameOfIconToAlias, IconAliases];
