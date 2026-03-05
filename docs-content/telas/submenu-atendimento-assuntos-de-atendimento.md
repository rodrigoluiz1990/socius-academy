---
tipo: tela
nome_tela: Assuntos de atendimento
menu: Atendimento
aplicacao: Retaguarda
slug: submenu-atendimento-assuntos-de-atendimento
---

## Objetivo

Documentar a operação da tela **Assuntos de atendimento**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar assuntos de atendimento no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Atendimento
- **Submenu:** Assuntos de atendimento

## Abas e campos da tela

### Tela: Assuntos de atendimento (principal)

- **Filtros:** permite pesquisar por Descrição, Categoria e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Categoria e Situação).

### Tela: Novo/Editar assunto de atendimento

### Aba: Informações básicas

- **Descrição:** define o nome do assunto de atendimento.
- **Categoria:** vincula o assunto a uma categoria de atendimento.

### Tela: Detalhes do assunto de atendimento

- Exibe os mesmos dados do cadastro (descrição, categoria e situação) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo assunto de atendimento:** abre o formulário para cadastro de um novo assunto.
- **Editar selecionado:** abre o formulário para edição do assunto selecionado.
- **Exibir detalhes:** abre a tela de detalhes do assunto selecionado.
- **Desativar ou ativar:** alterna a situação (ativo/inativo) do assunto selecionado mediante confirmação.

### Novo/Editar assunto de atendimento

- **Salvar:** grava o cadastro novo ou as alterações do assunto.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **ativar/desativar**, é necessário selecionar um **assunto de atendimento** no grid.
- **Descrição** e **Categoria** são obrigatórias para salvar.
- Não é permitido salvar assunto com **descrição duplicada**.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- **Categoria**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum assunto de atendimento selecionado:** selecione um registro para continuar.
- **Descrição inválida:** nenhuma descrição foi informada para o assunto de atendimento.
- **Descrição duplicada:** a descrição do assunto de atendimento já está cadastrada no sistema; informe uma descrição diferente.
- **Valores inválidos:** verifique os campos informados e tente novamente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Falha ao atualizar:** verifique as informações e tente novamente.
- **Assunto de atendimento adicionado:** confirma o cadastro e permite adicionar outro.
- **Assunto de atendimento atualizada:** confirma a atualização do cadastro.
- **Desativar ou ativar:** confirma a ação de bloquear/desbloquear o assunto de atendimento.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** erro ao alterar a situação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Atendimento (início/encerramento):** utiliza o assunto de atendimento ao registrar o atendimento.
- **Histórico de atendimento:** utiliza o assunto de atendimento como filtro.
- **Relatórios de atendimento (consolidado/detalhado):** utiliza o assunto de atendimento como filtro.
- **Fechamento forçado de atendimento:** utiliza o assunto de atendimento para finalizar atendimentos pendentes.
- **Convites (lote de convite):** utiliza o assunto de atendimento no vínculo do atendimento do lote.

### Cadastros necessários para preencher esta tela

- **Categorias de assunto de atendimento:** é necessário vincular a categoria ao assunto.

## Passo a passo recomendado

1. Acesse **Atendimento > Assuntos de atendimento**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo assunto de atendimento** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Informe a **Descrição** e selecione a **Categoria**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
