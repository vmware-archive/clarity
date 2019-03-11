describe('Visual Regression Testing', () => {
    const baseURL = 'http://localhost:4200/lists';
  
    it('check lists-ul', () => {
      cy.visit(baseURL + '/lists-ul');
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'lists-ul',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: '.list.list-spacer'
      });
      cy.eyesClose();
    });

    it('check lists-unstyled', () => {
        cy.visit(baseURL + '/lists-unstyled');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'lists-unstyled',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.list-unstyled.list-spacer'
        });
        cy.eyesClose();
      });

      it('check lists-ol', () => {
        cy.visit(baseURL + '/lists-ol');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'lists-ol',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.list.list-spacer'
        });
        cy.eyesClose();
      });

      it('check lists-mixed', () => {
        cy.visit(baseURL + '/lists-mixed');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'lists-mixed',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.list-unstyled.list-spacer'
        });
        cy.eyesClose();
      });

      it('check lists-compact', () => {
        cy.visit(baseURL + '/lists-compact');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'lists-compact',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.list.list-spacer.compact'
        });
        cy.eyesClose();
      });

      it('check lists-in-cards', () => {
        cy.visit(baseURL + '/lists-in-cards');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'lists-in-cards',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.clr-example.nomargin'
        });
        cy.eyesClose();
      });

      it('check old-lists-in-cards', () => {
        cy.visit(baseURL + '/old-lists-in-cards');
        cy.eyesOpen({
          appName: 'Clarity',
          testName: 'old-lists-in-cards',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.eyesCheckWindow({
          sizeMode: 'selector', //mode
          selector: '.clr-example.nomargin'
        });
        cy.eyesClose();
      });
  });
  