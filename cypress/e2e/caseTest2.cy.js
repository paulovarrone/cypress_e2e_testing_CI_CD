describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs();
    
  })

  it('Verificar mensagens sem erro', () => {
    cy.semErros();
  })

  it('Enviar imagens', () => {
    cy.enviarImagens();
  })

  it('Verificar imagem adicionada', () => {
    cy.verificarIamgemAdicionada();
  })

})