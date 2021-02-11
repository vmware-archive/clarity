/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';

export const AnimationNavigationOpenName = 'cds-navigation-open';
export const AnimationNavigationOpenConfig: TargetedAnimation[] = [
  {
    target: 'cds-navigation',
    animation: [{ width: 'var(--collapsed-width)' }, { width: 'var(--expanded-width)' }],
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
];
