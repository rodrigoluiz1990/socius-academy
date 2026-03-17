---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Meu Cartão
aplicacao: Meu Cartão
slug: submenu-meu-cartao-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Meu Cartão**, incluindo acesso, seções disponíveis ao usuário e relação com as configurações do Retaguarda.

## Contexto geral

O **Meu Cartão** é uma aplicação web usada por **sócios** e **clientes day use** para consultar e movimentar o cartão de consumo, com mais autonomia e menos necessidade de atendimento presencial nas operações básicas.

Quem acessa essa aplicação é o usuário final portador do cartão, com credenciais vinculadas ao seu cartão/título. Nesse ambiente, ele pode consultar **Extrato**, realizar **Recarga**, usar **Bloqueio/Desbloqueio**, consultar **Estacionamento** e, quando permitido, fazer **Transferência de saldo** e atualizar dados de acesso.

Este manual orienta o time interno sobre o funcionamento da aplicação do ponto de vista do portador do cartão, para melhorar o suporte em dúvidas de acesso, uso das funcionalidades e regras de disponibilidade dos recursos.

## Detalhes

- **Aplicação:** Meu Cartão
- **Acesso:** navegador web
- **Origem das permissões:** tela **Configurações do Socius Meu Cartão** (Retaguarda)

## Acesso e autenticação

### Tela: Login

- **Código do cartão:** identifica o cartão/título para autenticação.
- **Senha:** autentica o acesso do usuário.
- **Idioma:** define o idioma de uso da aplicação.

## Seções da aplicação

### Seção: Cartão de consumo

- **Extrato:** permite consultar movimentações do cartão em um período.
- **Recarga:** permite adicionar saldo ao cartão, conforme permissões e regras ativas.
- **Estacionamento:** permite consultar dados de tickets e valores de estacionamento.
- **Bloqueio/Desbloqueio:** permite bloquear ou desbloquear o cartão de consumo.
- **Transferência de saldo:** permite transferir saldo entre cartões.

### Seção: Cadastro

- **Alterar senha:** permite atualizar a senha de acesso da aplicação.
- **Alterar usuário:** permite alterar o nome de usuário de acesso.
- **Cartões de crédito:** permite salvar/manter cartões para uso em recargas.

## Regras e comportamentos importantes

- O menu exibido ao usuário depende das permissões habilitadas na tela **Configurações do Socius Meu Cartão**.
- A visibilidade das opções de **Recarga**, **Extrato**, **Transferência de saldo**, **Consulta de estacionamento** e **Pagamento de estacionamento** depende dos respectivos campos da tela **Configurações do Socius Meu Cartão**.
- A opção **Alterar senha** depende do campo **Trocar senha de acesso** na tela **Configurações do Socius Meu Cartão**.
- A opção **Alterar usuário** depende do campo **Trocar nome de usuário** na tela **Configurações do Socius Meu Cartão**.
- A opção **Cartões de crédito** depende do campo **Permitir salvar cartão de crédito** na tela **Configurações do Socius Meu Cartão**.
- Quando habilitado, o campo **Obrigar clientes a aceitar os termos de uso antes de usar a aplicação** exige aceite antes da navegação completa.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada.

### Cadastros/configurações necessários

- **Configurações do Socius Meu Cartão** ativa e salva no Retaguarda.
- **Pessoa** com **cartão de consumo/carteirinha de sócio** válido para autenticação.
- Configuração de **recarga** e meios de pagamento compatíveis quando a operação de recarga estiver habilitada.

## Passo a passo recomendado

1. Configure permissões em **Configurações do Socius Meu Cartão** no Retaguarda.
2. Acesse a URL da aplicação **Meu Cartão**.
3. Realize login com **Código do cartão**, **Senha** e **Idioma**.
4. Navegue pelas seções **Cartão de consumo** e **Cadastro** conforme permissões habilitadas.
5. Em caso de bloqueio de acesso, valide cadastro, situação do cartão e permissões da aplicação.
