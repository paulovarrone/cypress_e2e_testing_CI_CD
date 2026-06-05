describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite();
    
  })

  it('Colocar inputs invalidos', () => {
    cy.invalidInputs();
    
  })

  it('Verificar mensagens de erro', () => {
    cy.errorMessages();
  })

})