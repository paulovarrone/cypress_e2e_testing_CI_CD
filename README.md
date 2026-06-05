# Vanilla JS Web App example

This is a simple app website to store images on localStorage using best practices of accessibility.

<img width="969" alt="print" src="https://github.com/ErickWendel/vanilla-js-web-app-example/assets/8060102/d78cd171-3099-42cd-a1b9-7f61095faf2a">


# Running

Restore the dependencies with `npm ci` and run with `npm start`.

## Como instalar

Crie o arquivo de manifesto package.json utilizando a configuração padrão
(parâmetro -y):


`npm init -y`


Instale o framework como uma dependência de desenvolvimento no escopo do
projeto:


`npm install cypress --save-dev`


Após a conclusão do download, abra o arquivo package.json gerado na raiz do
projeto e adicione a instrução de inicialização dentro do objeto "scripts":

  "scripts": {
    "cypress:open": "cypress open"
  },

## Como rodar os testes


`npm run cypress:open`


## Estrutura

- `cypress/e2e/` — Arquivos de teste
- `cypress/support/` — Comandos customizados
- `cypress/fixtures/` — Dados de teste

Após a configuração inicial realizada pelo assistente gráfico, o framework criará
uma estrutura de diretórios na raiz do projeto contendo as seguintes pastas
principais:

1. fixtures/: Armazena dados estáticos e arquivos JSON estruturados para
simular respostas de APIs ou dados de entrada (mocks).
2. e2e/ (ou integration/ em versões legadas): Diretório dedicado ao
armazenamento dos arquivos de teste estruturados (ex: login.cy.js).
3. plugins/: Permite estender ou modificar comportamentos internos do
framework de maneira dinâmica.
4. support/: Destinado à criação de comandos personalizados
(commands.js) e configurações globais que serão executadas antes dos
arquivos de teste.

Executando o cenário criado:

1. Com a interface gráfica do Cypress aberta (npm run cypress:open),
selecione a opção E2E Testing.
2. Escolha o navegador de sua preferência (ex: Chrome ou Electron) e
clique em Start E2E Testing.
3. Na lista de especificações (specs), clique sobre o arquivo login.cy.js.
4. O navegador controlado exibirá os comandos sendo executados no
painel lateral esquerdo em tempo real, validando o comportamento na
interface do Sauce Demo.

