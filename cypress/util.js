/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function checkEyes(testName, selector = '.content-area') {
  cy.eyesCheckWindow({
    tag: testName,
    sizeMode: 'selector',
    selector,
  });
}

export function setup(testName) {
  cy.eyesOpen({
    appName: `Clarity - ${Cypress.env('CLARITY_THEME')}`,
    testName,
    batchId: Cypress.env('APPLITOOLS_BATCH_ID'),
    batchName: Cypress.env('APPLITOOLS_BATCH_ID'),
  });
}
