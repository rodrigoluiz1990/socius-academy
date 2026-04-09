---
tipo: tela
nome_tela: Grupos de operadores do sistema
menu: Sistema
aplicacao: Retaguarda
slug: submenu-sistema-grupos-de-operadores-do-sistema
---

## Objetivo

Documentar a operação da tela **Grupos de operadores do sistema**, usada para consultar, cadastrar e editar grupos de permissão de operadores.

## Contexto geral

A tela **Grupos de operadores do sistema** centraliza o perfil de acesso que será aplicado aos operadores. Nela são definidas as permissões por módulo do sistema, permitindo padronizar acessos por função e reduzir ajustes individuais de permissão para cada operador.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Sistema
- **Submenu:** Grupos de operadores do sistema

## Abas e campos da tela

### Tela: Grupos de operadores do sistema (principal)

- **Filtros:** permite pesquisar por **Descrição**, **Operador**, **Possui a permissão** e **Não possui a permissão**.
- **Grid:** exibe os grupos salvos com base nos filtros utilizados (coluna **Nome**).

### Tela: Novo/Editar grupo de operadores

- **Descrição:** define o nome do grupo de operadores.
- **Observações adicionais:** permite registrar observações internas do grupo.
- **Permissões por módulo:** define, por módulo do sistema, o nível de acesso concedido ao grupo.
- **Pesquisar módulo/permissão:** localiza módulos na lista de permissões por texto.
- **Localizar próximo (>):** navega entre os próximos resultados da pesquisa de permissões.

### Tela: Detalhes do grupo de operadores

- Exibe os mesmos dados de cadastro e permissões em modo somente leitura para consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo grupo:** abre o formulário de cadastro.
- **Editar selecionado:** abre o formulário para edição do grupo selecionado.
- **Exibir detalhes:** abre a tela de detalhes do grupo selecionado.

### Novo/Editar grupo de operadores

- **Salvar:** grava o cadastro ou as alterações do grupo e suas permissões.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Pesquisar:** localiza módulos/permissões pelo termo informado.
- **> (Localizar próximo):** avança para o próximo resultado encontrado na busca de permissões.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar um grupo no grid.
- Não é permitido salvar dois grupos com a mesma descrição.
- Ao salvar, o sistema regrava as permissões do grupo conforme a seleção atual da tela.
- Após adicionar um novo grupo, o sistema pergunta se deseja abrir um novo cadastro.
- A busca de permissões destaca os módulos encontrados e permite navegar entre eles.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** utilizar quando a falha de busca persistir.
- **Nenhum grupo selecionado:** selecione um registro para continuar.
- **Selecione um registro para continuar:** clique em um item do grid antes de executar a ação.
- **Descrição inválida:** informe a descrição do grupo.
- **Nenhuma descrição informada para o grupo de operadores:** preencha o campo **Descrição**.
- **Descrição duplicada:** revise a descrição e tente salvar novamente.
- **A descrição informada já está em uso por outro grupo de operadores:** informe uma descrição diferente.
- **Informações inválidas:** revise os campos e permissões informados.
- **Os seguintes problemas foram encontrados:** corrija os itens listados e tente novamente.
- **Falha ao salvar:** tente novamente; se persistir, acione o suporte.
- **Não foi possível salvar o grupo de operadores no momento:** revise os dados e repita a operação.
- **Grupo de operadores adicionado:** confirmação após inclusão de novo grupo.
- **Gostaria de adicionar outro?**
- **Grupo de operadores atualizado:** confirmação após edição.
- **O grupo de operadores foi atualizado com sucesso.**
- **Nenhum resultado encontrado:** revise o termo da busca de permissões.
- **Os termos informados para a busca não retornaram nenhum resultado válido.**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

### Onde este cadastro é utilizado

- **Operadores do sistema:** utiliza os grupos para vincular permissões aos operadores.
- **Relatório consolidado de operadores:** utiliza grupo de operador como filtro.
- **Relatório detalhado de permissões de operador:** utiliza grupo de operador como filtro.

### Cadastros necessários para preencher esta tela

- Não há dependência de cadastro prévio em outras telas.

## Mapa de permissões

### Permissão (nome da aba) -> onde é usada

[PERMISSOES_RETGUARDA]

### Como interpretar na prática

- A lista de permissões exibida no cadastro/edição do grupo é baseada no catálogo interno de módulos do sistema.
- Na tela, as permissões aparecem ordenadas por menu e por descrição; este mapa replica os mesmos nomes exibidos na aba de permissões.
- Cada permissão habilitada no grupo libera acesso e/ou operação na respectiva tela, conforme regra do módulo (consulta, edição, supervisão ou configuração).
## Passo a passo recomendado

1. Acesse **Sistema > Grupos de operadores do sistema**.
2. Use os **Filtros** para localizar um grupo existente, se necessário.
3. Clique em **Novo grupo** para cadastrar, ou selecione um item e clique em **Editar selecionado**.
4. Preencha a **Descrição** e, se necessário, **Observações adicionais**.
5. Defina as permissões por módulo conforme o perfil de acesso desejado.
6. Clique em **Salvar**.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.








