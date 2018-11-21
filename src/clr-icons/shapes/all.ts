/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrChartSet } from './chart';
import { ClrCommerceSet } from './commerce';
import { ClrCoreSet } from './core';
import { ClrEssentialSet } from './essential';
import { ClrMediaSet } from './media';
import { ClrSocialSet } from './social';
import { ClrTechnologySet } from './technology';
import { ClrTextEditSet } from './text-edit';
import { ClrTravelSet } from './travel';

/* tslint:disable:variable-name */
export const ClrAllSet = {
  ...ClrChartSet,
  ...ClrCommerceSet,
  ...ClrCoreSet,
  ...ClrEssentialSet,
  ...ClrMediaSet,
  ...ClrSocialSet,
  ...ClrTechnologySet,
  ...ClrTextEditSet,
  ...ClrTravelSet,
};
