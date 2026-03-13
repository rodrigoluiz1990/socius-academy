---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Portal do Sócio
aplicacao: Portal do Sócio
slug: submenu-portal-do-socio-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Portal do Sócio**, incluindo acesso, seções disponíveis ao sócio e relação com as configurações do Retaguarda.

## Detalhes

- **Aplicação:** Portal do Sócio
- **Acesso:** navegador web
- **Origem das permissões:** tela **Sistema > Configurações > Páginas online > Portal do sócio** (Retaguarda)

## Acesso e autenticação

### Tela: Login

- **Código do título:** identifica o título para autenticação no portal.
- **Senha:** autentica o acesso do usuário.
- **Não sei minha senha:** direciona para recuperação de senha.

### Tela: Recuperar senha de acesso

- **Código do título:** solicita envio das instruções de troca/cadastro de senha.

### Tela: Alterar senha de acesso

- **Nova senha:** define nova senha de acesso.
- **Confirmação da senha:** confirma a nova senha informada.

## Seções da aplicação

### Seção: Título

- **Sócios:** permite consultar os sócios vinculados ao título.
- **Informações de contato:** permite consultar dados de contato e endereço do título/sócio.
- **Carteirinhas:** permite consultar carteirinhas e, quando habilitado, atualizar foto.
- **Licenças de uso:** permite consultar as licenças de uso vinculadas ao título.
- **Forma de pagamento da manutenção:** permite consultar (e, quando habilitado, editar) dados de cobrança da manutenção.
- **Segunda via de contrato:** permite visualizar/imprimir o contrato do título.
- **Ingressos de convidado:** permite consultar ingressos de convidado vinculados ao título.

### Seção: Financeiro

- **Contas pendentes:** exibe contas em aberto e, quando permitido, inicia o fluxo de pagamento.
- **Contas pagas:** exibe o histórico de contas já liquidadas.
- **Contas renegociadas:** exibe o histórico de contas renegociadas.
- **Detalhes da conta:** exibe informações completas da conta selecionada (valores, vencimento, forma de pagamento e itens).

### Seção: Histórico

- **Acessos ao estabelecimento:** permite consultar o histórico de entradas no estabelecimento.
- **Extrato de carteirinha:** permite consultar movimentações e histórico da carteirinha.

### Seção: Privacidade

- **Alterar senha:** permite alterar a senha de acesso do portal.

## Regras e comportamentos importantes

- O menu exibido ao sócio depende das permissões configuradas na tela **Configurações do Portal do Sócio**.
- Itens não habilitados na tela **Configurações do Portal do Sócio** não aparecem para o usuário final.
- A opção de pagamento no fluxo de **Contas pendentes** depende da permissão de pagamento habilitada na tela **Configurações do Portal do Sócio**.
- A opção de edição de dados de contato depende do campo **Edição** vinculado a **Informações de contato** na tela **Configurações do Portal do Sócio**.
- A opção de edição da forma de pagamento depende do campo **Edição** vinculado a **Forma de pagamento da manutenção** na tela **Configurações do Portal do Sócio**.
- A opção de alteração de foto depende dos campos **Carteirinhas** e **Alterar foto** na tela **Configurações do Portal do Sócio**.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada.

### Cadastros/configurações necessários

- **Configuração do portal do sócio** ativa e salva no Retaguarda.
- **Título de sócio** com credencial válida para autenticação.
- **Dados de contato do estabelecimento** configurados para suporte ao sócio (telefone/e-mail exibidos no portal).

## Passo a passo recomendado

1. Configure as permissões do portal em **Sistema > Configurações > Páginas online > Portal do sócio**.
2. Acesse o **Portal do Sócio** pela URL disponibilizada pelo estabelecimento.
3. Realize login com **Código do título** e **Senha**.
4. Navegue pelas seções **Título**, **Financeiro**, **Histórico** e **Privacidade** conforme permissões habilitadas.
5. Em caso de bloqueio de acesso, utilize **Não sei minha senha** ou a tela de recuperação de senha.
