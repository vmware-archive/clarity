describe('Visual Regression Testing', () => {
    const baseURL = 'http://localhost:4200/popovers';
  
    it('check popovers on focus', () => {
      cy.visit(baseURL);
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'popovers on focus',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.get('clr-dummy-anchor input:first-child').click();
      cy.eyesCheckWindow({
        sizeMode: 'region', //mode
        region: {top:100, left:238, width:177, height: 200}
      });
      cy.eyesClose();
    });

    it('check popovers on click', () => {
        cy.visit(baseURL);
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'popovers on click',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.get('clr-dummy-anchor button.btn').click();
        cy.eyesCheckWindow({
          sizeMode: 'region', //mode
          region: {top:100, left:600, width:234, height: 200}
        });
        cy.eyesClose();
      });
});