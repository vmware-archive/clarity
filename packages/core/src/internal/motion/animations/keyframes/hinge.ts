/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export const hingeKeyframes = [
  { transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 },
  { transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 },
  { transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 },
  { transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', opacity: 1, offset: 0.8 },
  { transformOrigin: 'top left', opacity: 0, transform: 'translate3d(0, 700px, 0)' },
];
