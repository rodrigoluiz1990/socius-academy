---
tipo: tela
nome_tela: Províncias
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-enderecos-provincias
---

## Objetivo

Documentar a operação da tela **Províncias**, usada para consultar, cadastrar, editar e detalhar províncias no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Endereços > Províncias

## Abas e campos da tela

### Tela: Províncias (principal)

- **Filtros:** permite pesquisar por Província e País.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Província e País).

### Tela: Nova/Editar província

### Aba: Informações básicas

- **Nome:** define o nome da província.
- **País:** define o país da província.

### Tela: Detalhes da província

- Exibe os mesmos dados do cadastro (nome e país) em modo de consulta.

## Botões da tela

### Tela principal

- **Nova província:** abre o formulário para cadastro de uma nova província.
- **Editar província:** abre o formulário para edição da província selecionada.
- **Exibir detalhes:** abre a tela de detalhes da província selecionada.

### Nova/Editar província

- **Salvar:** grava o cadastro novo ou as alterações da província.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar uma província no grid.
- **Nome** é obrigatório para salvar.
- Não é permitido salvar província para **Brasil**, **Paraguai** ou **Estados Unidos**.
- Não é permitido salvar província com **nome duplicado** dentro do mesmo país.

Campos obrigatórios mínimos para salvar:

- **País**
- **Nome**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhuma província selecionada:** selecione uma província na tabela antes de continuar.
- **Nenhum nome informado:** informe um nome para a província.
- **País não permitido:** não é possível configurar uma província para o país selecionado.
- **Nome duplicado:** o nome informado já está em uso em outra província.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Província salva:** confirma o salvamento.
- **Cancelar - Tem certeza que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Estados:** utiliza a província para vincular o estado ao endereço.
- **Cidades:** utiliza a província para filtrar estados e vincular a cidade ao endereço.
- **Bairros:** utiliza a província para filtrar estados e vincular o bairro ao endereço.
- **Endereços (cadastro de pessoas, agências, corretores, vendedores e estabelecimentos):** utiliza a província no cadastro de endereço quando aplicável.
- **Lojas:** utiliza a província no cadastro de loja quando aplicável.
- **Carteira de cobrança bancária:** utiliza a província no endereço da carteira quando aplicável.
- **Fiscal (NF-e / NFC-e / CFe):** utiliza a província nos dados de endereço do destinatário/retirada/entrega quando configurados.

### Cadastros necessários para preencher esta tela

- **Países:** é necessário selecionar o país para cadastro da província.

## Passo a passo recomendado

1. Acesse **Entidades > Endereços > Províncias**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova província** para cadastrar, ou selecione um registro e clique em **Editar província**.
4. Selecione **País** e informe o **Nome** da província.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
