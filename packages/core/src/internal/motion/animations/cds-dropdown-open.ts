/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';
import { fadeInKeyframes } from './keyframes/fade-in.js';

export const AnimationResponsivePopupEnterName = 'cds-responsive-popup-enter';
export const AnimationResponsivePopupEnterConfig: TargetedAnimation[] = [
  {
    target: '.overlay-backdrop',
    onlyIf: 'isLayered:false responsive:true',
    animation: fadeInKeyframes,
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
  {
    target: '.private-host',
    onlyIf: 'responsive:true',
    animation: [
      // holy moly! this little offset here is REQUIRED. without it, the transforms remain in a bad state.
      { opacity: 0 },
      { opacity: 0, marginBottom: '-100%', offset: 0.001 },
      { opacity: 1, marginBottom: '0' },
    ],
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
  {
    target: '.private-host',
    onlyIf: 'responsive:false',
    animation: [{ opacity: 0 }, { opacity: 1 }],
    options: {
      duration: 0,
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
];
