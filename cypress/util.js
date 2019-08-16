/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

if (!process.env.batchId) {
  process.env.batchId = `localhost-${Date.now()}`;
}
if (!process.env.batchName) {
  process.env.batchName = `localhost`;
}

export function checkEyes(testName, selector = '.content-area') {
  cy.eyesCheckWindow({
    tag: testName,
    sizeMode: 'selector',
    selector: selector,
  });
}

export function setup(testName) {
  cy.eyesOpen({
    appName: 'Clarity',
    testName: testName,
    batchName: process.env.batchName,
    batchId: process.env.batchId,
  });
}
