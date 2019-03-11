describe('Visual Regression Testing', () => {
    const baseURL = 'http://localhost:4200/combobox';
    
    it('check basic combobox',() => {
      cy.visit(baseURL + '/basic');
      cy.eyesOpen({
          appName: 'Clarity',
          testName: 'basic-combobox',
          showLogs: true,
          browser: { width: 1024, height: 768, name: 'chrome' },
        });
        cy.get('.clr-combobox .clr-combobox-trigger').click();
        //const comboboxEl = await cy.get('.clr-combobox');
        //const {top,left,width}=comboboxEl.then($el => $el[0].getBoundingClientRect());
        cy.eyesCheckWindow({
            sizeMode: 'region',
            region: {top:200, left:238, width:120, height: 200}
          });
        cy.eyesClose();
      });
      
      it('check optional-menu combobox',() => {
        cy.visit(baseURL + '/optional-menu');
        cy.eyesOpen({
            appName: 'Clarity',
            testName: 'optional-menuprovided-combobox',
            showLogs: true,
            browser: { width: 1024, height: 768, name: 'chrome' },
          });
          cy.get('.clr-combobox:nth-child(2) .clr-combobox-trigger').click();
          //const comboboxEl = await cy.get('.clr-combobox');
          //const {top,left,width}=comboboxEl.then($el => $el[0].getBoundingClientRect());
          cy.eyesCheckWindow({
              sizeMode: 'region',
              region: {top:200, left:238, width:120, height: 200}
            });
          cy.eyesClose();
        });

        it('check optional-menu combobox',() => {
          cy.visit(baseURL + '/optional-menu');
          cy.eyesOpen({
              appName: 'Clarity',
              testName: 'optional-menunotprovided-combobox',
              showLogs: true,
              browser: { width: 1024, height: 768, name: 'chrome' },
            });
            cy.get('.clr-combobox:nth-child(4) .clr-combobox-trigger').click();
            //const comboboxEl = await cy.get('.clr-combobox');
            //const {top,left,width}=comboboxEl.then($el => $el[0].getBoundingClientRect());
            cy.eyesCheckWindow({
                sizeMode: 'region',
                region: {top:290, left:238, width:145, height: 200}
              });
            cy.eyesClose();
          });
    });
