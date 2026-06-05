describe('template spec', () => {
  it('Entrar no site', () => {
    cy.entrarNoSite2();
    
  })

  it('Colocar inputs validos', () => {
    cy.validInputs2();
    
  })

  it('Verificar mensagens sem erro', () => {
    cy.semErros2();
  })

  it('Enviar imagens', () => {
    cy.enviarImagens2();
  })

  it('Limpar inputs', () => {
    cy.clearInputs2();
  })

  it('Verificar imagem adicionada', () => {
    cy.verificarIamgemAdicionada2();
  })

  

})