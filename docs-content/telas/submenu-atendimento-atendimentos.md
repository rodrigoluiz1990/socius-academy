---
tipo: tela
nome_tela: Atendimentos
menu: Atendimento
aplicacao: Retaguarda
slug: submenu-atendimento-atendimentos
---

## Objetivo

Documentar a operação da tela **Atendimentos**, usada para consultar atendimentos registrados no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Atendimento
- **Submenu:** Atendimentos

## Abas e campos da tela

### Tela: Atendimentos (principal)

- **Filtros:** permite pesquisar por Status do atendimento, Operador, Forma de atendimento, Assunto de atendimento, Data de início e Data de término.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Código, Assunto do atendimento, Forma do atendimento, Data de início, Operador e Status).

### Tela: Detalhes do atendimento

- **Código:** identifica o atendimento.
- **Data de início:** mostra quando o atendimento foi iniciado.
- **Data de término:** mostra quando o atendimento foi finalizado.
- **Operador:** indica o operador responsável pelo atendimento.
- **Local de atendimento:** informa o local de atendimento vinculado.
- **Dispositivo:** informa o dispositivo utilizado.
- **Sócio:** identifica o sócio atendido.
- **Título:** informa o título vinculado ao atendimento.
- **Status:** informa o status do atendimento.
- **Assunto de atendimento:** indica o assunto vinculado.
- **Forma de atendimento:** indica a forma utilizada.
- **Observações adicionais:** mostra observações registradas no atendimento.

## Botões da tela

### Tela principal

- **Exibir detalhes:** abre a tela de detalhes do atendimento selecionado.

## Regras e comportamentos importantes

- Para **exibir detalhes**, é necessário selecionar um atendimento no grid.
- O **duplo clique** em um registro do grid também abre os detalhes.
- Para filtros por **Data de início** e **Data de término**, as datas informadas devem ser válidas.

## Mensagens

- **Falha ao inicializar preview das informações:** contate o suporte para maiores informações.
- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum atendimento selecionado:** selecione um registro para continuar.
- **A data inicial é inválida:** informe uma data inicial válida.
- **A data final é inválida:** informe uma data final válida.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Detalhes do atendimento:** utiliza os dados do atendimento para exibir as informações completas do registro.
- **Histórico de atendimento:** utiliza os dados do atendimento para consulta e detalhamento.
- **Relatório de atendimento (consolidado/detalhado):** utiliza os dados do atendimento para relatórios e filtros.
- **Fechamento forçado de atendimento:** utiliza o atendimento para finalização de pendências.

### Cadastros necessários para preencher esta tela

- **Nenhum:** não há dependência de cadastro prévio para consulta; os registros são gerados pelos atendimentos realizados.

## Passo a passo recomendado

1. Acesse **Atendimento > Atendimentos**.
2. Use o **Filtro** para localizar os registros desejados.
3. Selecione um atendimento no grid.
4. Clique em **Exibir detalhes** para consultar as informações completas.
