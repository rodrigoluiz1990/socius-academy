---
tipo: tela
nome_tela: Portal do sócio
menu: Sistema
aplicacao: Retaguarda
slug: submenu-sistema-configuracoes-paginas-online-portal-do-socio
---

## Objetivo

Documentar a operação da tela **Portal do sócio**, usada para definir quais recursos ficarão disponíveis para o sócio no portal web.

## Contexto geral

Esta tela existe para o operador definir, de forma centralizada, o que o sócio poderá visualizar e editar no **Portal do Sócio**.

O uso dessa configuração evita liberações indevidas, reduz dúvidas no atendimento e garante que o comportamento do portal siga as regras do estabelecimento.

Para o operador, esta tela é o ponto de controle para:

- Habilitar ou ocultar funcionalidades do portal.
- Permitir ou bloquear edição de dados pelo sócio.
- Controlar recursos sensíveis, como **Alterar foto** e **Pagamento de contas**.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Sistema
- **Submenu:** Configurações > Páginas online > Portal do sócio

## Abas e campos da tela

### Tela: Configurações do portal do sócio (principal)

### Seção: Título

- **Sócios:** habilita a consulta de sócios no portal.
- **Informações de contato:** habilita consulta das informações de contato.
- **Edição** (de Informações de contato): habilita alteração das informações de contato pelo sócio.
- **Carteirinhas:** habilita consulta de carteirinhas.
- **Alterar foto:** habilita alteração de foto no portal.
- **Licenças de uso:** habilita consulta de licenças de uso.
- **Forma de pagamento da manutenção:** habilita consulta da forma de pagamento da manutenção.
- **Edição** (de Forma de pagamento da manutenção): habilita alteração da forma de pagamento da manutenção.
- **Segunda via de contrato:** habilita emissão/consulta da segunda via de contrato.
- **Ingressos do sócio:** habilita consulta de ingressos do sócio.

### Seção: Financeiro

- **Contas pendentes:** habilita consulta de contas pendentes.
- **Contas pagas:** habilita consulta de contas pagas.
- **Contas renegociadas:** habilita consulta de contas renegociadas.
- **Pagamento de contas:** habilita pagamento de contas pendentes no portal.

### Seção: Histórico

- **Acessos ao estabelecimento:** habilita consulta de histórico de acessos.
- **Extrato de carteirinha:** habilita consulta do extrato de carteirinha.

### Seção: Privacidade

- **Alterar senha:** habilita alteração de senha do portal pelo sócio.

## Botões da tela

- **Salvar:** grava as configurações do portal do sócio.
- **Cancelar:** fecha a tela mediante confirmação.

## Regras e comportamentos importantes

- Ao marcar **Informações de contato**, o campo **Edição** correspondente é marcado automaticamente e fica habilitado.
- Ao desmarcar **Informações de contato**, o campo **Edição** correspondente é desmarcado automaticamente e fica desabilitado.
- Ao marcar **Forma de pagamento da manutenção**, o campo **Edição** correspondente é marcado automaticamente e fica habilitado.
- Ao desmarcar **Forma de pagamento da manutenção**, o campo **Edição** correspondente é desmarcado automaticamente e fica desabilitado.
- Ao marcar **Carteirinhas**, o campo **Alterar foto** é marcado automaticamente e fica habilitado.
- Ao desmarcar **Carteirinhas**, o campo **Alterar foto** é desmarcado automaticamente e fica desabilitado.
- A tela não exige campos mínimos obrigatórios; as opções são salvas conforme seleção.

## Mensagens

- **Configuração salva - A configuração do portal do sócio foi salva com sucesso.:** confirma o salvamento das alterações.
- **Falha ao salvar - Não foi possível salvar as configurações devido a um erro:** tente novamente após revisar a operação.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o fechamento sem salvar novas alterações.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Portal do Sócio (web):** aplica as permissões e recursos disponibilizados ao sócio na navegação do portal.
- **Atendimento ao sócio (Configuração de acesso ao portal do sócio):** utiliza as regras globais definidas para acesso e edição de dados no portal.

### Cadastros necessários para preencher esta tela

- Não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Sistema > Configurações > Páginas online > Portal do sócio**.
2. Marque as opções que deseja disponibilizar ao sócio nas seções **Título**, **Financeiro**, **Histórico** e **Privacidade**.
3. Revise os campos de **Edição** e **Alterar foto**, que podem ser ajustados automaticamente conforme as opções principais.
4. Clique em **Salvar** para aplicar as configurações.
