Cypress.Commands.add('entrarNoSite6', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs6', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.paisagem);
        cy.get('#imageUrl').type(dados.images.paisagem); 
    })   
    cy.get('#btnSubmit').click(); 
})

Cypress.Commands.add('verificarIamgemAdicionada6', () => {    
    cy.contains('h4','Paisagem').should('be.visible');
})

Cypress.Commands.add('removerImagem6', () => {
    cy.contains('h4', 'Paisagem').parents('.card').find('.btn-danger').click()
})

Cypress.Commands.add('verificarRefresh6', () => {    
    cy.wait(1000);
    cy.reload();
})

Cypress.Commands.add('verificarImagemRemovida6', () => {
    cy.contains('h4','Paisagem').should('not.exist');
})