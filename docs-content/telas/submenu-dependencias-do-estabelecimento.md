---
tipo: tela
nome_tela: Dependências do estabelecimento
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-dependencias-do-estabelecimento
---

## Objetivo

Documentar a operação da tela **Dependências do estabelecimento**, usada para consultar, cadastrar e editar dependências vinculadas ao estabelecimento.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Dependências do estabelecimento

## Abas e campos da tela

### Tela: Dependências do estabelecimento (principal)

- **Filtros:** permite informar os critérios de busca (ex.: descrição) para localizar os registros.
- **Grid:** exibe os registros salvos com base nos filtros utilizados.

### Tela: Cadastro/Edição de dependência

- **Descrição:** define o nome da dependência (campo obrigatório).

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Nova dependência:** abre o formulário para incluir uma nova dependência.
- **Editar selecionada:** abre o formulário para editar a dependência selecionada.
- **Exibir detalhes:** abre a visualização da dependência selecionada em modo consulta.

### Cadastro/Edição

- **Salvar:** grava as alterações do cadastro.
- **Cancelar:** fecha o formulário mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar um registro na grade.
- Não é permitido salvar duas dependências com a mesma descrição.
- Ao clicar em **Cancelar**, o sistema solicita confirmação antes de fechar.

Campos obrigatórios mínimos para salvar:

- **Descrição**

## Mensagens

- **Falha ao inicializar busca:** recarregue a tela e tente novamente; se persistir, acione o suporte.
- **Entre em contato com o suporte para maiores informações:** utilizar quando a falha de inicialização continuar após nova tentativa.
- **Nenhuma dependência selecionada:** selecione um registro da grade antes de editar ou exibir detalhes.
- **Selecione um registro para continuar:** clique em uma linha da tabela para habilitar a ação desejada.
- **Falha ao salvar:** revise os dados informados e tente salvar novamente.
- **A descrição da dependência é obrigatória:** preencha o campo **Descrição** para continuar.
- **Descrição repetida:** informe uma descrição diferente da já cadastrada.
- **A descrição já está em uso por outra dependência:** altere para um nome único.
- **Informações inválidas:** revise os campos e corrija os dados fora do padrão esperado.
- **Os seguintes problemas foram encontrados:** + lista de validações. Corrija cada item e tente novamente.
- **Verifique as informações e tente novamente:** confirme os dados e repita a operação.
- **Dependência do estabelecimento salva**
- **A dependência do estabelecimento foi salva com sucesso**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Dependências entre telas

- **Dispositivo de acesso:** utiliza as dependências para vincular o local do dispositivo no cadastro/edição.
- **Dispositivo de consumo:** utiliza as dependências para vincular o local de operação do dispositivo.
- **Caixa:** utiliza as dependências em filtros e contexto de abertura/consulta de caixa.
- **Resultados (webapp):** utiliza a lista de dependências para composição de filtros e contexto dos relatórios exibidos.
- **Relatórios:** utiliza dependências como filtro em relatórios operacionais e financeiros (ex.: Dispositivo, Caixa, Movimento de caixa, Ticket médio e Valores em circulação).
- **Telas necessárias para realizar o cadastro desta tela:** não há dependência de cadastro prévio em outras telas.

## Passo a passo recomendado

1. Acesse **Estabelecimento > Dependências do estabelecimento**.
2. Use **Filtro por descrição** para localizar um registro, se necessário.
3. Clique em **Nova dependência** para cadastrar, ou selecione um item e clique em **Editar selecionada**.
4. Preencha/ajuste o campo **Descrição**.
5. Clique em **Salvar**.
6. Para consulta sem edição, selecione o registro e clique em **Exibir detalhes**.
