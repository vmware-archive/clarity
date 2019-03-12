import { baseURL, checkEyes } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'buttons',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });
  after(() => {
    cy.eyesClose();
  });

  it('check real-button', () => {
    cy.visit(baseURL + 'buttons/real-button');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes();
  });

  it('check primary-button', () => {
    cy.visit(baseURL + 'buttons/primary-button');
    cy.get('button.btn:enabled').click();
    checkEyes();
  });

  it('check secondary-button', () => {
    cy.visit(baseURL + 'buttons/secondary-button');
    cy.get('button.btn:enabled').click();
    checkEyes();
  });

  it('check tertiary-button', () => {
    cy.visit(baseURL + 'buttons/tertiary-button');
    cy.get('button.btn:enabled').click();
    checkEyes();
  });

  it('check inverse-button', () => {
    cy.visit(baseURL + 'buttons/inverse-button');
    cy.get('button.btn:enabled').click();
    checkEyes();
  });

  it('check button-states', () => {
    cy.visit(baseURL + 'buttons/button-states');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes();
  });

  it('check button-loading', () => {
    cy.visit(baseURL + 'buttons/button-loading');
    checkEyes();
  });

  it('check button-sizes', () => {
    cy.visit(baseURL + 'buttons/button-sizes');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
    });
    checkEyes();
  });
});
