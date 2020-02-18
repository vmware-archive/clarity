/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const test = 'Buttons';

// TODO: Enable these tests again after validation
export function ButtonSpecs() {
  xdescribe(test, () => {
    it('default buttons', () => {
      cy.visit('/buttons/real-button');
    });

    it('primary buttons', () => {
      cy.visit('/buttons/primary-button');
    });

    it('check secondary-button', () => {
      cy.visit('/buttons/secondary-button');
    });

    it('check tertiary-button', () => {
      cy.visit('/buttons/tertiary-button');
    });

    it('check inverse-button', () => {
      cy.visit('/buttons/inverse-button');
    });

    it('check button-states', () => {
      cy.visit('/buttons/button-states');
    });

    it('check button-loading', () => {
      cy.visit('/buttons/button-loading');
    });

    it('check button-sizes', () => {
      cy.visit('/buttons/button-sizes');
    });
  });
}
