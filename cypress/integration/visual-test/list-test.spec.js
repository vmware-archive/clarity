import { baseURL, openEyesCheck, openEyes } from '../../util';
describe('Visual Regression Testing', () => {
  it('check lists-ul', () => {
    cy.visit(baseURL + 'lists/lists-ul');
    openEyes('lists-ul');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check lists-unstyled', () => {
    cy.visit(baseURL + 'lists/lists-unstyled');
    openEyes('lists-unstyled');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check lists-ol', () => {
    cy.visit(baseURL + 'lists/lists-ol');
    openEyes('lists-ol');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check lists-mixed', () => {
    cy.visit(baseURL + 'lists/lists-mixed');
    openEyes('lists-mixed');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check lists-compact', () => {
    cy.visit(baseURL + 'lists/lists-compact');
    openEyes('lists-compact');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check lists-in-cards', () => {
    cy.visit(baseURL + 'lists/lists-in-cards');
    openEyes('lists-in-cards');
    openEyesCheck();
    cy.eyesClose();
  });

  it('check old-lists-in-cards', () => {
    cy.visit(baseURL + 'lists/old-lists-in-cards');
    openEyes('old-lists-in-cards');
    openEyesCheck();
    cy.eyesClose();
  });
});
