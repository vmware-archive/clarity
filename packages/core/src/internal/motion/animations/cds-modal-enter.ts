/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';
import { fadeInKeyframes } from './keyframes/fade-in.js';
import { fadeAndSlideInKeyframes } from './keyframes/fade-in-and-slide-down.js';

export const AnimationModalEnterName = 'cds-modal-enter';
export const AnimationModalEnterConfig: TargetedAnimation[] = [
  {
    target: '.overlay-backdrop',
    onlyIf: 'isLayered:false',
    animation: fadeInKeyframes,
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
  {
    target: '.private-host',
    animation: fadeAndSlideInKeyframes,
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
      endDelay: 50,
    },
  },
];
