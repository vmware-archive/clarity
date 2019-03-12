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
    checkEyes('lists-ul');
  });

  it('check lists-unstyled', () => {
    cy.visit(baseURL + 'lists/lists-unstyled');
    checkEyes('lists-unstyled');
  });

  it('check lists-ol', () => {
    cy.visit(baseURL + 'lists/lists-ol');
    checkEyes('lists-ol');
  });

  it('check lists-mixed', () => {
    cy.visit(baseURL + 'lists/lists-mixed');
    checkEyes('lists-mixed');
  });

  it('check lists-compact', () => {
    cy.visit(baseURL + 'lists/lists-compact');
    checkEyes('lists-compact');
  });

  it('check lists-in-cards', () => {
    cy.visit(baseURL + 'lists/lists-in-cards');
    checkEyes('lists-in-cards');
  });

  it('check old-lists-in-cards', () => {
    cy.visit(baseURL + 'lists/old-lists-in-cards');
    checkEyes('old-lists-in-cards');
  });
});
