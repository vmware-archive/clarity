/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';
import { shakeKeyframes } from './keyframes/shake.js';

export const AnimationShakeName = 'cds-component-shake';
export const AnimationShakeConfig: TargetedAnimation[] = [
  {
    target: '.private-host',
    animation: shakeKeyframes,
    options: {
      duration: 1200,
      easing: 'ease-in-out',
      endDelay: 50,
    },
  },
];
