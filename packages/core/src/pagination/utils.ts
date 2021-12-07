/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export type PaginationIconConfig = { shape: string; direction: 'up' | 'right' | 'down' | 'left' };

export function getPaginationIconConfig(action: 'first' | 'prev' | 'next' | 'last'): PaginationIconConfig {
  const config: { [key: string]: PaginationIconConfig } = {
    next: { shape: 'angle', direction: 'right' },
    last: { shape: 'step-forward-2', direction: 'up' },
    prev: { shape: 'angle', direction: 'left' },
    first: { shape: 'step-forward-2', direction: 'down' },
  };

  return config[action] ?? { shape: 'ellipsis-vertical', direction: 'up' };
}
