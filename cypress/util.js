/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function checkEyes(testName, selector = '.content-area') {
  cy.get('.main-container').then(el => {
    // Hack to set window height for scrolling only for visual testing
    el[0].style.height = 'auto';
    cy.eyesCheckWindow({
      tag: testName,
      sizeMode: 'selector',
      selector,
      ignore: [{ selector: '.applitools-ignore' }],
    });
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
