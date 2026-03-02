---
tipo: tela
nome_tela: Categorias de produtos do clube
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-categorias-de-produtos-do-clube
---

## Objetivo

Documentar a operação da tela **Categorias de produtos do clube**, usada para consultar, cadastrar, editar e organizar a hierarquia de categorias dos produtos do clube.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Categorias de produtos do clube

## Abas e campos da tela

### Tela: Categorias de produtos do clube (principal)

- **Filtros:** permite pesquisar categorias por critérios como descrição e categoria pai.
- **Grid:** exibe os registros salvos com base nos filtros utilizados.

### Tela: Novo/Editar categoria de produto do clube

- **Descrição:** define o nome da categoria.
- **Possui categoria pai:** habilita/desabilita o vínculo hierárquico com uma categoria superior.
- **Categoria pai:** define a categoria superior da categoria em edição, quando aplicável.

### Tela: Detalhes da categoria de produto do clube

- Exibe os mesmos campos do cadastro em modo somente leitura para consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Nova categoria:** abre o formulário de cadastro.
- **Editar selecionado:** abre o formulário para edição da categoria selecionada.
- **Exibir detalhes:** abre a tela de detalhes da categoria selecionada.

### Novo/Editar

- **Salvar:** grava o cadastro ou as alterações da categoria.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar uma categoria no grid.
- A categoria filha não pode ser igual à categoria pai.
- Não é permitido salvar duas categorias com a mesma descrição.
- Não é permitido salvar categorias com mais de 5 níveis de parentesco.
- Não é permitido criar vínculo circular de hierarquia (categoria pai descendente da própria categoria).
- Ao desmarcar **Possui categoria pai**, o vínculo de categoria pai é removido.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** utilizar quando a falha de busca persistir.
- **Nenhuma categoria selecionada:** selecione um registro no grid para continuar.
- **Selecione um registro para continuar:** clique em uma categoria antes de editar ou exibir detalhes.
- **Falha ao salvar:** revise os dados informados e tente novamente.
- **Categoria filha não pode ser igual categoria pai:** ajuste a categoria pai selecionada.
- **Descrição inválida:** verifique a descrição da categoria e tente salvar novamente.
- **Nenhuma descrição foi informada para a categoria de produto do clube:** preencha o campo **Descrição**.
- **Os seguintes problemas foram encontrados:** + lista de validações. Corrija cada item e tente novamente.
- **Não é permitido que a categoria tenha mais que 5 níveis de parentesco:** revise a hierarquia e reduza os níveis.
- **Descrição duplicada:** informe uma descrição diferente da já cadastrada.
- **A descrição informada já está em uso por outra categoria de produto de clube:** altere para um nome único.
- **A categoria selecionada "X" não pode ser pai da categoria "Y":** selecione outra categoria pai para evitar hierarquia circular.
- **Verifique as informações e tente novamente:** confirme os dados e repita a operação.
- **Categoria adicionada:** cadastro concluído; o sistema pergunta se deseja adicionar uma nova categoria.
- **Gostaria de adicionar uma nova?**
- **Categoria atualizada:** edição concluída com sucesso.
- **A categoria de produto do clube foi atualizada com sucesso**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

### Onde este cadastro é utilizado

- **Produtos do clube:** utiliza as categorias para classificar os produtos no cadastro/edição.
- **Relatórios:** utiliza as categorias como base de filtro e agrupamento em relatórios de produtos do clube e vendas de produtos do clube.

### Cadastros necessários para preencher esta tela

Não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Estabelecimento > Categorias de produtos do clube**.
2. Use os **Filtros** para localizar uma categoria existente, se necessário.
3. Clique em **Nova categoria** para cadastrar, ou selecione um item e clique em **Editar selecionado**.
4. Preencha **Descrição** e, quando necessário, marque **Possui categoria pai** e informe a **Categoria pai**.
5. Clique em **Salvar**.
6. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
