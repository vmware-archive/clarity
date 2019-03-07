import { baseURL, checkEyes, environment } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'combobox',
      browser: environment,
    });
  });
  after(() => {
    cy.eyesClose();
  });
  it('check basic combobox', () => {
    cy.visit('/combobox/basic');
    cy.get('.clr-combobox .clr-combobox-trigger').click();
    checkEyes('basic combobox');
  });

  it('check optional-menu combobox', () => {
    cy.visit('/combobox/optional-menu');
    cy.get('#combo1 .clr-combobox-trigger').click();
    checkEyes('menu provided combobox');
  });

  it('check optional-menu combobox', () => {
    cy.visit('/combobox/optional-menu');
    cy.get('#combo2 .clr-combobox-trigger').click();
    checkEyes('menu not provided combobox');
  });
});
