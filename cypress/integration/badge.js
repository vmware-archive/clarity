/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const test = 'Badge';

export function BadgeSpec() {
  describe(test, () => {
    it('color-options', () => {
      cy.visit('/badges/color-options');
    });

    it('status', () => {
      cy.visit('/badges/status');
    });
  });
}
