import { baseURL, checkEyes } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'popovers',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });
  after(() => {
    cy.eyesClose();
  });

  it('check popovers on focus', () => {
    cy.visit(baseURL + 'popovers');
    cy.get('clr-dummy-anchor input:first-child').click();
    checkEyes();
  });

  it('check popovers on click', () => {
    cy.visit(baseURL + 'popovers');
    cy.get('clr-dummy-anchor button.btn').click();
    checkEyes();
  });
});
