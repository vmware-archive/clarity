/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { checkEyes, setup } from '../util';

const test = 'Lists';

export function ListsSpec() {
  describe(test, () => {
    beforeEach(() => {
      setup(test);
    });

    const tests = [
      'lists-ul',
      'lists-unstyled',
      'lists-ol',
      'lists-mixed',
      'lists-compact',
      'lists-in-cards',
      // 'old-lists-in-cards',
    ];
    tests.forEach(test => {
      it(`check ${test}`, () => {
        cy.visit(`/lists/${test}`);
        checkEyes(test);
      });
    });
  });
}
