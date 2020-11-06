/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { id } from '@cds/core/internal';

describe('id decorator', () => {
  class Test {
    @id() id: string;
    @id() secondId: string;
  }

  it('should generate a unique id for each use of the decorator', () => {
    const instance = new Test();
    const instanceTwo = new Test();

    expect(instance.id).not.toEqual(instance.secondId);
    expect(instanceTwo.id).not.toEqual(instanceTwo.secondId);

    expect(instance.id).not.toEqual(instanceTwo.id);
    expect(instance.secondId).not.toEqual(instanceTwo.secondId);
  });
});
