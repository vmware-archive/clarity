import { baseURL, checkEyes, environment } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'buttons',
      browser: environment,
    });
  });
  after(() => {
    cy.eyesClose();
  });

  it('check real-button', () => {
    cy.visit('/buttons/real-button');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes('real-button');
  });

  it('check primary-button', () => {
    cy.visit('/buttons/primary-button');
    cy.get('button.btn:enabled').click();
    checkEyes('primary-button');
  });

  it('check secondary-button', () => {
    cy.visit('/buttons/secondary-button');
    cy.get('button.btn:enabled').click();
    checkEyes('secondary-button');
  });

  it('check tertiary-button', () => {
    cy.visit('/buttons/tertiary-button');
    cy.get('button.btn:enabled').click();
    checkEyes('tertiary-button');
  });

  it('check inverse-button', () => {
    cy.visit('/buttons/inverse-button');
    cy.get('button.btn:enabled').click();
    checkEyes('inverse-button');
  });

  it('check button-states', () => {
    cy.visit('/buttons/button-states');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes('button-states');
  });

  it('check button-loading', () => {
    cy.visit('/buttons/button-loading');
    checkEyes('button-loading');
  });

  it('check button-sizes', () => {
    cy.visit('/buttons/button-sizes');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes('button-sizes');
  });
});
