/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';

export const AnimationTreeItemExpandName = 'cds-tree-item-expand';
export const AnimationTreeItemExpandConfig: TargetedAnimation[] = [
  {
    target: '.item-children',
    animation: [
      { opacity: 0, height: '0' },
      { opacity: 1, height: 'from:item-children' },
    ],
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
];
