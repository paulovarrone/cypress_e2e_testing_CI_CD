Cypress.Commands.add('entrarNoSite', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.paisagem);
        cy.get('#btnSubmit').click(); 
        cy.get('#imageUrl').type(dados.images.paisagem); 
    })   
})

Cypress.Commands.add('semErros', () => {    
    cy.get('#imageUrl').should('have.css', 'background-image').and('include', '198754') 
    cy.get('#title').should('have.css', 'background-image').and('include', '198754') 
})

Cypress.Commands.add('enviarImagens', () => {    
    cy.get('#btnSubmit').click(); 
    cy.get('#title').clear();
    cy.get('#imageUrl').clear();
    cy.contains('.card-title','Paisagem').should('be.visible');
})

Cypress.Commands.add('verificarIamgemAdicionada', () => {    
    cy.contains('h4','Paisagem').should('be.visible');
})