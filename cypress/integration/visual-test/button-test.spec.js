describe('Visual Regression Testing', () => {
  const baseURL = 'http://localhost:4200/buttons';
  
  it('check real-button', () => {
    cy.visit(baseURL + '/real-button');
    cy.eyesOpen({
        appName: 'Clarity',
        testName: 'real-button',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.'+ [].join.call(btn[0].classList, '.')
      });
     
    });
    cy.eyesClose();
  });

  it('check primary-button', () => {
    cy.visit(baseURL + '/primary-button');
    cy.get('button.btn:enabled').click()
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'primary-button',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.btn'
      });
      cy.eyesClose();
  });

  it('check secondary-button', () => {
    cy.visit(baseURL + '/secondary-button');
    cy.get('button.btn:enabled').click()
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'secondary-button',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.btn'
      });
      cy.eyesClose();
  });

  it('check tertiary-button', () => {
    cy.visit(baseURL + '/tertiary-button');
    cy.get('button.btn:enabled').click()
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'tertiary-button',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.btn'
      });
      cy.eyesClose();
  });

  it('check inverse-button', () => {
    cy.visit(baseURL + '/inverse-button');
    cy.get('button.btn:enabled').click()
      cy.eyesOpen({
        appName: 'Clarity',
        testName: 'inverse-button',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.btn'
      });
      cy.eyesClose();
  });

  it('check button-states', () => {
    cy.visit(baseURL + '/button-states');
    cy.eyesOpen({
        appName: 'Clarity',
        testName: 'button-states',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.'+ [].join.call(btn[0].classList, '.')
      });
     
    });
    cy.eyesClose();
  });

  it('check button-loading', () => {
    cy.visit(baseURL + '/button-loading');
    cy.eyesOpen({
        appName: 'Clarity',
        testName: 'button-loading',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.'+ [].join.call(btn[0].classList, '.')
      });
     
    });
    cy.eyesClose();
  });

  
  it('check button-sizes', () => {
    cy.visit(baseURL + '/button-sizes');
    cy.eyesOpen({
        appName: 'Clarity',
        testName: 'button-sizes',
        showLogs: true,
        browser: { width: 1024, height: 768, name: 'chrome' },
      });
    cy.get('button.btn:enabled').each((btn, index) => {
      const button = cy.wrap(btn);
      button.click();
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: 'button.'+ [].join.call(btn[0].classList, '.')
      });
     
    });
    cy.eyesClose();
  });
});
