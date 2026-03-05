---
tipo: tela
nome_tela: Estados
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-enderecos-estados
---

## Objetivo

Documentar a operação da tela **Estados**, usada para consultar, cadastrar, editar e detalhar estados no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Endereços > Estados

## Abas e campos da tela

### Tela: Estados (principal)

- **Filtros:** permite pesquisar por Nome, Sigla, Província e País.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, Sigla, Província e País).

### Tela: Novo/Editar estado

### Aba: Informações básicas

- **Nome:** define o nome do estado.
- **Sigla:** define a sigla do estado.
- **País:** define o país para a seleção de província.
- **Província:** define a província (quando aplicável).

### Tela: Detalhes do estado

- Exibe os mesmos dados do cadastro (nome, sigla, província e país) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo estado:** abre o formulário para cadastro de um novo estado.
- **Editar estado:** abre o formulário para edição do estado selecionado.
- **Exibir detalhes:** abre a tela de detalhes do estado selecionado.

### Novo/Editar estado

- **Salvar:** grava o cadastro novo ou as alterações do estado.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar um estado no grid.
- **Nome** e **País** são obrigatórios para salvar.
- **Sigla** deve conter no máximo 3 caracteres alfanuméricos.
- **Província** é obrigatória quando o **País Argentina** estiver selecionado.
- Não é permitido salvar estado com **nome duplicado** dentro do mesmo país.
- Não é permitido salvar estado com **sigla duplicada** dentro do mesmo país.

Campos obrigatórios mínimos para salvar:

- **País**
- **Nome**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum estado selecionado:** selecione um estado na tabela antes de continuar.
- **Nenhum nome informado:** informe um nome para o estado.
- **Nenhum país informado:** informe um país.
- **Sigla inválida:** a sigla deve conter no máximo 3 caracteres alfanuméricos.
- **Nenhuma província informada:** quando o país Argentina for selecionado, a província deve ser informada.
- **Nome duplicado:** o nome informado já está em uso em outro estado.
- **Sigla duplicada:** a sigla informada já está em uso em outro estado deste país.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Estado salvo:** confirma o salvamento.
- **Cancelar - Tem certeza que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Cidades:** utiliza o estado para vincular a cidade ao endereço.
- **Bairros:** utiliza o estado para vincular o bairro ao endereço.
- **Endereços (cadastro de pessoas, agências, corretores, vendedores e estabelecimentos):** utiliza o estado no cadastro de endereço.
- **Lojas:** utiliza o estado no cadastro de loja.
- **Carteira de cobrança bancária:** utiliza o estado no endereço da carteira.
- **Fiscal (NF-e / NFC-e / CFe):** utiliza o estado nos dados de endereço do destinatário/retirada/entrega quando configurados.

### Cadastros necessários para preencher esta tela

- **Países:** é necessário selecionar o país para cadastro do estado.
- **Províncias:** necessário quando aplicável ao país selecionado.

## Passo a passo recomendado

1. Acesse **Entidades > Endereços > Estados**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo estado** para cadastrar, ou selecione um registro e clique em **Editar estado**.
4. Selecione **País**, **Província** (quando aplicável) e informe **Nome** e **Sigla**.
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
