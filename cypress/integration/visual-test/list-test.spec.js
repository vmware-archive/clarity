import { baseURL, checkEyes, environment } from '../../util';
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'list',
      browser: environment,
    });
  });
  after(() => {
    cy.eyesClose();
  });

  const tests = [
    'lists-ul',
    'lists-unstyled',
    'lists-ol',
    'lists-mixed',
    'lists-compact',
    'lists-in-cards',
    'old-lists-in-cards',
  ];
  tests.forEach(test => {
    it(`check ${test}`, () => {
      cy.visit(`/lists/${test}`);
      checkEyes(test);
    });
  });
});
