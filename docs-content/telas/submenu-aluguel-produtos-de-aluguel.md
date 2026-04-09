---
tipo: tela
nome_tela: Produtos de aluguel
menu: Aluguel
aplicacao: Retaguarda
slug: submenu-aluguel-produtos-de-aluguel
---

## Objetivo

Documentar a operação da tela **Produtos de aluguel**, usada para consultar, cadastrar, editar, clonar e ativar/desativar produtos de aluguel.

## Contexto geral

A tela **Produtos de aluguel** organiza o catálogo de itens que podem ser alugados no estabelecimento e define as regras comerciais aplicadas no dia a dia da operação. Ela centraliza preço de aluguel, valor de devolução, códigos de barras e possíveis restrições por loja ou por tipo de cartão de consumo, garantindo que as operações de aluguel, devolução, troca e perca utilizem dados consistentes.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Aluguel
- **Submenu:** Produtos de aluguel

## Abas e campos da tela

### Tela: Produtos de aluguel (principal)

- **Filtros:** permite pesquisar por **Descrição**, **Código de barras** e **Situação**.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Unidade de medida, Valor de venda, Valor de devolução e Ativo).

### Tela: Novo/Editar produto de aluguel

- **Descrição:** define o nome do produto de aluguel.
- **Valor de venda:** define o valor cobrado no aluguel.
- **Valor a devolver:** define o valor considerado na devolução.
- **Unidade de medida:** define a unidade de controle do produto.
- **Unidade de tempo:** define a unidade de tempo da cobrança.
- **Categoria:** vincula o produto a uma categoria de produto de aluguel.
- **Descrição longa:** permite adicionar orientações complementares.
- **Permitir desconto no aluguel de produtos:** habilita desconto automático para o produto.
- **Adicionar código (Formato/Código):** permite vincular códigos de barras ao produto.
- **Valores alternativos:** permite cadastrar valores por tipo de cartão de consumo.
- **Limitar venda deste produto nas lojas selecionadas abaixo:** restringe as lojas autorizadas para venda.
- **Limitar venda deste produto para os tipos de cartão de consumo selecionados abaixo:** restringe os tipos de cartão autorizados.

### Tela: Detalhes do produto de aluguel

- Exibe os mesmos campos do cadastro em modo somente leitura para consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo produto de aluguel:** abre o formulário de cadastro.
- **Editar selecionado:** abre o formulário para edição do item selecionado.
- **Ativar ou desativar:** altera o status do produto selecionado.
- **Exibir detalhes:** abre a tela de detalhes do produto selecionado.
- **Clonar:** abre a tela de novo cadastro com os dados copiados do registro selecionado no grid.

### Novo/Editar produto de aluguel

- **Salvar:** grava o cadastro ou as alterações do produto.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Adicionar:** inclui novo código de barras ou valor alternativo (conforme seção).
- **Remover selecionado:** remove o código/valor alternativo selecionado.
- **Gerar código automático:** gera o código automaticamente conforme o formato selecionado.

## Regras e comportamentos importantes

- Para **editar**, **ativar/desativar**, **exibir detalhes** ou **clonar**, é necessário selecionar um produto no grid.
- Não é permitido salvar dois produtos com a mesma descrição.
- O **Valor a devolver** deve ser maior ou igual a zero.
- O **Valor de venda** não pode ser menor que o **Valor a devolver**.
- A **Unidade de tempo** deve ser selecionada para salvar.
- Quando a restrição por lojas estiver habilitada, é obrigatório selecionar ao menos uma loja.
- Quando a restrição por tipo de cartão de consumo estiver habilitada, é obrigatório selecionar ao menos um tipo de cartão.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- **Categoria**
- **Unidade de tempo**
- **Valor de venda**
- **Valor a devolver**

## Mensagens

- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de busca persistir.
- **Falha ao inicializar preview das informações:** recarregue a tela e tente novamente.
- **Contate o suporte para maiores informações:** usar quando a falha de preview persistir.
- **Nenhum produto de aluguel selecionado:** selecione um registro no grid para continuar.
- **Selecione um item na tabela para continuar:** clique em um item antes de executar a ação.
- **Desativar ou ativar:** confirmação para ativar/desativar o produto selecionado.
- **Ação realizada com sucesso:** status do produto alterado corretamente.
- **Falha ao salvar:** revise os dados e tente novamente.
- **Verifique as informações e tente novamente.:** corrija os campos e repita a operação.
- **Não foi possível clonar o produto:** tente novamente; se persistir, acione o suporte.
- **Descrição inválida:** preencha a descrição do produto.
- **Nenhuma descrição foi informada para o produto de aluguel:** informe uma descrição para continuar.
- **Descrição duplicada:** revise a descrição e tente salvar novamente.
- **A descrição informada já está em uso por outro produto:** informe uma descrição diferente.
- **Valor inválido:** corrija o valor informado antes de salvar.
- **O valor de devolução deve ser zero ou maior que zero:** ajuste o campo **Valor a devolver**.
- **O valor de venda não pode ser menor que o valor de devolução:** ajuste os valores de venda/devolução.
- **Uma unidade de tempo deve ser selecionada:** selecione a unidade de tempo.
- **Valores inválidos:** revise os campos validados e tente novamente.
- **Os seguintes problemas foram encontrados:** corrija os itens listados na validação.
- **Nenhuma loja selecionada:** selecione pelo menos uma loja quando a restrição estiver habilitada.
- **Nenhum tipo de cartão de consumo selecionado:** selecione pelo menos um tipo de cartão quando a restrição estiver habilitada.
- **Produto salvo:** cadastro/edição concluído com sucesso.
- **O produto de aluguel foi salvo com sucesso.**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

### Onde este cadastro é utilizado

- **Aluguel:** utiliza os produtos de aluguel nas operações de aluguel.
- **Devolução:** utiliza os produtos vinculados ao aluguel no fluxo de devolução.
- **Troca:** utiliza os produtos de aluguel nas operações de troca.
- **Perca:** utiliza os produtos de aluguel nas operações de perca.
- **Relatório consolidado de produtos de aluguel:** utiliza os produtos de aluguel para consolidação por categoria e filtros.
- **Relatório detalhado de produtos de aluguel:** utiliza os produtos de aluguel para detalhamento analítico.
- **Relatório detalhado de códigos de barras de produtos de aluguel:** utiliza os códigos de barras vinculados ao produto.
- **Aplicação PDV:** utiliza os produtos de aluguel nas operações de aluguel da aplicação.

### Cadastros necessários para preencher esta tela

- **Categorias de produto de aluguel:** é necessário para vincular a categoria no cadastro/edição.
- **Lojas:** necessário quando houver restrição de venda por loja.
- **Tipos de cartão de consumo:** necessário quando houver restrição por tipo de cartão.

## Passo a passo recomendado

1. Acesse **Aluguel > Produtos de aluguel**.
2. Use os **Filtros** para localizar um produto existente, se necessário.
3. Clique em **Novo produto de aluguel** para cadastrar, ou selecione um item e clique em **Editar selecionado**.
4. Preencha os campos principais (**Descrição**, **Categoria**, **Unidade de tempo**, **Valor de venda** e **Valor a devolver**).
5. Se necessário, configure códigos de barras, valores alternativos e restrições por loja/tipo de cartão.
6. Clique em **Salvar**.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.

