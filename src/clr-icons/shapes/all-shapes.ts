/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChartShapes, ChartShape } from './chart-shapes';
import { CommerceShapes, CommerceShape } from './commerce-shapes';
import { CoreShapes, CoreShape } from './core-shapes';
import { EssentialShapes, EssentialShape } from './essential-shapes';
import { MediaShapes, MediaShape } from './media-shapes';
import { SocialShapes, SocialShape } from './social-shapes';
import { TechnologyShapes, TechnologyShape } from './technology-shapes';
import { TextEditShapes, TextEditShape } from './text-edit-shapes';
import { TravelShapes, TravelShape } from './travel-shapes';
import safeWindowAdd from '../utils/safe-window-add';

/**
 * Valid shapes.
 */
export type AllShape =
  | ChartShape
  | CommerceShape
  | CoreShape
  | EssentialShape
  | MediaShape
  | SocialShape
  | TechnologyShape
  | TextEditShape
  | TravelShape;

/**
 * AllShapes valid type.
 */
type AllShapesType = { [shape in AllShape]: string };

export const AllShapes: AllShapesType = {
  ...CoreShapes,
  ...CommerceShapes,
  ...EssentialShapes,
  ...MediaShapes,
  ...SocialShapes,
  ...TechnologyShapes,
  ...TravelShapes,
  ...ChartShapes,
  ...TextEditShapes,
};

safeWindowAdd(AllShapes);
