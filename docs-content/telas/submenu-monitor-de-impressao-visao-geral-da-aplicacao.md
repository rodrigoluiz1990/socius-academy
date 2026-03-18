---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Monitor de Impressão
aplicacao: Monitor de Impressão
slug: submenu-monitor-de-impressao-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Monitor de Impressão**, incluindo acompanhamento das impressões, reimpressão de pedidos e principais requisitos de configuração.

## Contexto geral

O **Monitor de Impressão** é uma aplicação desktop usada na operação para identificar e imprimir automaticamente comandas pendentes de consumo e estorno, conforme as configurações de loja, dispositivo e local de impressão.

A aplicação também permite consultar o histórico de impressões já realizadas e executar reimpressões quando necessário.

## Detalhes

- **Aplicação:** Monitor de Impressão
- **Acesso:** aplicação desktop
- **Origem das configurações:** telas de cadastro/configuração no Retaguarda

## Seções da aplicação

### Seção: Status da aplicação

- **Situação:** mostra o estado atual do monitor (ex.: em modo de espera, preparando para imprimir).
- **Última atualização:** exibe a data/hora da última execução do monitor.

### Seção: Histórico de impressões

- Exibe os registros recentes no grid com colunas de tipo de impressão, data, consumo, loja, local de impressão e observações.
- Permite controlar a quantidade de itens exibidos no histórico.

### Seção: Outras ações

- **Reimprimir selecionado:** dispara nova impressão do registro selecionado no grid.
- **Exibir detalhes:** abre a tela de detalhes da impressão selecionada.

## Regras e comportamentos importantes

- O monitor executa verificações periódicas para localizar novas pendências de impressão.
- Ao iniciar, pode identificar pendências de impressão anteriores e solicitar confirmação para imprimir.
- Para reimpressão e detalhes, é obrigatório selecionar um registro no grid.
- Ao fechar a janela, o operador pode ocultar o monitor (executando em segundo plano) ou encerrar a aplicação.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de operação.

### Cadastros/configurações necessários

- **Dispositivos de acesso ao sistema:** cadastro e configuração do dispositivo usado para executar o monitor.
- **Lojas:** definição da loja vinculada ao dispositivo para roteamento das impressões.
- **Locais de impressão:** cadastro dos locais que ficam os monitores de impressão.
- **Produtos de consumo:** configuração dos locais de impressão dos produtos para direcionamento correto da comanda.

## Passo a passo recomendado

1. Confirme os cadastros e vínculos no Retaguarda (dispositivo, loja, locais de impressão e produtos de consumo).
2. Abra a aplicação **Monitor de Impressão** no equipamento operacional.
3. Verifique a **Situação** e a **Última atualização** para confirmar que o monitor está ativo.
4. Realize as vendas de **Produtos de Consumo** pelo Retaguarda, PDV ou POS.
5. Acompanhe o **Histórico de impressões** para validar as comandas processadas.
6. Quando necessário, selecione um registro e use **Reimprimir selecionado**.
7. Use **Exibir detalhes** para conferir os itens e informações da impressão.
