import { baseURL, checkEyes } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'combobox',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });
  after(() => {
    cy.eyesClose();
  });
  it('check basic combobox', () => {
    cy.visit(baseURL + 'combobox/basic');
    cy.get('.clr-combobox .clr-combobox-trigger').click();
    checkEyes();
  });

  it('check optional-menu combobox', () => {
    cy.visit(baseURL + 'combobox/optional-menu');
    cy.get('.clr-combobox:nth-child(2) .clr-combobox-trigger').click();
    checkEyes();
  });

  it('check optional-menu combobox', () => {
    cy.visit(baseURL + 'combobox/optional-menu');
    cy.get('.clr-combobox:nth-child(4) .clr-combobox-trigger').click();
    checkEyes();
  });
});
