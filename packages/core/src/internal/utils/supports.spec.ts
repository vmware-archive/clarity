/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

describe('browser support feature checks', () => {
  it('should check browser support value strings in cds-support attr', () => {
    const supportValues = document.body.getAttribute('cds-supports');
    expect(supportValues).toContain('js');
    expect(supportValues).toContain('flex-gap');
  });
});
