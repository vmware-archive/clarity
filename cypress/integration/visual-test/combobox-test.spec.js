import { baseURL, openEyesCheck, openEyes } from '../../util';
describe('Visual Regression Testing', () => {
  it('check basic combobox', () => {
    cy.visit(baseURL + 'combobox/basic');
    openEyes('basic-combobox');
    cy.get('.clr-combobox .clr-combobox-trigger').click();
    openEyesCheck();
    cy.eyesClose();
  });

  it('check optional-menu combobox', () => {
    cy.visit(baseURL + 'combobox/optional-menu');
    openEyes('optional-menuprovided-combobox');
    cy.get('.clr-combobox:nth-child(2) .clr-combobox-trigger').click();
    openEyesCheck();
    cy.eyesClose();
  });

  it('check optional-menu combobox', () => {
    cy.visit(baseURL + 'combobox/optional-menu');
    openEyes('optional-menunotprovided-combobox');
    cy.get('.clr-combobox:nth-child(4) .clr-combobox-trigger').click();
    openEyesCheck();
    cy.eyesClose();
  });
});
