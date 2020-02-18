/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const test = 'Select';

export function SelectSpec() {
  describe(test, () => {
    it('default', () => {
      cy.visit('/selects');
      // Cypress doesn't let me open the options box so it can be included in the screenshot.
      // We had an issue with option font color in the dark theme but don't seem to have a way
      // test it.
      // cy
      //   .get('#horizontal-select-basic')
      //   .first()
      //   .click();
    });
  });
}
