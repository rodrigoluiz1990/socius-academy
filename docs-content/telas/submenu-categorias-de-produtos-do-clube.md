---
tipo: tela
nome_tela: Categorias de produtos do clube
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-categorias-de-produtos-do-clube
---

## Objetivo

Documentar a operação da tela **Categorias de produtos do clube**, usada para cadastrar e manter as categorias utilizadas nos produtos do clube.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Categorias de produtos do clube

## Abas e campos da tela

### Aba: Consulta de categorias

- **Busca por descrição/código:** localiza categorias na grade por texto ou código.
- **Código (grade):** exibe o identificador da categoria.
- **Descrição (grade):** exibe o nome da categoria.
- **Situação (grade):** indica se a categoria está ativa ou inativa.

### Aba: Cadastro/Edição de categoria

- **Código/Identificador:** define o código único da categoria.
- **Descrição da categoria:** define o nome da categoria.
- **Situação:** define se a categoria ficará ativa para uso.

## Botões da tela

### Tela principal

- **Novo:** abre o formulário para cadastro de categoria.
- **Editar selecionada:** abre o formulário para edição da categoria selecionada.
- **Exibir detalhes:** abre visualização de consulta da categoria selecionada.

### Cadastro/Edição

- **Salvar:** grava o cadastro ou as alterações da categoria.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para editar ou exibir detalhes, é necessário selecionar uma categoria na grade.
- **Descrição da categoria** é obrigatória para salvar.
- Não é permitido salvar categorias com código já utilizado.
- A inativação de categoria em uso deve considerar o impacto nos produtos vinculados.

## Mensagens

- **Nenhuma categoria selecionada**
- **Selecione um registro para continuar**
- **Descrição obrigatória**
- **Código duplicado**
- **Categoria em uso**
- **Falha ao salvar**
- **Informações inválidas**
- **Os seguintes problemas foram encontrados:** + lista de validações
- **Categoria de produto do clube salva com sucesso**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Passo a passo recomendado

1. Acesse **Estabelecimento > Categorias de produtos do clube**.
2. Clique em **Novo** para cadastrar ou selecione um item e clique em **Editar selecionada**.
3. Preencha **Código/Identificador**, **Descrição da categoria** e **Situação**.
4. Clique em **Salvar**.
5. Para consulta sem edição, selecione o registro e clique em **Exibir detalhes**.
