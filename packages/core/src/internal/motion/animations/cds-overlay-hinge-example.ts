/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';
import { hingeKeyframes } from './keyframes/hinge.js';

export const AnimationHingeName = 'cds-modal-hinge-exit';
export const AnimationHingeConfig: TargetedAnimation[] = [
  {
    target: '.overlay-backdrop',
    onlyIf: 'isLayered:false',
    animation: [{ opacity: 1, offset: 0.8 }, { opacity: 0 }],
    options: {
      duration: 1200,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  },
  {
    target: '.private-host',
    animation: hingeKeyframes,
    options: {
      duration: 1200,
      easing: 'ease-in-out',
      fill: 'forwards',
      endDelay: 50,
    },
  },
];
