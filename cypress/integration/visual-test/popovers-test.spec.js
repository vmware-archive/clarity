import { baseURL, openEyesCheck,openEyes } from '../../util';
describe('Visual Regression Testing', () => {
  beforeEach(function() {
    cy.visit(baseURL + 'popovers');
  });

  it('check popovers on focus', () => {
  openEyes('popover on focus');
    cy.get('clr-dummy-anchor input:first-child').click();
    openEyesCheck();
    cy.eyesClose();
  });

  it('check popovers on click', () => {
    openEyes('popover on click');
    cy.get('clr-dummy-anchor button.btn').click();
    openEyesCheck();
    cy.eyesClose();
  });
});
