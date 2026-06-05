Cypress.Commands.add('entrarNoSite2', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs2', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.paisagem);
        cy.get('#btnSubmit').click(); 
        cy.get('#imageUrl').type(dados.images.paisagem); 
    })   
})

Cypress.Commands.add('semErros2', () => {    
    cy.get('#imageUrl').should('have.css', 'background-image').and('include', '198754') 
    cy.get('#title').should('have.css', 'background-image').and('include', '198754') 
})

Cypress.Commands.add('enviarImagens2', () => {    
    cy.get('#btnSubmit').click(); 
    
    cy.contains('.card-title','Paisagem').should('be.visible');
})

Cypress.Commands.add('clearInputs2', () => {    
    cy.get('#title').clear();
    cy.get('#imageUrl').clear();
})


Cypress.Commands.add('verificarIamgemAdicionada2', () => {    
    cy.contains('h4','Paisagem').should('be.visible');
})