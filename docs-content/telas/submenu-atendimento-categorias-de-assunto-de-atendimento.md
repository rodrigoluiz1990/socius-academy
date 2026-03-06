---
tipo: tela
nome_tela: Categorias de assunto de atendimento
menu: Atendimento
aplicacao: Retaguarda
slug: submenu-atendimento-categorias-de-assunto-de-atendimento
---

## Objetivo

Documentar a operação da tela **Categorias de assunto de atendimento**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar categorias de atendimento no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Atendimento
- **Submenu:** Categorias de assunto de atendimento

## Abas e campos da tela

### Tela: Categorias de assunto de atendimento (principal)

- **Filtros:** permite pesquisar por Descrição e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição e Situação).

### Tela: Nova/Editar categoria de atendimento

### Aba: Informações básicas

- **Descrição:** define o nome da categoria de atendimento.

### Tela: Detalhes da categoria de atendimento

- Exibe os mesmos dados do cadastro (descrição e situação) em modo de consulta.

## Botões da tela

### Tela principal

- **Nova categoria:** abre o formulário para cadastro de uma nova categoria.
- **Editar selecionada:** abre o formulário para edição da categoria selecionada.
- **Exibir detalhes:** abre a tela de detalhes da categoria selecionada.
- **Desativar ou ativar:** alterna a situação (ativo/inativo) da categoria selecionada mediante confirmação.

### Nova/Editar categoria de atendimento

- **Salvar:** grava o cadastro novo ou as alterações da categoria.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **ativar/desativar**, é necessário selecionar uma **categoria de atendimento** no grid.
- **Descrição** é obrigatória para salvar.
- Não é permitido salvar categoria com **descrição duplicada**.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhuma categoria de atendimento selecionada:** selecione um registro para continuar.
- **Descrição inválida:** nenhuma descrição foi informada para a categoria de assunto de atendimento.
- **Descrição duplicada:** a descrição da categoria de atendimento já está cadastrada no sistema; informe uma descrição diferente.
- **Valores inválidos:** verifique os campos informados e tente novamente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Falha ao atualizar:** verifique as informações e tente novamente.
- **Categoria de atendimento adicionada:** confirma o cadastro e permite adicionar outra.
- **Categoria de atendimento atualizada:** confirma a atualização do cadastro.
- **Desativar ou ativar:** confirma a ação de bloquear/desbloquear a categoria de atendimento.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** erro ao alterar a situação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Assuntos de atendimento:** utiliza a categoria para classificar os assuntos.

### Cadastros necessários para preencher esta tela

- **Nenhum:** não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Atendimento > Categorias de assunto de atendimento**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova categoria** para cadastrar, ou selecione um registro e clique em **Editar selecionada**.
4. Informe a **Descrição** da categoria.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
