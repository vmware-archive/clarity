/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { sortOrder } from './utils.js';

describe('cds-button-sort sortOrder', () => {
  it('should return next sort state from current sort', () => {
    let sort: 'ascending' | 'descending' | 'none' = 'none';

    sort = sortOrder(sort);
    expect(sort).toBe('ascending');

    sort = sortOrder(sort);
    expect(sort).toBe('descending');

    sort = sortOrder(sort);
    expect(sort).toBe('none');
  });
});
