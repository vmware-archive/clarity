import { baseURL, openEyesCheck, openEyes } from '../../util';
describe('Visual Regression Testing', () => {
  it('check real-button', () => {
    cy.visit(baseURL + 'buttons/real-button');
    openEyes('real-button');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      openEyesCheck();
    });
    cy.eyesClose();
  });

  it('check primary-button', () => {
    cy.visit(baseURL + 'buttons/primary-button');
    cy.get('button.btn:enabled').click();
    openEyes('primary-button');

    openEyesCheck();
    cy.eyesClose();
  });

  it('check secondary-button', () => {
    cy.visit(baseURL + 'buttons/secondary-button');

    cy.get('button.btn:enabled').click();
    openEyes('secondary-button');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check tertiary-button', () => {
    cy.visit(baseURL + 'buttons/tertiary-button');
    cy.get('button.btn:enabled').click();
    openEyes('tertiary-button');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check inverse-button', () => {
    cy.visit(baseURL + 'buttons/inverse-button');
    cy.get('button.btn:enabled').click();

    openEyes('inverse-button');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check button-states', () => {
    cy.visit(baseURL + 'buttons/button-states');
    openEyes('button-states');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      openEyesCheck();
    });
    cy.eyesClose();
  });

  it('check button-loading', () => {
    cy.visit(baseURL + 'buttons/button-loading');
    openEyes('button-loading');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check button-sizes', () => {
    cy.visit(baseURL + 'buttons/button-sizes');
    openEyes('button-sizes');
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      openEyesCheck();
    });
    cy.eyesClose();
  });
});
