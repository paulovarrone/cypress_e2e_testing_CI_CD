Cypress.Commands.add('entrarNoSite4', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs4', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.cs);
        cy.get('#imageUrl').type(dados.images.cs); 
    })   
    cy.get('#btnSubmit').click(); 
})

Cypress.Commands.add('verificarRefresh4', () => {    
    cy.reload();
})

Cypress.Commands.add('verificarIamgemAdicionada4', () => {    
    cy.contains('h4','Counter-Strike 2').should('be.visible');
})