---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Monitor de Acesso
aplicacao: Monitor de Acesso
slug: submenu-monitor-de-acesso-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Monitor de Acesso**, incluindo fluxo operacional, monitoramento em tempo real e regras principais de envio/validação para leitores de acesso.

## Contexto geral

O **Monitor de Acesso** é uma aplicação desktop de operação contínua, usada para controlar e acompanhar os eventos de entrada e saída nos pontos de acesso do estabelecimento.

Ele centraliza a comunicação com dispositivos de acesso (como catracas e leitores faciais), valida regras operacionais e registra os eventos para consulta e auditoria. Na prática, a aplicação ajuda a equipe a manter o fluxo de acesso funcionando com segurança e rastreabilidade.

Este manual orienta o time interno sobre o uso da aplicação no dia a dia, facilitando diagnóstico de ocorrências, conferência de status e suporte operacional.

## Detalhes

- **Aplicação:** Monitor de Acesso
- **Acesso:** aplicação desktop
- **Origem das configurações:** telas de cadastro/configuração no Retaguarda

## Seções da aplicação

### Seção: Dispositivos

- Exibe situação dos equipamentos configurados para operação.
- Apoia a identificação de falhas de comunicação com leitores/catracas.

### Seção: Monitoramento

- Exibe eventos de acesso em tempo real.
- Mostra resultados de validação (acesso liberado, negado e motivo).
- Permite acompanhamento da comunicação com dispositivos vinculados.

## Regras e comportamentos importantes

- A aplicação deve permanecer aberta durante a operação dos acessos.
- A liberação depende de cadastro válido da **Pessoa**, vínculo com **cartão/carteirinha** e regras do ponto de acesso.
- No uso de **leitor facial**, a pessoa precisa possuir **Foto** válida e dados de ativação consistentes.
- Instabilidade de rede entre monitor e dispositivo pode causar falhas de validação mesmo com cadastro correto.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de operação de acesso.

### Cadastros/configurações necessários

- **Dispositivos de acesso ao sistema:** cadastro e configuração do dispositivo responsável pelo monitor de acesso.
- **Catracas:** cadastro e configuração das catracas vinculadas à operação de acesso.
- **Acesso e capacidade do estabelecimento:** configurações gerais que impactam as regras operacionais de acesso.
- **Locais de acesso:** definição das regras do ponto de entrada/saída.
- **Tipos de entrada:** usado nas regras de validação de acesso.
- **Pessoas físicas e jurídicas:** dados cadastrais das pessoas que acessam o estabelecimento.
- **Cartões de consumo e carteirinhas de sócio:** identificação usada no controle de acesso.
- **Leitor facial:** configuração de comunicação e envio de foto quando a operação usar biometria facial.

## Passo a passo recomendado

1. Confirme os cadastros e configurações no Retaguarda.
2. Abra a aplicação **Monitor de Acesso** no equipamento operacional.
3. Verifique a conexão dos dispositivos e o início do monitoramento.
4. Acompanhe os eventos em tempo real e valide ocorrências de negação.
5. Em caso de erro recorrente, revise cadastro da pessoa, vínculo de cartão/carteirinha, foto (quando facial) e comunicação de rede.
