---
tipo: tela
nome_tela: Produtos de estacionamento
menu: Estacionamento
aplicacao: Retaguarda
slug: submenu-estacionamento-produtos-de-estacionamento
---

## Objetivo

Documentar a operação da tela **Produtos de estacionamento**, usada para consultar, cadastrar, editar, clonar e ativar/desativar produtos de estacionamento.

## Contexto geral

A tela **Produtos de estacionamento** mantém o catálogo de produtos usados nas operações de entrada e pagamento de estacionamento. Nela são definidos valor por unidade de tempo, instruções impressas no ticket e restrições de uso por loja ou tipo de cartão de consumo, garantindo que cancelas, pagamentos e campanhas de venda internet utilizem regras padronizadas.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estacionamento
- **Submenu:** Produtos de estacionamento

## Abas e campos da tela

### Tela: Produtos de estacionamento (principal)

- **Filtros:** permite pesquisar por **Descrição**.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Unidade de tempo, Valor por unidade e Situação).

### Tela: Novo/Editar produto de estacionamento

- **Descrição:** define o nome do produto de estacionamento.
- **Valor por unidade:** define o valor por unidade de tempo.
- **Unidade de tempo:** define a unidade de tempo da cobrança.
- **Instruções:** define o texto impresso no ticket de estacionamento (opcional).
- **Permite desconto automático:** habilita desconto automático para o produto.
- **Valores alternativos:** permite cadastrar valores por tipo de cartão de consumo.
- **Limitar pagamento deste produto nas lojas selecionadas abaixo:** restringe as lojas autorizadas.
- **Limitar pagamento deste produto para os tipos de cartão de consumo selecionados abaixo:** restringe os tipos de cartão autorizados.

### Tela: Detalhes do produto de estacionamento

- Exibe os mesmos campos do cadastro em modo somente leitura para consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo produto:** abre o formulário de cadastro.
- **Editar selecionado:** abre o formulário para edição do item selecionado.
- **Ativar ou desativar:** altera o status do produto selecionado.
- **Exibir detalhes:** abre a tela de detalhes do produto selecionado.
- **Clonar:** abre a tela de novo cadastro com os dados copiados do registro selecionado no grid.

### Novo/Editar produto de estacionamento

- **Salvar:** grava o cadastro ou as alterações do produto.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Adicionar:** inclui novo valor alternativo.
- **Remover selecionado:** remove o valor alternativo selecionado.

## Regras e comportamentos importantes

- Para **editar**, **ativar/desativar**, **exibir detalhes** ou **clonar**, é necessário selecionar um produto no grid.
- Não é permitido salvar dois produtos com a mesma descrição.
- A **Unidade de tempo** deve ser selecionada para salvar.
- O **Valor por unidade** deve ser maior ou igual a zero.
- Quando a restrição por lojas estiver habilitada, é obrigatório selecionar ao menos uma loja.
- Quando a restrição por tipo de cartão de consumo estiver habilitada, é obrigatório selecionar ao menos um tipo de cartão.

Campos obrigatórios mínimos para salvar:

- **Descrição**
- **Unidade de tempo**
- **Valor por unidade**

## Mensagens

- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de busca persistir.
- **Nenhum produto selecionado:** selecione um registro no grid para continuar.
- **Selecione um item na tabela para continuar:** clique em um item antes de executar a ação.
- **Nenhum produto de estacionamento selecionado:** selecione um registro no grid para clonar.
- **Desativar ou ativar:** confirmação para ativar/desativar o produto selecionado.
- **Ação realizada com sucesso:** status do produto alterado corretamente.
- **Falha ao salvar:** revise os dados e tente novamente.
- **Não foi possível atualizar o produto no momento:** tente novamente; se persistir, acione o suporte.
- **Não foi possível salvar o produto de estacionamento:** revise os dados e tente novamente.
- **Não foi possível clonar o produto:** tente novamente; se persistir, acione o suporte.
- **Descrição inválida:** revise a descrição e tente salvar novamente.
- **O preenchimento da descrição do produto é obrigatória:** informe a descrição para continuar.
- **A descrição está em uso em outro produto:** informe uma descrição diferente.
- **Nenhuma unidade de tempo selecionada:** selecione a unidade de tempo.
- **A seleção da unidade de tempo é obrigatória:** selecione uma unidade para salvar.
- **Valor por unidade de tempo inválido:** corrija o valor informado.
- **O valor por unidade de tempo deve ser igual ou superior a zero:** ajuste o campo **Valor por unidade**.
- **Nenhuma loja selecionada:** selecione pelo menos uma loja quando a restrição estiver habilitada.
- **Nenhum tipo de cartão de consumo selecionado:** selecione pelo menos um tipo de cartão quando a restrição estiver habilitada.
- **Nenhum valor selecionado:** selecione um valor alternativo para remover.
- **Para remover um valor, primeiro selecione-o na tabela:** clique no valor desejado e repita a ação.
- **Remover valor alternativo:** confirmação para exclusão de valor alternativo.
- **Tem certeza de que deseja remover?**
- **Produto de estacionamento salvo:** cadastro/edição concluído com sucesso.
- **O produto de estacionamento foi salvo com sucesso.**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

### Onde este cadastro é utilizado

- **Cancelas:** utiliza o produto de estacionamento na configuração de operação da cancela.
- **Pagamentos de estacionamento:** utiliza o produto de estacionamento no cálculo e registro do pagamento.
- **Campanhas de venda internet:** utiliza os produtos de estacionamento como itens de venda online quando configurados.
- **Aplicação Voucher:** utiliza os produtos de estacionamento publicados em campanhas de venda internet.
- **Relatório detalhado de produtos de estacionamento:** utiliza os produtos para emissão do relatório analítico.
- **Relatórios de estacionamento (entrada, saída e pagamento):** utilizam os produtos como base de filtro e composição de resultados.

### Cadastros necessários para preencher esta tela

- Não há dependência de cadastro prévio em outras telas.
- **Lojas:** necessário quando houver restrição de pagamento por loja.
- **Tipos de cartão de consumo:** necessário quando houver restrição por tipo de cartão.

## Passo a passo recomendado

1. Acesse **Estacionamento > Produtos de estacionamento**.
2. Use o **Filtro** por descrição para localizar um produto existente, se necessário.
3. Clique em **Novo produto** para cadastrar, ou selecione um item e clique em **Editar selecionado**.
4. Preencha os campos principais (**Descrição**, **Unidade de tempo** e **Valor por unidade**).
5. Se necessário, preencha **Instruções**, configure valores alternativos e aplique restrições por loja/tipo de cartão.
6. Clique em **Salvar**.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.

