describe('Visual Regression Testing', () => {
  const baseURL = 'http://localhost:4200/toggles';

  it('check toggle-button', () => {
    cy.visit(baseURL);
    cy.eyesOpen({
      appName: 'Clarity',
      testName: 'toggles',
      showLogs: true,
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: '[clrlayout=vertical] .clr-form-control:first-child .clr-toggle-wrapper:first-child',
       
      });
    cy.get('[clrlayout=vertical] .clr-form-control:first-child .clr-toggle-wrapper:first-child .clr-control-label').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '[clrlayout=vertical] .clr-form-control:first-child .clr-toggle-wrapper:first-child',
     
    });
    cy.eyesClose();
  });
});
