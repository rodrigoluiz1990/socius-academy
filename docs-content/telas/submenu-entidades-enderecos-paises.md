---
tipo: tela
nome_tela: Países
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-enderecos-paises
---

## Objetivo

Documentar a operação da tela **Países**, usada para consultar, cadastrar, editar e detalhar países no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Endereços > Países

## Abas e campos da tela

### Tela: Países (principal)

- **Filtros:** permite pesquisar por Nome, Sigla, DDI e ZipCode.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, Sigla, DDI, Máscara telefônica e ZipCode).

### Tela: Novo/Editar país

### Aba: Informações básicas

- **Nome:** define o nome do país.
- **Sigla:** define a sigla do país.
- **DDI:** define o DDI do país.
- **Máscara telefônica:** define o formato de telefone do país.
- **Código zip:** define o formato do código postal do país.

### Tela: Detalhes do país

- Exibe os mesmos dados do cadastro (nome, sigla, DDI, máscara telefônica e código zip) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo país:** abre o formulário para cadastro de um novo país.
- **Editar país:** abre o formulário para edição do país selecionado.
- **Exibir detalhes:** abre a tela de detalhes do país selecionado.

### Novo/Editar país

- **Salvar:** grava o cadastro novo ou as alterações do país.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar um país no grid.
- **Brasil**, **Argentina**, **Paraguai** e **Estados Unidos** não podem ser editados.
- **Nome**, **Sigla**, **DDI** e **Máscara telefônica** são obrigatórios para salvar.
- **Sigla** não deve conter números e deve ter no máximo 3 caracteres.
- **DDI** deve conter apenas números e ter no máximo 4 caracteres.
- **Máscara telefônica** deve conter ao menos 7 caracteres e incluir `#`.
- **Máscara telefônica** não deve ser composta apenas por números.
- **Código zip**, quando informado, deve incluir `#` e ter no máximo 10 caracteres.
- Não é permitido salvar país com **nome duplicado**.
- Não é permitido salvar país com **sigla duplicada**.
- Se o país já possui cidades cadastradas com ZipCode, não é permitido reduzir o tamanho do ZipCode.

Campos obrigatórios mínimos para salvar:

- **Nome**
- **Sigla**
- **DDI**
- **Máscara telefônica**

## Mensagens

- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum país selecionado:** selecione um país na tabela antes de continuar.
- **País selecionado não pode ser editado:** os países Brasil, Argentina, Paraguai e Estados Unidos não podem ser editados.
- **Nenhum nome informado:** informe um nome para o país.
- **Nome duplicado:** o nome informado já está em uso em outro país.
- **Nenhuma sigla informada:** informe uma sigla para o país.
- **Sigla inválida:** a sigla não deve conter números e deve ter no máximo 3 caracteres.
- **Sigla duplicada:** a sigla informada já está em uso em outro país.
- **DDI obrigatório:** informe um DDI para o país.
- **DDI inválido:** o DDI deve conter apenas números e ter no máximo 4 caracteres.
- **Máscara telefônica obrigatória:** informe uma máscara telefônica para o país.
- **Máscara telefônica inválida:** a máscara telefônica deve conter ao menos 7 caracteres e incluir `#`.
- **DDI incorreto:** a máscara telefônica informada não deve conter números e deve incluir a máscara do campo.
- **Zip code incorreto:** o Zip code deve incluir `#` e não pode exceder 10 caracteres.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **País salvo:** confirma o salvamento.
- **Cancelar - Tem certeza que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Províncias:** utiliza o país para cadastro de províncias (quando aplicável).
- **Estados:** utiliza o país para cadastro de estados.
- **Cidades:** utiliza o país para cadastro de cidades.
- **Bairros:** utiliza o país para cadastro de bairros.
- **Endereços (cadastro de pessoas, agências, corretores, vendedores e estabelecimentos):** utiliza o país no cadastro de endereço.
- **Lojas:** utiliza o país no cadastro de loja.
- **Carteira de cobrança bancária:** utiliza o país no endereço da carteira.
- **Fiscal (NF-e / NFC-e / CFe):** utiliza o país nos dados de endereço do destinatário/retirada/entrega quando configurados.

### Cadastros necessários para preencher esta tela

- **Nenhum:** não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Entidades > Endereços > Países**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo país** para cadastrar, ou selecione um registro e clique em **Editar país**.
4. Informe **Nome**, **Sigla**, **DDI**, **Máscara telefônica** e **Código zip** (quando aplicável).
5. Clique em **Salvar** para concluir.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
