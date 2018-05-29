/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, AnimationMetadata, style, transition } from '@angular/animations';

export function fade(opacity: number = 1): AnimationMetadata[] {
  return [
    transition('void => *', [style({ opacity: 0 }), animate('0.2s ease-in-out', style({ opacity: opacity }))]),
    transition('* => void', [animate('0.2s ease-in-out', style({ opacity: 0 }))]),
  ];
}
