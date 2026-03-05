---
tipo: tela
nome_tela: Locais de atendimento
menu: Atendimento
aplicacao: Retaguarda
slug: submenu-atendimento-locais-de-atendimento
---

## Objetivo

Documentar a operação da tela **Locais de atendimento**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar locais de atendimento no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Atendimento
- **Submenu:** Locais de atendimento

## Abas e campos da tela

### Tela: Locais de atendimento (principal)

- **Filtros:** permite pesquisar por Descrição e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição e Situação).

### Tela: Novo/Editar local de atendimento

### Aba: Informações básicas

- **Descrição:** define o nome do local de atendimento.

### Tela: Detalhes do local de atendimento

- Exibe os mesmos dados do cadastro (descrição e situação) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo local de atendimento:** abre o formulário para cadastro de um novo local.
- **Editar selecionado:** abre o formulário para edição do local selecionado.
- **Exibir detalhes:** abre a tela de detalhes do local selecionado.
- **Desativar ou ativar:** alterna a situação (ativo/inativo) do local selecionado mediante confirmação.

### Novo/Editar local de atendimento

- **Salvar:** grava o cadastro novo ou as alterações do local.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **ativar/desativar**, é necessário selecionar um local no grid.
- **Descrição** é obrigatória para salvar.
- Não é permitido salvar local com **descrição duplicada**.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum local de atendimento selecionado:** selecione um registro para continuar.
- **Descrição inválida:** nenhuma descrição foi informada para o local de atendimento.
- **Descrição duplicada:** a descrição do local de atendimento já está cadastrada no sistema; informe uma descrição diferente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Falha ao atualizar:** verifique as informações e tente novamente.
- **Local de atendimento atualizado:** confirma a atualização do cadastro.
- **Desativar ou ativar:** confirma a ação de bloquear/desbloquear o local de atendimento.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** erro ao alterar a situação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Dispositivos de atendimento:** utiliza o local para vincular o dispositivo ao ponto de atendimento.
- **Atendimento (início do atendimento):** utiliza o local vinculado ao dispositivo na identificação do atendimento.
- **Relatórios de atendimento (consolidado):** utiliza o local como filtro de relatório.
- **Relatórios de caixa (consolidado):** utiliza o local como filtro de relatório.
- **Relatórios de valores em circulação:** utiliza o local como filtro de relatório.

### Cadastros necessários para preencher esta tela

- **Nenhum:** não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Atendimento > Locais de atendimento**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo local de atendimento** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Informe a **Descrição** do local.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
