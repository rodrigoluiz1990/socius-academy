---
tipo: tela
nome_tela: Produtos do clube
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-produtos-do-clube
---

## Objetivo

Documentar a operação da tela **Produtos do clube**, usada para cadastrar, consultar e manter os produtos comercializados pelo estabelecimento.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Produtos do clube

## Abas e campos da tela

### Aba: Consulta de produtos

- **Busca por descrição/código:** localiza produtos na grade por texto ou código.
- **Código (grade):** exibe o identificador do produto cadastrado.
- **Descrição (grade):** exibe o nome do produto.
- **Categoria (grade):** exibe a categoria vinculada ao produto.
- **Preço de venda (grade):** exibe o valor de venda configurado.
- **Situação (grade):** indica se o produto está ativo ou inativo.

### Aba: Cadastro/Edição de produto

- **Código do produto:** define o identificador único do item.
- **Descrição:** define o nome comercial do produto.
- **Categoria:** vincula o produto a uma categoria de produtos do clube.
- **Preço de venda:** define o valor de venda do produto.
- **Unidade de medida:** define a unidade usada para controle do produto.
- **Situação:** define se o produto fica ativo para uso.

## Botões da tela

### Tela principal

- **Novo:** abre o formulário para cadastro de produto.
- **Editar selecionado:** abre o formulário para edição do produto selecionado.
- **Exibir detalhes:** abre visualização de consulta do produto selecionado.

### Cadastro/Edição

- **Salvar:** grava o cadastro ou as alterações do produto.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para editar ou exibir detalhes, é necessário selecionar um produto na grade.
- **Código do produto** e **Descrição** devem estar preenchidos para salvar.
- Não é permitido salvar produtos com código já utilizado.
- O produto deve estar vinculado a uma **Categoria** válida.

## Mensagens

- **Nenhum produto selecionado**
- **Selecione um registro para continuar**
- **Código já existente**
- **Preço inválido**
- **Categoria não informada**
- **Falha ao salvar**
- **Informações inválidas**
- **Os seguintes problemas foram encontrados:** + lista de validações
- **Produto do clube salvo com sucesso**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Passo a passo recomendado

1. Acesse **Estabelecimento > Produtos do clube**.
2. Clique em **Novo** para cadastrar ou selecione um item e clique em **Editar selecionado**.
3. Preencha **Código do produto**, **Descrição**, **Categoria**, **Preço de venda**, **Unidade de medida** e **Situação**.
4. Clique em **Salvar**.
5. Para consulta sem edição, selecione o registro e clique em **Exibir detalhes**.
