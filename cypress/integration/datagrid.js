/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const test = 'Datagrid';

export function DatagridSpec() {
  describe(test, () => {
    it('default', () => {
      cy.visit('/datagrid/kitchen-sink');

      cy.visit('/datagrid/test-cases');
      cy.get('button.btn-outline-primary').first().click();

      cy.visit('/datagrid/pagination');

      cy.get('button.pagination-last').first().click();

      cy.visit('/datagrid/selection');
      cy.wait(1000);

      cy.visit('/datagrid/detail');

      cy.get('#simple .datagrid-detail-caret-button').first().click();
      cy.get('#change-event .datagrid-detail-caret-button').first().click();
      cy.get('#two-way .datagrid-detail-caret-button').first().click();

      cy.visit('/datagrid/responsive-footer');

      cy.visit('/datagrid/compact');
    });
  });
}
