/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable()
export class TreeFeaturesService<T> {
  selectable = false;
  // More properties will appear as we address more use cases
}

export function treeFeaturesFactory<T>(existing: TreeFeaturesService<T>) {
  return existing || new TreeFeaturesService();
}

export const TREE_FEATURES_PROVIDER = {
  provide: TreeFeaturesService,
  useFactory: treeFeaturesFactory,
  deps: [[new Optional(), new SkipSelf(), TreeFeaturesService]],
};
