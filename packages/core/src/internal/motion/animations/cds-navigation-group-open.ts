/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';

export const AnimationNavigationGroupOpenName = 'cds-navigation-group-open';
export const AnimationNavigationGroupOpenConfig: TargetedAnimation[] = [
  {
    target: '.navigation-group-items',
    animation: [
      { opacity: 0, height: '0' },
      { opacity: 1, height: 'from:cds-navigation-group' },
    ],
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
];
