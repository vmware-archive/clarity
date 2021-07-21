/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isSafari } from '@cds/core/internal';

describe('browser utils', () => {
  /* not much of a test here but will ensure chromium based browsers are not caught by the CI. */
  it('isSafari', () => {
    expect(isSafari()).toBe(false);
  });
});
