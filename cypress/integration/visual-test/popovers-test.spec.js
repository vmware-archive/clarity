import { baseURL, checkEyes, environment } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'popovers',
      browser: environment,
    });
  });
  after(() => {
    cy.eyesClose();
  });

  it('check popovers on focus', () => {
    cy.visit('/popovers');
    cy.get('clr-dummy-anchor input:first-child').click();
    checkEyes('popovers on focus');
  });

  it('check popovers on click', () => {
    cy.visit('/popovers');
    cy.get('clr-dummy-anchor button.btn').click();
    checkEyes('popovers on click');
  });
});
