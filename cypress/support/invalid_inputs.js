Cypress.Commands.add('entrarNoSite', () => {
  cy.visit('/');
})

Cypress.Commands.add('invalidInputs', () => {
    cy.get('#title').should('be.empty');
    cy.get('#imageUrl').should('be.empty');
    cy.get('#btnSubmit').click();    
})

Cypress.Commands.add('errorMessages', () => {
    cy.contains('#titleFeedback','Please type a title for the image.').should('be.visible');
    cy.contains('#urlFeedback','Please type a valid URL').should('be.visible'); 
})