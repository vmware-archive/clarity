import { baseURL, openEyesCheck, openEyes } from '../../util';
describe('Visual Regression Testing', () => {
  it('check toggle-button', () => {
    cy.visit(baseURL + 'toggles');
    openEyes('toggles');
    openEyesCheck();
    cy
      .get('[clrlayout=vertical] .clr-form-control:first-child .clr-toggle-wrapper:first-child .clr-control-label')
      .click();
    openEyesCheck();
    cy.eyesClose();
  });
});
