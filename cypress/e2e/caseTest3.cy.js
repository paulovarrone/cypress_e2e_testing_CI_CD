describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite3();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs3();
    
  })

  it('Verificar imagem adicionada', () => {
    cy.verificarIamgemAdicionada3();
  })

})