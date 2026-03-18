---
tipo: tela
nome_tela: Visão geral da aplicação
menu: PDV
aplicacao: PDV
slug: submenu-pdv-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **PDV**, incluindo login, navegação por comandos, operações disponíveis e configurações necessárias para operação do ponto de venda.

## Contexto geral

O **PDV** é uma aplicação desktop de operação presencial usada para realizar vendas e operações de caixa no estabelecimento.

A navegação principal funciona por comandos digitados na tela inicial, com acesso rápido a operações de cartão, consumo, aluguel, estacionamento, estornos, reimpressões e rotinas de caixa.

## Detalhes

- **Aplicação:** PDV
- **Acesso:** aplicação desktop
- **Origem das configurações:** telas de cadastro/configuração no Retaguarda

## Acesso e autenticação

### Tela: Login

- Autentica o operador por usuário e senha.
- Valida permissões e situação do operador para uso do PDV.
- Valida contexto do caixa antes de liberar o acesso operacional.

### Tela: Ponto de venda

- Exibe os dados da operação atual: empresa, loja, PDV, caixa e data de abertura.
- Permite digitar o código da ação para abrir a operação desejada.

## Seções da aplicação

### Seção: Operações principais

- `1`: Ativação de cartão.
- `2`: Bloqueio de cartão.
- `3`: Recarga de saldo.
- `4`: Transferência de saldo.
- `5`: Venda ou aluguel.
- `6`: Troca de aluguel.
- `7`: Devolução de produtos.
- `8`: Devolução de saldo.
- `9`: Perca de aluguel.
- `10`: Perca de cartão.
- `11`: Extrato do cartão.
- `12`: Estacionamento.

### Seção: Caixa e suporte operacional

- `C1`: Suprimento de caixa.
- `C2`: Sangria de caixa.
- `E`: Estorno de transações.
- `I`: Reimpressão de comprovante.
- `R`: Relatórios.
- `S`: Menu gerencial SiTef.
- `B`: Bloquear PDV.
- `X`: Fechar caixa.

## Regras e comportamentos importantes

- A operação depende de caixa válido e contexto de operador autenticado.
- Comandos inválidos retornam aviso de comando desconhecido.
- Algumas operações podem exigir permissões específicas de operador/supervisor.
- O bloqueio do PDV preserva a sessão para retomada operacional no mesmo caixa.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de operação.

### Cadastros/configurações necessários

- **Dispositivos de acesso ao sistema:** cadastro e configuração do dispositivo usado como PDV.
- **Operadores do sistema:** usuários e permissões para autenticação e execução das operações.
- **Caixa consulta:** caixa disponível para abertura/uso no dispositivo.
- **Lojas:** vínculo da loja utilizada na operação do PDV.
- **Cartões de consumo e carteirinhas de sócio:** base para operações de ativação, bloqueio, recarga, extrato e transferência.
- **Produtos de consumo:** base para venda e devolução de consumo.
- **Produtos de aluguel:** base para venda/aluguel, troca, devolução e perca de aluguel.
- **Estacionamentos:** base para operações de estacionamento no PDV.

## Passo a passo recomendado

1. Confirme os cadastros e configurações no Retaguarda (dispositivo, operador, caixa, loja e produtos).
2. Abra o **PDV** no equipamento operacional.
3. Realize login com usuário e senha do operador autorizado.
4. Na tela **Ponto de venda**, digite o código da ação desejada e pressione `Enter`.
5. Execute a operação conforme o fluxo da tela aberta.
6. Use `I` para reimpressões e `E` para estornos quando necessário.
7. Ao final da operação, use `X` para fechar caixa ou `B` para bloquear o PDV.
