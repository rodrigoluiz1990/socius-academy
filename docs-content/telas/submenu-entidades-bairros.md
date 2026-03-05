---
tipo: tela
nome_tela: Bairros
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-bairros
---

## Objetivo

Documentar a operação da tela **Bairros**, usada para consultar, cadastrar, editar e detalhar bairros no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Bairros

## Abas e campos da tela

### Tela: Bairros (principal)

- **Filtros:** permite pesquisar por Nome, CEP e Cidade.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, CEP, Cidade e Estado).

### Tela: Novo/Editar bairro

### Aba: Informações básicas

- **País:** define o país para a seleção de província, estado e cidade.
- **Província:** define a província (quando aplicável) para filtrar estados e cidades.
- **Estado:** define o estado para filtrar cidades.
- **Cidade:** vincula o bairro à cidade selecionada.
- **Nome:** define o nome do bairro.
- **CEP:** define o CEP do bairro.

### Tela: Detalhes do bairro

- Exibe os mesmos dados do cadastro (país, província, estado, cidade, nome e CEP) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo bairro:** abre o formulário para cadastro de um novo bairro.
- **Editar bairro:** abre o formulário para edição do bairro selecionado.
- **Exibir detalhes:** abre a tela de detalhes do bairro selecionado.

### Novo/Editar bairro

- **Salvar:** grava o cadastro novo ou as alterações do bairro.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar um bairro no grid.
- **Cidade**, **Nome** e **CEP** são obrigatórios para salvar.
- Não é permitido salvar bairro com o **mesmo nome** dentro da mesma cidade.

Campos obrigatórios mínimos para salvar:

- **País**
- **Estado**
- **Cidade**
- **Nome**
- **CEP**

## Mensagens

- **Falha ao iniciar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum bairro selecionado:** selecione um bairro na tabela e tente novamente.
- **Nenhum nome informado:** informe um nome para o bairro.
- **Nenhum CEP informado:** informe um CEP para o bairro.
- **Nenhuma cidade selecionada:** selecione uma cidade e tente novamente.
- **Nome duplicado:** o nome informado já está em uso por outro bairro na cidade selecionada.
- **Falha ao salvar o bairro:** verifique os dados informados e tente novamente.
- **Bairro salvo:** confirma o salvamento.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Endereços (cadastro de pessoas, agências, corretores, vendedores e estabelecimentos):** utiliza o bairro no cadastro de endereço.
- **Lojas:** utiliza o bairro no cadastro de loja.
- **Carteira de cobrança bancária:** utiliza o bairro no endereço da carteira.
- **Fiscal (NF-e / NFC-e / CFe):** utiliza o bairro nos dados de endereço do destinatário/retirada/entrega quando configurados.

### Cadastros necessários para preencher esta tela

- **Cidades:** é necessário selecionar a cidade para o cadastro do bairro.

## Passo a passo recomendado

1. Acesse **Entidades > Bairros**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo bairro** para cadastrar, ou selecione um registro e clique em **Editar bairro**.
4. Selecione **País**, **Província** (quando aplicável), **Estado** e **Cidade** e informe **Nome** e **CEP**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
