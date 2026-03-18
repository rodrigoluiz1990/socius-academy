---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Resultados
aplicacao: Resultados
slug: submenu-resultados-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Socius Resultados**, incluindo acesso, relatórios disponíveis e filtros usados na análise operacional.

## Contexto geral

O **Socius Resultados** é uma aplicação web de consulta gerencial usada por operadores autorizados para acompanhar indicadores da operação do clube em um único ambiente.

A aplicação concentra relatórios com visão analítica por período, permitindo acompanhar resultados de acesso, atendimento, caixa, consumos, receitas, vendas e outros indicadores sem executar consultas manuais em múltiplas telas.

Este manual ajuda o time a entender como acessar a aplicação, escolher o relatório correto e aplicar filtros para gerar análises confiáveis.

## Detalhes

- **Aplicação:** Resultados
- **Acesso:** navegador web
- **Origem das permissões:** cadastro de permissões do operador para relatórios do **Socius Resultados**

## Acesso e autenticação

### Tela: Login

- **Usuário:** identifica o operador que acessará a aplicação.
- **Senha:** autentica o acesso do operador.
- **Enviar:** valida credenciais e abre a página inicial com os relatórios permitidos.

### Mensagens de autenticação

- **Usuário e/ou senha inválidos:** exibida quando não existe operador válido com as credenciais informadas.
- **Operador inativo:** exibida quando o operador existe, mas está inativo.
- **Acesso negado:** exibida quando o operador não possui permissões para uso do **Socius Resultados**.
- **Falha ao efetuar login:** exibida quando há indisponibilidade de comunicação com o servidor.

## Seções da aplicação

### Seção: Relatórios disponíveis por permissão

- **Acessos**
- **Atendimentos**
- **Caixa**
- **Consumos**
- **Aluguéis**
- **Estacionamentos**
- **Receitas**
- **Valores em circulação**
- **Vendas de título de sócio**

### Seção: Filtros padrão dos relatórios

- **Período:** filtro principal presente em todos os relatórios.
- **Data inicial** e **Data final:** exibidos quando o período selecionado exige intervalo personalizado.

### Seção: Filtros adicionais por relatório

- **Caixa:** além de período/data, possui **Dependência do estabelecimento**, **Loja** e **Situação**.
- **Consumos:** além de período/data, possui **Dependência do estabelecimento** e **Loja**.
- **Valores em circulação:** utiliza **Período** como filtro principal.

## Regras e comportamentos importantes

- O menu lateral exibe apenas os relatórios permitidos ao operador autenticado.
- A opção **Período** controla a necessidade de informar **Data inicial** e **Data final**.
- Na etapa de geração, a aplicação exibe estado de processamento até concluir o relatório solicitado.
- Em falha de comunicação/geração, a aplicação orienta revisão dos filtros e nova tentativa.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de consulta gerencial.

### Cadastros/configurações necessários

- **Operadores do sistema** com credenciais válidas para autenticação.
- Permissões de relatórios do **Socius Resultados** atribuídas ao operador.
- Cadastros operacionais do Retaguarda alimentados (acesso, atendimento, caixa, consumos, receitas, vendas etc.) para geração dos dados analíticos.

## Passo a passo recomendado

1. Acesse a URL da aplicação **Socius Resultados**.
2. Informe **Usuário** e **Senha** e clique em **Enviar**.
3. No menu lateral, escolha o relatório desejado.
4. Defina o **Período** e, quando necessário, informe **Data inicial** e **Data final**.
5. Nos relatórios que possuem filtros adicionais, selecione **Dependência do estabelecimento**, **Loja** e/ou **Situação**.
6. Clique em **Gerar relatório** e aguarde o processamento.
