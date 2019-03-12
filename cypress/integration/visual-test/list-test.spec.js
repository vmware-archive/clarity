import { baseURL, checkEyes } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'list',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });
  after(() => {
    cy.eyesClose();
  });
  it('check lists-ul', () => {
    cy.visit(baseURL + 'lists/lists-ul');
    checkEyes();
  });

  it('check lists-unstyled', () => {
    cy.visit(baseURL + 'lists/lists-unstyled');
    checkEyes();
  });

  it('check lists-ol', () => {
    cy.visit(baseURL + 'lists/lists-ol');
    checkEyes();
  });

  it('check lists-mixed', () => {
    cy.visit(baseURL + 'lists/lists-mixed');
    checkEyes();
  });

  it('check lists-compact', () => {
    cy.visit(baseURL + 'lists/lists-compact');
    checkEyes();
  });

  it('check lists-in-cards', () => {
    cy.visit(baseURL + 'lists/lists-in-cards');
    checkEyes();
  });

  it('check old-lists-in-cards', () => {
    cy.visit(baseURL + 'lists/old-lists-in-cards');
    checkEyes();
  });
});
