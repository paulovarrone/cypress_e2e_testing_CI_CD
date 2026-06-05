describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite6();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs6();
  })

  it('Verificar imagem', () => {
    cy.verificarIamgemAdicionada6();
  })

  it('Remover imagem', () => {
    cy.removerImagem6();
  })

it('Verificar se a imagem foi removida', () => {
    cy.verificarImagemRemovida6();
  })

  it('Verificar refresh', () => {
    cy.verificarRefresh6();
  })

  it('Verificar se a imagem foi removida após o refresh', () => {
    cy.verificarImagemRemovida6();
  })

})