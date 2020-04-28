/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { animate, style, transition, trigger } from '@angular/animations';

import { defaultAnimationTiming } from '../../utils/animations/constants';

export const panelAnimation = [
  trigger('skipInitialRender', [transition(':enter', [])]),
  trigger('toggle', [
    transition('void => *', [
      style({ display: 'block', height: 0 }),
      animate(defaultAnimationTiming, style({ height: '*' })),
    ]),
  ]),
];

export const stepAnimation = [
  trigger('skipInitialRender', [transition(':enter', [])]),
  trigger('toggle', [
    transition('void => *', [
      style({ display: 'block', height: 0 }),
      animate(defaultAnimationTiming, style({ height: '*' })),
    ]),
    transition('* => void', [
      style({ display: 'block' }),
      animate(defaultAnimationTiming, style({ height: 0, display: 'none' })),
    ]),
  ]),
];
