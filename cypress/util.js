export const baseURL = 'http://localhost:4200/';


export function checkEyes() {
    cy.eyesCheckWindow({
       sizeMode: 'selector', //mode
       selector: '.content-area'
      });
  }
