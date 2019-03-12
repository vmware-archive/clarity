import { baseURL, checkEyes } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'toggles',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });
  after(() => {
    cy.eyesClose();
  });
  it('check toggle-button', () => {
    cy.visit(baseURL + 'toggles');
    checkEyes('toggle off');
    cy
      .get('[clrlayout=vertical] .clr-form-control:first-child .clr-toggle-wrapper:first-child .clr-control-label')
      .click();
    checkEyes('toggle on');
  });
});
