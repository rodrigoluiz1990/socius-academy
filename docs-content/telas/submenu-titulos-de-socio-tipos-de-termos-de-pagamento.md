---
tipo: tela
nome_tela: Tipos de termos de pagamento
menu: Títulos de sócio
aplicacao: Retaguarda
slug: submenu-titulos-de-socio-tipos-de-termos-de-pagamento
---

## Objetivo

Documentar a operação da tela **Tipos de termos de pagamento**, usada para consultar, cadastrar, editar, ativar/desativar e detalhar tipos de termos de pagamento no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Títulos de sócio
- **Submenu:** Tipos de termos de pagamento

## Abas e campos da tela

### Tela: Tipos de termos de pagamento (principal)

- **Filtros:** permite pesquisar por Descrição.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Prazo máximo de validade, Prazo padrão de validade e Ativo).

### Tela: Novo/Editar tipo de termo de pagamento

- **Descrição:** identifica o tipo de termo de pagamento.
- **Prazo máximo de validade:** define o limite máximo (em dias) para a validade do termo a partir da data de emissão.
- **Prazo padrão de validade:** define o prazo padrão (em dias) aplicado automaticamente na criação do termo.
- **Conteúdo do termo:** define o texto base do termo de pagamento.

### Tela: Detalhes do tipo de termo de pagamento

- Exibe os mesmos dados do cadastro (descrição, prazos, ativo e conteúdo) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo tipo de termo:** abre o formulário para cadastro de um novo tipo.
- **Editar selecionado:** abre o formulário para edição do tipo selecionado.
- **Exibir detalhes:** abre a tela de detalhes do tipo selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do tipo selecionado.

### Novo/Editar tipo de termo de pagamento

- **Salvar:** grava o cadastro novo ou as alterações do tipo de termo.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **desativar/ativar**, é necessário selecionar um registro no grid.
- O **prazo máximo de validade** deve ser maior ou igual ao **prazo padrão de validade**.
- **Descrição** e **conteúdo do termo** são obrigatórios.
- Não é permitido salvar um tipo com **descrição duplicada**.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- **Conteúdo do termo**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum tipo de termo de pagamento selecionado:** selecione um registro para continuar.
- **Desativar ou ativar - Tem certeza de que deseja bloquear/desbloquear?:** confirma a alteração de situação do tipo.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar:** tente novamente.
- **Informações inválidas - O prazo máximo deve ser maior ou igual ao prazo padrão:** ajuste os prazos informados.
- **Informações inválidas - A descrição do tipo de termo de pagamento é obrigatória:** informe a descrição e tente salvar novamente.
- **Informações inválidas - O conteúdo do tipo de termo de pagamento é obrigatório:** informe o conteúdo e tente salvar novamente.
- **Descrição duplicada:** a descrição informada já está cadastrada. Use uma descrição diferente.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Tipo de termo de pagamento salvo:** confirma o salvamento do cadastro.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Termos de pagamento (Atendimento ao Sócio):** utiliza o tipo de termo na criação de termos vinculados ao título de sócio.

### Cadastros necessários para preencher esta tela

- Não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Títulos de sócio > Tipos de termos de pagamento**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo tipo de termo** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha **Descrição**, **Prazos de validade** e **Conteúdo do termo**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
