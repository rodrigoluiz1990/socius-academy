---
tipo: tela
nome_tela: Combo de ingressos
menu: Vendas
aplicacao: Retaguarda
slug: submenu-vendas-combos-de-venda-internet
---

## Objetivo

Documentar a operação da tela **Combo de ingressos** (menu **Combos de venda internet**), utilizada para cadastrar e manter combos vendidos nos canais online.

## Contexto geral

A tela **Combo de ingressos** permite agrupar mais de um item em um único combo para venda na internet. Esse cadastro é usado para montar ofertas com validade, quantidade mínima/máxima e itens vinculados, que depois podem ser disponibilizados em campanhas online.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Vendas
- **Submenu:** Combos de venda internet
- **Título da janela:** Combo venda online

## Abas e campos da tela

### Tela principal: Combo venda online

- **Filtros:** pesquisa de combos para refinar os registros exibidos.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, Início validade, Fim validade, Valor e Situação).

### Tela: Novo/Editar combo

#### Aba: Geral

- **Nome:** define o nome do combo.
- **Observações adicionais:** permite registrar observações internas do combo.
- **Imagem:** define a imagem do combo para exibição nos canais online.
- **Início:** define a data/hora de início da validade de venda do combo.
- **Fim:** define a data/hora final da validade de venda do combo.
- **Quantidade mínima:** define a quantidade mínima permitida para compra do combo.
- **Quantidade máxima:** define a quantidade máxima permitida para compra do combo.
- **Valor:** exibe o valor total calculado a partir dos itens do combo.

#### Aba: Itens

- **Descrição:** identifica o item adicionado ao combo.
- **Quantidade:** define a quantidade do item no combo.
- **Tipo item combo:** indica o tipo do item vinculado.
- **Valor:** exibe o valor unitário do item.

### Tela: Adicionar item combo

#### Seção: Geral

- **Tipo:** define o tipo de item a ser incluído no combo.
- **Descrição:** mostra o item selecionado para inclusão.
- **Quantidade:** define a quantidade do item no combo.
- **Valor unitário:** informa o valor unitário do item.

#### Seção: Fiscal

- **Não emitir NFS-e:** define se o item não deve gerar NFS-e no contexto fiscal do combo.

### Tela: Editar item combo

#### Seção: Geral

- **Tipo:** exibe o tipo do item do combo (somente leitura).
- **Descrição:** exibe a descrição do item (somente leitura).
- **Quantidade:** permite ajustar a quantidade do item.
- **Valor unitário:** permite ajustar o valor unitário do item.

#### Seção: Fiscal

- **Não emitir NFS-e:** permite ajustar a marcação fiscal do item.

### Tela: Detalhes do combo / Detalhes item combo

- Exibe os dados em modo consulta para conferência antes de editar.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo:** abre o formulário de cadastro de combo.
- **Editar selecionado:** abre o formulário para edição do combo selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do combo selecionado.
- **Exibir detalhes:** abre a tela de detalhes do combo selecionado.

### Novo/Editar combo

- **Salvar:** grava o cadastro/edição do combo.
- **Cancelar:** cancela a operação mediante confirmação.
- **Alterar (imagem):** seleciona uma nova imagem para o combo.
- **Excluir (imagem):** remove a imagem atual do combo.
- **Adicionar (aba Itens):** abre a tela para incluir item no combo.
- **Editar selecionado (aba Itens):** edita o item selecionado do combo.
- **Remover selecionado (aba Itens):** remove o item selecionado do combo.
- **Exibir detalhes (aba Itens):** exibe os detalhes do item selecionado.

### Adicionar item combo

- **Buscar:** abre a busca do item conforme o tipo selecionado.
- **Detalhes:** exibe os detalhes do item selecionado.
- **Adicionar:** confirma a inclusão do item no combo.
- **Cancelar:** cancela a operação mediante confirmação.

### Editar item combo

- **Detalhes:** abre os detalhes do item vinculado.
- **Salvar:** confirma as alterações do item.
- **Cancelar:** cancela a edição mediante confirmação.

## Regras e comportamentos importantes

- O combo deve possuir **pelo menos 2 itens** para ser salvo.
- O valor final do combo é calculado pela soma dos valores unitários dos itens combo adicionados.
- O campo **Nome** é obrigatório.
- O campo **Início** (validade inicial) é obrigatório.
- Quando **Quantidade mínima** e **Quantidade máxima** são informadas, a mínima não pode ser maior que a máxima.
- Não é permitido salvar dois combos com o mesmo nome.
- Ao adicionar um item já existente no combo, o sistema oferece incrementar a quantidade do item já adicionado.
- Na seleção de item do combo, o fluxo disponível no cadastro atual considera item do tipo **Ingresso**.
- A imagem do combo tem validação de tamanho máximo (20kb) no envio.

Campos obrigatórios mínimos para salvar:

- **Nome**
- **Início**
- **Pelo menos 2 itens no combo**

## Mensagens

- **Falha ao inicializar preview das informações:** contate o suporte para maiores informações.
- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum combo selecionado:** selecione um registro para continuar.
- **Desativar ou ativar:** confirmação para bloquear/desbloquear combo selecionado.
- **Ação realizada com sucesso:** confirmação após ativar/desativar.
- **Falha ao salvar. Tente novamente.:** ocorreu erro ao atualizar situação do combo.
- **Dados inválidos:** revise os dados do combo e tente salvar novamente.
- **Combo salvo:** o combo foi salvo com sucesso.
- **Nome não informado:** preencha o nome do combo.
- **Início validade não informada:** informe a data/hora de início da validade.
- **Quantidade mínima nao pode ser maior que quantidade máxima:** revise os limites de quantidade.
- **Combo deve possuir pelo menos 2 itens:** adicione mais itens antes de salvar.
- **Existe outro combo cadastrado com mesmo nome:** use um nome diferente.
- **Nenhum item selecionado:** para continuar primeiro selecione um registro na tabela.
- **Item inválido:** revise item, quantidade e valor antes de adicionar.
- **Nenhum item selecionado / Selecione um item para exibir os detalhes.:** selecione item antes de abrir detalhes.
- **Plano de venda inválido:** o plano de venda não possui um tipo de ingresso vinculado.
- **Aviso / Item indisponivel:** tipo de item não disponível no fluxo atual.
- **Imagem inválida:** selecione uma imagem com tamanho máximo de 20kb.
- **Falha ao ler imagem:** o arquivo selecionado não pode ser interpretado como imagem.
- **Remover imagem:** confirmação para remover imagem do combo.
- **Cancelar / Tem certeza de que deseja cancelar?:** confirmação de cancelamento da operação.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Campanhas de venda internet:** utiliza os combos na composição da campanha de venda online.
- **Aplicação Voucher:** exibe combos disponíveis para compra quando vinculados à campanha/plano de venda.

### Cadastros necessários para preencher esta tela

- **Planos de venda:** necessários para selecionar itens do tipo ingresso ao montar o combo.

## Passo a passo recomendado

1. Acesse **Vendas > Combos de venda internet**.
2. Use **Filtro** para localizar um combo existente, se necessário.
3. Clique em **Novo** para cadastrar ou em **Editar selecionado** para manutenção.
4. Na aba **Geral**, preencha **Nome**, período de validade e demais dados do combo.
5. Na aba **Itens**, clique em **Adicionar** para incluir os itens do combo.
6. Em **Adicionar item combo**, selecione o **Tipo**, clique em **Buscar**, escolha o item, informe **Quantidade** e confirme em **Adicionar**.
7. Repita a inclusão até o combo possuir pelo menos dois itens.
8. Se necessário, ajuste item com **Editar selecionado** ou remova com **Remover selecionado**.
9. Clique em **Salvar** para concluir o cadastro.


