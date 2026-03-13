---
tipo: tela
nome_tela: Tipos de licenças de uso
menu: Títulos de sócio
aplicacao: Retaguarda
slug: submenu-titulos-de-socio-tipos-de-licencas-de-uso
---

## Objetivo

Documentar a operação da tela **Tipos de licenças de uso**, usada para consultar, cadastrar, editar, detalhar e ativar/desativar tipos de licença de uso no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Títulos de sócio
- **Submenu:** Tipos de licenças de uso

## Abas e campos da tela

### Tela: Tipos de licenças de uso (principal)

- **Filtros:** permite pesquisar por Descrição, Modo de cobrança e Ciclo de cobrança.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Valor de adesão, Modo de cobrança, Ciclo de cobrança, Valor por ciclo e Situação).

### Tela: Novo/Editar tipo de licença de uso

- **Descrição:** identifica o tipo de licença de uso.
- **Modo de cobrança:** define como o valor da licença é cobrado (por título ou por sócio, conforme opção selecionada).
- **Ciclo de cobrança:** define a periodicidade da cobrança da licença.
- **Valor por ciclo:** informa o valor cobrado em cada ciclo.
- **Valor de adesão:** informa o valor inicial de adesão da licença.
- **Valor de cancelamento:** informa o valor aplicado no cancelamento da licença, quando houver.
- **Ciclos de validade:** quando habilitado, define por quantos ciclos a licença permanece válida.
- **Data inicial de venda:** define a data inicial para permitir venda/uso do tipo de licença.
- **Data final de venda:** define a data final para permitir venda/uso do tipo de licença.
- **Tipos de título que podem utilizar a licença:** lista os tipos de título permitidos para esse tipo de licença.
- **Selecionar todos:** marca/desmarca todos os tipos de título da lista.

### Tela: Detalhes do tipo de licença de uso

- Exibe os mesmos dados do cadastro (descrição, modo/ciclo de cobrança, valores, validade, período de venda e tipos de título permitidos) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo tipo de licença de uso:** abre o formulário para cadastro de um novo tipo de licença de uso.
- **Editar selecionado:** abre o formulário para edição do tipo de licença de uso selecionado.
- **Exibir detalhes:** abre a tela de detalhes do tipo de licença de uso selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do tipo de licença de uso selecionado.

### Novo/Editar tipo de licença de uso

- **Salvar:** grava o cadastro novo ou as alterações.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **exibir detalhes** ou **desativar/ativar**, é necessário selecionar um registro no grid.
- **Descrição** é obrigatória para salvar.
- Não é permitido salvar tipo com **descrição duplicada**.
- A **data final de venda** não pode ser anterior à **data inicial de venda**.
- É obrigatório selecionar **pelo menos um tipo de título** na lista de tipos permitidos.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- Pelo menos um item em **"Tipos de título que podem utilizar a licença"**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Falha ao inicializar preview das informações:** entre em contato com o suporte para maiores informações.
- **Nenhum tipo de licença de uso selecionado:** selecione um registro para continuar.
- **Desativar ou ativar - Tem certeza de que deseja bloquear/desbloquear o tipo de licença de uso "..."?:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar. Tente novamente.:** tente novamente.
- **Informações inválidas - O preenchimento da descrição é obrigatório:** informe a descrição e tente salvar novamente.
- **Informações inválidas - Os seguintes problemas foram encontrados:** corrija os problemas listados e tente novamente.
- **Informação duplicada - A descrição do tipo de licença "..." já está cadastrada no sistema:** use uma descrição diferente.
- **Período de venda inválido - A data final de venda não pode ser anterior a data inicial:** ajuste o período de venda e tente salvar novamente.
- **Informações incompletas - É necessário informar pelo menos um tipo de título para o tipo de licença de uso:** selecione ao menos um tipo de título.
- **Tipo de licença de uso salvo:** confirma o salvamento do cadastro.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Atendimento ao sócio (Licenças de uso):** utiliza os tipos de licença ativos na emissão, edição, detalhamento e cancelamento de licenças de uso do título.
- **Controle de acesso (Nova regra de acesso de entrada / Nova regra de acesso de saída):** permite configurar regra de acesso vinculada a um tipo de licença de uso.
- **Leitor facial (Novo leitor facial / Editar leitor facial):** permite vincular um tipo de licença de uso ao leitor facial.
- **Portal do Sócio (Licenças):** exibe para o sócio as licenças de uso emitidas para o título.

### Cadastros necessários para preencher esta tela

- **Tipos de título de sócio:** é necessário ter tipos de título cadastrados para selecionar quais podem utilizar o tipo de licença de uso.

## Passo a passo recomendado

1. Acesse **Títulos de sócio > Tipos de licenças de uso**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo tipo de licença de uso** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha os dados da tela, definindo descrição, modo/ciclo de cobrança, valores e período de venda.
5. Em **Tipos de título que podem utilizar a licença**, selecione ao menos um tipo de título permitido.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.


