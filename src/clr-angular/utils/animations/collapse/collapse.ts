/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, AnimationMetadata, state, style, transition } from '@angular/animations';

export function collapse(): AnimationMetadata[] {
  'use strict';
  return [
    state('true', style({ height: 0, 'overflow-y': 'hidden' })),
    transition('true => false', [animate('0.2s ease-in-out', style({ height: '*', 'overflow-y': 'hidden' }))]),
    transition('false => true', [style({ height: '*', 'overflow-y': 'hidden' }), animate('0.2s ease-in-out')]),
  ];
}
