---
tipo: tela
nome_tela: Visão geral da aplicação
menu: Voucher
aplicacao: Voucher
slug: submenu-voucher-visao-geral-da-aplicacao
---

## Objetivo

Documentar a visão geral da aplicação **Voucher**, incluindo acesso, fluxos principais de compra e áreas de autoatendimento do usuário.

## Contexto geral

O **Voucher** é uma aplicação web para venda online de produtos do estabelecimento, com foco em emissão de ingressos e títulos, além de itens complementares como combos e estacionamento quando habilitados.

Quem utiliza a aplicação é o cliente final (sócio ou não sócio, conforme regras da venda), realizando cadastro/login, seleção de produtos, pagamento e confirmação diretamente pelo navegador.

Este manual orienta o time interno sobre o funcionamento da aplicação para apoiar usuários em dúvidas de acesso, compra, pagamento e consulta de informações no painel de controle.

## Detalhes

- **Aplicação:** Voucher
- **Acesso:** navegador web
- **Origem das permissões/regras:** configurações de venda online no Retaguarda

## Acesso e autenticação

### Tela: Login e cadastro

- **Quero criar uma conta:** inicia fluxo de cadastro do usuário a partir do e-mail.
- **Já tenho cadastro:** autentica com **E-mail / CPF / CNPJ** e **Senha**.
- **Esqueci minha senha:** direciona para recuperação de senha por e-mail.

### Tela: Recuperar senha

- **E-mail:** informa o e-mail cadastrado para solicitar a recuperação de senha.
- **Enviar:** dispara o processo de recuperação.

## Seções da aplicação

### Seção: Compra online

- **Ingressos:** fluxo de seleção de campanha/dia/produto, termos, pagamento e confirmação.
- **Títulos:** fluxo de seleção de campanha/plano de venda, termos/contrato, pagamento e confirmação.
- **Combos:** itens de combo vinculados à campanha de venda, quando configurados.
- **Estacionamento:** produtos de estacionamento vinculados a campanha de venda, quando configurados.
- **Carrinho:** consolida itens selecionados para seguir ao pagamento.

### Seção: Pagamento

- Seleção de modalidade/meio de pagamento conforme opções habilitadas.
- Confirmação de compra após validação de dados e pagamento.

### Seção: Painel de controle (Meus Dados)

- **Compras:** consulta de compras de ingressos e títulos.
- **Meus dados:** visão consolidada das informações do usuário.
- **Alterar senha de acesso:** atualização da senha da conta.
- **Alterar informações pessoais:** atualização de dados pessoais.
- **Alterar e-mail:** atualização do e-mail da conta.
- **Alterar telefone:** atualização do telefone de contato.
- **Alterar endereço:** atualização do endereço cadastrado.

## Regras e comportamentos importantes

- A disponibilidade de produtos e fluxos depende das configurações ativas de venda online no Retaguarda.
- O usuário precisa estar autenticado para acessar recursos de **Meus Dados** e histórico de compras.
- Itens como combos e estacionamento aparecem apenas quando vinculados e liberados na campanha/plano de venda.
- Sem configurações válidas de campanha/plano/permissão, o fluxo de compra pode não apresentar opções ao usuário.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de venda online.

### Cadastros/configurações necessários

- **Venda pela internet:** configurações gerais da venda online ativas no Retaguarda.
- **Planos de venda:** definição dos produtos e regras de comercialização.
- **Campanhas de venda internet:** definição dos **planos de venda**, **combos** e **produtos de estacionamento** da venda online.
- **Combos de venda internet:** composição dos combos quando esse recurso estiver habilitado.
- **Produtos de estacionamento:** cadastro necessário para oferta de estacionamento no fluxo online.
- **Configurações de e-mail:** necessárias para recuperação de senha e notificações do processo de compra.

## Passo a passo recomendado

1. Acesse a URL configurada em uma das **campanhas de venda internet**.
2. Quando a URL for de **ingresso**: selecione a data que deseja ir ao estabelecimento, adicione os ingressos que deseja adquirir e siga para a próxima etapa.
3. Quando a URL for de **título**: selecione o título que deseja adquirir e siga para a próxima etapa.
4. Adicione itens complementares, quando disponíveis, e avance para a próxima etapa.
5. Escolha entre cadastrar nova conta ou entrar com credenciais existentes.
6. Aceite os termos do estabelecimento.
7. Realize o pagamento e conclua a compra.
8. Use **Meus Dados** para consultar compras e manter dados cadastrais atualizados.
