---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Autoatendimento
aplicacao: Autoatendimento
slug: submenu-autoatendimento-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Autoatendimento**, incluindo fluxo de identificação, operações disponíveis ao usuário e configurações necessárias para funcionamento.

## Contexto geral

O **Autoatendimento** é uma aplicação de uso presencial no terminal/kiosk do estabelecimento, criada para que o próprio cliente execute operações de cartão de consumo com autonomia.

Após a identificação da pulseira/cartão, o usuário pode acessar operações como **Recarga** (ou **Pagar fatura**, conforme modo de operação), **Extrato** e **Estacionamento**, reduzindo filas e atendimentos operacionais no caixa.

Este manual orienta o time interno sobre o fluxo da aplicação para apoiar usuários durante o atendimento no terminal.

## Detalhes

- **Aplicação:** Autoatendimento
- **Acesso:** aplicação desktop (terminal físico)
- **Origem das permissões/regras:** configurações de dispositivo e autoatendimento no Retaguarda

## Acesso e início de atendimento

### Tela: Início

- Exibe mensagem de toque para começar.
- Direciona para seleção de idioma e identificação do usuário.

### Tela: Idioma

- Permite seleção de idioma da interface (PT/ES/EN).

### Tela: Identificação do cliente

- Solicita aproximação de pulseira/cartão no leitor (NFC/cartão, conforme dispositivo).
- Valida ativação do cartão antes de liberar operações.

## Seções da aplicação

### Seção: Operações principais

- **Recarga** ou **Pagar fatura:** a opção exibida depende do modo de operação configurado para o cartão.
- **Extrato:** consulta dados do cartão e permite impressão de extrato por intervalo de datas.
- **Estacionamento:** consulta ticket e permite pagamento quando aplicável.
- **Sair / Cancelar operação:** encerra atendimento ou cancela operação em andamento.

### Seção: Pagamento

- Fluxo de pagamento via **Crédito** ou **Débito**.
- Exibe telas de sucesso/falha e etapa de impressão de comprovantes/documentos.

## Regras e comportamentos importantes

- A tela lateral de ações é habilitada após identificação válida da pulseira/cartão.
- Em modo pós-pago, o botão principal exibe **Pagar fatura**; nos demais modos, exibe **Recarga**.
- O tempo de encerramento automático do atendimento depende da configuração do dispositivo.
- No fluxo de estacionamento, a pulseira usada no pagamento deve corresponder ao atendimento iniciado.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada para atendimento em terminal.

### Cadastros/configurações necessários

- **Dispositivos de acesso:** dispositivo configurado com **Autoatendimento** habilitado.
- **Dispositivos de acesso (aba Autoatendimento):** operador de caixa automático, meios TEF e tempo de fechamento configurados.
- **Informações do estabelecimento (aba Autoatendimento):** mensagens e elementos visuais usados na interface.
- **Cartões de consumo e carteirinhas de sócio:** cartões/pulseiras válidos para identificação e operação.
- Integrações e periféricos operacionais do terminal (leitor, pinpad e impressora) configurados.

## Passo a passo recomendado

1. Inicie a aplicação no terminal de autoatendimento.
2. Toque na tela para começar e selecione o idioma.
3. Identifique-se aproximando a pulseira/cartão no leitor.
4. Escolha a operação desejada: **Recarga/Pagar fatura**, **Extrato** ou **Estacionamento**.
5. Quando houver pagamento, selecione **Crédito** ou **Débito** e finalize a transação.
6. Aguarde a impressão dos comprovantes/documentos quando aplicável.
7. Encerre o atendimento em **Sair** ou aguarde o encerramento automático.
