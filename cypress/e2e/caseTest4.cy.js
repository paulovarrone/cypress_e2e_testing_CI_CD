describe('template spec', () => {
  it('passes', () => {
    cy.entrarNoSite4();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs4();
  })

  it('Verificar imagem', () => {
    cy.verificarIamgemAdicionada4();
  })

  it('Verificar refresh da pagina', () => {
    cy.verificarRefresh4();
  })

    it('Verificar se a imagem esta após reaload', () => {
    cy.verificarIamgemAdicionada4();
  })
})