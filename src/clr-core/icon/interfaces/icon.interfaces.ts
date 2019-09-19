/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface IconShapeCollection {
  outline?: string;
  solid?: string;
  outlineBadged?: string;
  outlineAlerted?: string;
  solidBadged?: string;
  solidAlerted?: string;
}

export type IconShapeString = [string, string];

export type IconShapeTuple = IconShapeString | [string, IconShapeCollection];

export interface IconShapeSources {
  [key: string]: string | IconShapeCollection;
}

export interface IconRegistrySources {
  [key: string]: string;
}

export interface IconAlias {
  [key: string]: string[];
}

export interface IconCollection {
  icons?: IconShapeTuple[];
  aliases?: IconAlias[];
}
