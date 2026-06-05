describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite5();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs5();
  })

  it('Verificar imagem', () => {
    cy.verificarIamgemAdicionada5();
  })

  it('Remover imagem', () => {
    cy.removerImagem5();
  })

    it('Verificar se a imagem foi removida', () => {
    cy.verificarImagemRemovida5();
  })
})