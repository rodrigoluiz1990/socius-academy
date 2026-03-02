---
tipo: tela
nome_tela: Produtos do clube
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-produtos-do-clube
---

## Objetivo

Documentar a operação da tela **Produtos do clube**, usada para consultar, cadastrar, editar, clonar e ativar/desativar produtos do clube.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Produtos do clube

## Abas e campos da tela

### Tela: Produtos do clube (principal)

- **Filtros:** permite pesquisar produtos por critérios como descrição e categoria.
- **Grid:** exibe os registros salvos com base nos filtros utilizados.

### Tela: Novo/Editar produto do clube

- **Descrição:** define o nome do produto.
- **Valor unitário:** define o valor de venda do produto.
- **Categoria:** vincula o produto a uma categoria de produtos do clube.
- **Observações:** registra informações complementares do produto.
- **Início da validade para venda:** define a data inicial de comercialização.
- **Fim da validade para venda:** define a data final de comercialização (opcional).

### Tela: Detalhes do produto do clube

- Exibe os mesmos campos do cadastro em modo somente leitura para consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo produto do clube:** abre o formulário de cadastro.
- **Editar selecionado:** abre o formulário para edição do item selecionado.
- **Desativar ou ativar:** altera o status do produto selecionado.
- **Exibir detalhes:** abre a tela de detalhes do produto selecionado.
- **Clonar:** abre a tela de novo cadastro com os dados copiados do registro selecionado no grid.

### Novo/Editar

- **Salvar:** grava o cadastro ou as alterações do produto.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar**, **desativar/ativar**, **exibir detalhes** ou **clonar**, é necessário selecionar um produto no grid.
- Não é permitido salvar dois produtos com a mesma descrição.
- A **data final de validade** não pode ser menor que a **data inicial de validade**.
- A ação **Desativar ou ativar** exige confirmação antes de salvar a alteração.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- **Categoria**
- **Início da validade para venda**
- **Valor unitário**

## Mensagens

- **Falha ao inicializar preview das informações:** recarregue a tela; se persistir, acione o suporte.
- **Contate o suporte para maiores informações:** utilizar quando a falha de preview continuar.
- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** utilizar quando a falha de busca persistir.
- **Nenhum produto selecionado:** selecione um registro no grid para continuar.
- **Selecione um registro para continuar:** clique em um item antes de executar a ação.
- **Nenhum produto de clube selecionado:** selecione um item da tabela para clonar.
- **Selecione um item na tabela para continuar:** clique em um item antes de clonar.
- **Desativar ou ativar:** confirmação para bloquear/desbloquear o produto selecionado.
- **Bloquear ou desbloquear:** confirmação de sucesso da alteração de status.
- **Ação realizada com sucesso:** status do produto alterado corretamente.
- **Falha ao salvar. Tente novamente.:** revise os dados e tente novamente.
- **Não foi possível clonar o produto:** tente novamente; se persistir, acione o suporte.
- **Descrição inválida:** verifique a descrição do produto e tente salvar novamente.
- **Nenhuma descrição foi informada para o produto do clube:** preencha o campo **Descrição**.
- **Descrição repetida:** informe uma descrição diferente da já cadastrada.
- **A descrição já está em uso por outro produto:** altere para um nome único.
- **Valores inválidos:** corrija os campos informados na validação.
- **Os seguintes problemas foram encontrados:** + lista de validações. Corrija cada item e tente novamente.
- **Dados inválidos:** revise datas, categoria e demais campos obrigatórios.
- **Data inicial de validade do produto não pode ser superior a data final:** ajuste o período de validade informado.
- **Falha ao salvar. Verifique as informações e tente novamente.:** corrija os dados e repita a operação.
- **Produto adicionado:** cadastro concluído com sucesso.
- **O produto do clube foi adicionado com sucesso.**
- **Produto atualizado:** edição concluída com sucesso.
- **O produto do clube foi atualizado com sucesso.**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

### Onde este cadastro é utilizado

- **Categorias de produtos do clube:** utiliza as categorias para vincular cada produto no cadastro/edição.
- **Venda de produtos do clube:** utiliza os produtos cadastrados nesta tela para operações de venda.
- **Planos de venda:** utiliza produtos do clube como itens elegíveis em configurações de plano.
- **Detalhes de cobrança:** utiliza o produto para detalhar itens financeiros vinculados à cobrança.
- **Relatórios:** utiliza os produtos como base de filtro e composição em relatórios de produto do clube e vendas de produto do clube.

### Cadastros necessários para preencher esta tela

- **Categorias de produtos do clube:** é necessário para vincular a categoria no cadastro/edição de produto.

## Passo a passo recomendado

1. Acesse **Estabelecimento > Produtos do clube**.
2. Use os **Filtros** para localizar um produto existente, se necessário.
3. Clique em **Novo produto do clube** para cadastrar, ou selecione um item e clique em **Editar selecionado**.
4. Preencha **Descrição**, **Valor unitário**, **Categoria**, **Início da validade para venda** e, se necessário, os demais campos.
5. Clique em **Salvar**.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
