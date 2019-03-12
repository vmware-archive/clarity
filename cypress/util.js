export const baseURL = 'http://localhost:4200/';


export function openEyesCheck() {
    cy.eyesCheckWindow({
       sizeMode: 'selector', //mode
       selector: '.content-area'
      });
  }


  export function openEyes(testName) {
  cy.eyesOpen({
    appName: 'Clarity',
    testName: testName,
    showLogs: true,
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
}