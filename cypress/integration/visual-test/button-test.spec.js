describe('Visual Regression Testing', () => {
  const baseURL = 'http://localhost:4200/buttons';

  it('check real-button', () => {
    cy.visit(baseURL + '/real-button');
    cy.get('button.btn:enabled').each((btn, index) => {
      cy.eyesOpen({
        appName: 'Clarity',
        testName: `real-button-${btn.text().toLowerCase()}-${index}`,
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      const button = cy.wrap(btn);
      button.click();
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.'+ [].join.call(btn[0].classList, '.')
      });
      cy.eyesClose();
    });
  });
});
