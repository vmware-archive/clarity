import { baseURL, checkEyes, environment } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'toggles',
      browser: environment,
    });
  });
  after(() => {
    cy.eyesClose();
  });
  it('check toggle-button', () => {
    cy.visit('/toggles');
    checkEyes('toggle off');
    cy.get('.clr-toggle-wrapper .clr-control-label').each(function(toggles) {
      cy.wrap(toggles).click();
    });
    checkEyes('toggle on');
  });
});

// @TODO: Fix 100vh style to capture full screen
