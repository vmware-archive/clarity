export const baseURL = 'http://localhost:4200/';


export function checkEyes(testName) {
    cy.eyesCheckWindow({
       tag: testName,
       sizeMode: 'selector', //mode
       selector: '.content-area'
      });
  }
