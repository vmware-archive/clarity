/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { checkEyes, setup } from '../util';

const test = 'Datagrid';

export function DatagridSpec() {
  describe(test, () => {
    beforeEach(() => {
      setup(test);
    });

    it('default', () => {
      cy.visit('/datagrid/kitchen-sink');
      checkEyes('kitchen-sink');

      cy.visit('/datagrid/test-cases');
      checkEyes('height-tests');
      cy
        .get('button.btn-outline-primary')
        .first()
        .click();
      checkEyes('height-tests-loading');

      cy.visit('/datagrid/pagination');
      checkEyes('pagination');
      cy
        .get('button.pagination-last')
        .first()
        .click();
      checkEyes('pagination-last-page');

      cy.visit('/datagrid/selection');
      cy.wait(1000);
      checkEyes('selection');

      cy.visit('/datagrid/detail');
      checkEyes('detail');
      cy
        .get('#simple .datagrid-detail-caret-button')
        .first()
        .click();
      cy
        .get('#change-event .datagrid-detail-caret-button')
        .first()
        .click();
      cy
        .get('#two-way .datagrid-detail-caret-button')
        .first()
        .click();
      checkEyes('detail-open');

      cy.visit('/datagrid/responsive-footer');
      checkEyes('responsive-footer');

      cy.visit('/datagrid/compact');
      checkEyes('compact');
    });
  });
}
