---
tipo: tela
nome_tela: Tipos de pendências
menu: Títulos de sócio
aplicacao: Retaguarda
slug: submenu-titulos-de-socio-tipos-de-pendencias
---

## Objetivo

Documentar a operação da tela **Tipos de pendências**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar tipos de pendência de título no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Títulos de sócio
- **Submenu:** Tipos de pendências

## Abas e campos da tela

### Tela: Tipos de pendências de título (principal)

- **Filtros:** permite pesquisar por Descrição.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição e Situação).

### Tela: Novo/Editar tipo de pendência de título

- **Descrição:** identifica o tipo de pendência de título.
- **Bloquear título:** define se a pendência, quando ativa no título, deve bloquear operações do título.

### Tela: Detalhes do tipo de pendência de título

- Exibe os mesmos dados do cadastro (descrição, situação e bloquear título) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo tipo:** abre o formulário para cadastro de um novo tipo de pendência.
- **Editar selecionado:** abre o formulário para edição do tipo de pendência selecionado.
- **Exibir detalhes:** abre a tela de detalhes do tipo de pendência selecionado.
- **Desativar ou ativar:** alterna a situação (ativo/inativo) do tipo de pendência selecionado.

### Novo/Editar tipo de pendência de título

- **Salvar:** grava o cadastro novo ou as alterações do tipo.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **desativar/ativar**, é necessário selecionar um registro no grid.
- **Descrição** é obrigatória para salvar.
- Não é permitido salvar tipo com **descrição duplicada**.
- A pesquisa da tela principal utiliza o campo **Descrição**.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum tipo de pendência de título selecionado:** selecione um registro para continuar.
- **Desativar ou ativar - Tem certeza de que deseja bloquear/desbloquear o tipo de pendência de título "...":** confirma a alteração de situação.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** erro ao alterar a situação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.
- **Valores inválidos - Os seguintes problemas foram encontrados:** corrija os problemas listados e tente novamente.
- **Valores inválidos - O preenchimento da descrição é obrigatório:** informe a descrição e tente novamente.
- **Descrição duplicada:** a descrição do tipo de pendência de título já está cadastrada no sistema; forneça uma descrição diferente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Falha ao atualizar:** verifique as informações e tente novamente.
- **Tipo de pendência adicionado - Gostaria de adicionar outro?:** confirma se deseja abrir novo cadastro após salvar.
- **Tipo de pendência atualizado:** confirma a atualização do cadastro.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Atendimento ao sócio (Pendências do título):** utiliza os tipos de pendência ativos para adicionar ou remover pendências no título durante o atendimento.

### Cadastros necessários para preencher esta tela

- Não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Títulos de sócio > Tipos de pendências**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo tipo** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha **Descrição** e, se necessário, marque **Bloquear título**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
