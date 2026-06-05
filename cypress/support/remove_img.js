Cypress.Commands.add('entrarNoSite5', () => {
  cy.visit('/');
})

Cypress.Commands.add('validInputs5', () => {
    cy.fixture('example').then((dados) => {
        cy.get('#title').type(dados.titulos.r10);
        cy.get('#imageUrl').type(dados.images.r10); 
    })   
    cy.get('#btnSubmit').click(); 
})

Cypress.Commands.add('verificarIamgemAdicionada5', () => {    
    cy.contains('h4','Bruxo').should('be.visible');
})

Cypress.Commands.add('removerImagem5', () => {
    cy.contains('h4', 'Bruxo').parents('.card').find('.btn-danger').click()
})

Cypress.Commands.add('verificarImagemRemovida5', () => {
    cy.contains('h4','Bruxo').should('not.exist');
})