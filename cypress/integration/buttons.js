/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { checkEyes, setup } from '../util';

const test = 'Buttons';

// TODO: Enable these tests again after validation
export function ButtonSpecs() {
  xdescribe(test, () => {
    beforeEach(() => {
      setup(test);
    });

    it('default buttons', () => {
      cy.visit('/buttons/real-button');
      checkEyes('real-button');
    });

    it('primary buttons', () => {
      cy.visit('/buttons/primary-button');
      checkEyes('primary-button');
    });

    it('check secondary-button', () => {
      cy.visit('/buttons/secondary-button');
      checkEyes('secondary-button');
    });

    it('check tertiary-button', () => {
      cy.visit('/buttons/tertiary-button');
      checkEyes('tertiary-button');
    });

    it('check inverse-button', () => {
      cy.visit('/buttons/inverse-button');
      checkEyes('inverse-button');
    });

    it('check button-states', () => {
      cy.visit('/buttons/button-states');
      checkEyes('button-states');
    });

    it('check button-loading', () => {
      cy.visit('/buttons/button-loading');
      checkEyes('button-loading');
    });

    it('check button-sizes', () => {
      cy.visit('/buttons/button-sizes');
      checkEyes('button-sizes');
    });
  });
}
