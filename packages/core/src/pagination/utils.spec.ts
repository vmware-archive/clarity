/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getPaginationIconConfig } from './utils.js';

describe('cds-pagination getPaginationIconConfig', () => {
  it('should return correct icon config for set pagination action', () => {
    expect(getPaginationIconConfig('next')).toEqual({ shape: 'angle', direction: 'right' });
    expect(getPaginationIconConfig('last')).toEqual({ shape: 'step-forward-2', direction: 'up' });
    expect(getPaginationIconConfig('prev')).toEqual({ shape: 'angle', direction: 'left' });
    expect(getPaginationIconConfig('first')).toEqual({ shape: 'step-forward-2', direction: 'down' });
    expect(getPaginationIconConfig('default' as any)).toEqual({ shape: 'ellipsis-vertical', direction: 'up' });
  });
});
