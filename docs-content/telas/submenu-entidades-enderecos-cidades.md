---
tipo: tela
nome_tela: Cidades
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-enderecos-cidades
---

## Objetivo

Documentar a operação da tela **Cidades**, usada para consultar, cadastrar, editar e detalhar cidades no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Endereços > Cidades

## Abas e campos da tela

### Tela: Cidades (principal)

- **Filtros:** permite pesquisar por Nome, CEP, Estado, Província e País.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, CEP, Estado, Província e País).

### Tela: Novo/Editar cidade

### Aba: Informações básicas

- **Nome:** define o nome da cidade.
- **CEP:** define o CEP da cidade.
- **País:** define o país para a seleção de província e estado.
- **Província:** define a província (quando aplicável) para filtrar estados.
- **Estado:** vincula a cidade ao estado selecionado.
- **Cód. IBGE:** define o código IBGE da cidade (quando aplicável).

### Tela: Detalhes da cidade

- Exibe os mesmos dados do cadastro (nome, CEP, país, província, estado e cod. IBGE) em modo de consulta.

## Botões da tela

### Tela principal

- **Nova cidade:** abre o formulário para cadastro de uma nova cidade.
- **Editar cidade:** abre o formulário para edição da cidade selecionada.
- **Exibir detalhes:** abre a tela de detalhes da cidade selecionada.

### Novo/Editar cidade

- **Salvar:** grava o cadastro novo ou as alterações da cidade.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar uma cidade no grid.
- **Nome**, **CEP**, **País** e **Estado** são obrigatórios para salvar.
- **Província** é obrigatória quando o **País Argentina** estiver selecionado.
- Não é permitido salvar cidade com **nome duplicado** dentro do mesmo estado.
- Não é permitido salvar cidade com **CEP duplicado**.

Campos obrigatórios mínimos para salvar:

- **País**
- **Estado**
- **Nome**
- **CEP**

## Mensagens

- **Falha ao iniciar busca:** entre em contato com o suporte para maiores informações.
- **Nenhuma cidade selecionada:** selecione uma cidade na tabela antes de continuar.
- **Nenhum nome informado:** informe um nome para a cidade.
- **Nenhum CEP informado:** informe um CEP para a cidade.
- **Nenhum estado selecionado:** escolha um estado e tente novamente.
- **Nenhum país foi informado:** escolha um país e tente novamente.
- **Nenhuma província selecionada:** quando o país Argentina for selecionado, a província deve ser informada.
- **Nome duplicado:** já existe uma cidade com o mesmo nome neste estado.
- **CEP duplicado:** o CEP informado já está em uso.
- **Falha ao salvar:** verifique os dados informados e tente novamente.
- **Cidade salva:** confirma o salvamento.
- **Cancelar - Tem certeza que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Bairros:** utiliza a cidade para vincular o bairro ao endereço.
- **Endereços (cadastro de pessoas, agências, corretores, vendedores e estabelecimentos):** utiliza a cidade no cadastro de endereço.
- **Lojas:** utiliza a cidade no cadastro de loja.
- **Carteira de cobrança bancária:** utiliza a cidade no endereço da carteira.
- **Fiscal (NF-e / NFC-e / CFe):** utiliza a cidade nos dados de endereço do destinatário/retirada/entrega quando configurados.

### Cadastros necessários para preencher esta tela

- **Países:** é necessário selecionar o país para cadastro da cidade.
- **Estados:** é necessário selecionar o estado para cadastro da cidade.
- **Províncias:** necessário quando aplicável ao país selecionado.

## Passo a passo recomendado

1. Acesse **Entidades > Endereços > Cidades**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova cidade** para cadastrar, ou selecione um registro e clique em **Editar cidade**.
4. Selecione **País**, **Província** (quando aplicável) e **Estado** e informe **Nome**, **CEP** e **Cód. IBGE**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
