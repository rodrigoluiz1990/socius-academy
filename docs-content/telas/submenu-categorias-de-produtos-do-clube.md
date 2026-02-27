---
tipo: tela
nome_tela: Categorias de produtos do clube
menu: Estabelecimento
módulo: Retaguarda
versão_minima: 1.9.13
slug: submenu-categorias-de-produtos-do-clube
---

## Objetivo

Organizar os produtos do clube por categorias para facilitar cadastro, consulta e relatórios.

## Identificacao da tela

- **Nome da tela:** Categorias de produtos do clube
- **Form:** CategoriasProdutosClubeForm
- **Menu/Caminho:** Estabelecimento > Categorias de produtos do clube

## Funcionalidades principais

- Cadastrar categoria.
- Alterar categoria.
- Inativar categoria sem excluir historico.
- Vincular categoria a regras de negocio (quando aplicavel).

## Campos comuns

- **Descrição da categoria**
- **Codigo/Identificador**
- **Situacao (ativo/inativo)**

## Passo a passo basico

1. Acessar **Estabelecimento > Categorias de produtos do clube**.
2. Clicar em **Novo**.
3. Informar descrição e codigo.
4. Salvar.
5. Confirmar categoria disponivel para uso no cadastro de produtos.

## Erros e mensagens comuns

- **Descrição obrigatoria:** preencher nome da categoria.
- **Codigo duplicado:** informar codigo nao utilizado.
- **Categoria em uso:** ao tentar inativar, validar impacto nos produtos vinculados.

