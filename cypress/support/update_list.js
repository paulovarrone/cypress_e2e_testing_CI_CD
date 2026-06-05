Cypress.Commands.add('entrarNoSite3', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs3', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.r10);
        cy.get('#imageUrl').type(dados.images.r10); 
    })   
    cy.get('#btnSubmit').click(); 
})

Cypress.Commands.add('verificarIamgemAdicionada3', () => {    
    cy.contains('h4','Bruxo').should('be.visible');
})