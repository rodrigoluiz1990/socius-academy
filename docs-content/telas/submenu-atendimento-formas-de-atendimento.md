---
tipo: tela
nome_tela: Formas de atendimento
menu: Atendimento
aplicacao: Retaguarda
slug: submenu-atendimento-formas-de-atendimento
---

## Objetivo

Documentar a operação da tela **Formas de atendimento**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar formas de atendimento no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Atendimento
- **Submenu:** Formas de atendimento

## Abas e campos da tela

### Tela: Formas de atendimento (principal)

- **Filtros:** permite pesquisar por Descrição e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição e Situação).

### Tela: Nova/Editar forma de atendimento

### Aba: Informações básicas

- **Descrição:** define o nome da forma de atendimento.

### Tela: Detalhes da forma de atendimento

- Exibe os mesmos dados do cadastro (descrição e situação) em modo de consulta.

## Botões da tela

### Tela principal

- **Nova forma de atendimento:** abre o formulário para cadastro de uma nova forma.
- **Editar selecionada:** abre o formulário para edição da forma selecionada.
- **Exibir detalhes:** abre a tela de detalhes da forma selecionada.
- **Desativar ou ativar:** alterna a situação (ativo/inativo) da forma selecionada mediante confirmação.

### Nova/Editar forma de atendimento

- **Salvar:** grava o cadastro novo ou as alterações da forma.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **ativar/desativar**, é necessário selecionar uma **forma de atendimento** no grid.
- **Descrição** é obrigatória para salvar.
- Não é permitido salvar forma com **descrição duplicada**.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhuma forma de atendimento selecionada:** selecione um registro para continuar.
- **Descrição inválida:** nenhuma descrição foi informada para a forma de atendimento.
- **Descrição duplicada:** a descrição da forma de atendimento já está cadastrada no sistema; informe uma descrição diferente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Falha ao atualizar:** verifique as informações e tente novamente.
- **Forma de atendimento adicionada:** confirma o cadastro e permite adicionar outra forma.
- **Forma de atendimento atualizada:** confirma a atualização do cadastro.
- **Desativar ou ativar:** confirma a ação de bloquear/desbloquear a forma de atendimento.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** erro ao alterar a situação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Atendimento (início/encerramento):** utiliza a forma de atendimento ao registrar o atendimento.
- **Assuntos de atendimento:** utiliza a forma de atendimento para vincular o assunto.
- **Histórico de atendimento:** utiliza a forma de atendimento como filtro.
- **Relatórios de atendimento (consolidado/detalhado):** utiliza a forma de atendimento como filtro.
- **Fechamento forçado de atendimento:** utiliza a forma de atendimento para finalizar atendimentos pendentes.

### Cadastros necessários para preencher esta tela

- **Nenhum:** não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Atendimento > Formas de atendimento**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova forma de atendimento** para cadastrar, ou selecione um registro e clique em **Editar selecionada**.
4. Informe a **Descrição** da forma.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
