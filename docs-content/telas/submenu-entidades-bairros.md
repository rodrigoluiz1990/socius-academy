---
tipo: tela
nome_tela: Bairros
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-bairros
---

## Objetivo

Documentar a operação da tela **Bairros**, usada para consultar, cadastrar, editar, ativar/desativar e detalhar bairros no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Bairros

## Abas e campos da tela

### Tela: Bairros (principal)

- **Filtros:** permite pesquisar por Nome, Cidade e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, Cidade, Estado e Situação).

### Tela: Novo/Editar bairro

### Aba: Informações básicas

- **Cidade:** vincula o bairro à cidade selecionada.
- **Nome do bairro:** define o nome do bairro.

### Tela: Detalhes do bairro

- Exibe os mesmos dados do cadastro (cidade e nome do bairro) em modo de consulta.

## Botões da tela

### Tela principal

- **Nova bairro:** abre o formulário para cadastro de um novo bairro.
- **Editar selecionado:** abre o formulário para edição do bairro selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do bairro selecionado.
- **Exibir detalhes:** abre a tela de detalhes do bairro selecionado.

### Novo/Editar bairro

- **Salvar:** grava o cadastro novo ou as alterações do bairro.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **ativar/desativar** ou **exibir detalhes**, é necessário selecionar um bairro no grid.
- **Cidade** e **Nome do bairro** são obrigatórios para salvar.
- Não é permitido salvar bairro com o **mesmo nome** dentro da mesma cidade.

Campos obrigatórios mínimos para salvar:

- **Cidade**
- **Nome do bairro**

## Mensagens

- **Nenhum bairro selecionado:** selecione um registro para continuar.
- **Selecione um registro para continuar:** clique em um item antes de executar a ação.
- **Desativar ou ativar:** confirma a alteração de status do bairro selecionado.
- **Ação realizada com sucesso.:** alteração de status concluída.
- **Informações inválidas - O preenchimento do nome do bairro é obrigatório:** preencha o nome e tente salvar novamente.
- **Informações inválidas - Selecione a cidade:** selecione uma cidade e tente salvar novamente.
- **Bairro já cadastrado:** informe outro nome ou cidade.
- **Falha ao salvar:** revise os dados informados e tente novamente.
- **Bairro salvo com sucesso:** confirma o salvamento.
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
3. Clique em **Novo bairro** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Selecione a **Cidade** e informe o **Nome do bairro**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
