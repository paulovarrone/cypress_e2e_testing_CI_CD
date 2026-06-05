describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite1();
    
  })

  it('Colocar inputs invalidos', () => {
    cy.invalidInputs1();
    
  })

  it('Verificar mensagens de erro', () => {
    cy.errorMessages1();
  })

})