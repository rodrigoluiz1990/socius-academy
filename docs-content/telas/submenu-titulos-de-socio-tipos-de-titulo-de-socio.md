---
tipo: tela
nome_tela: Tipos de título de sócio
menu: Títulos de sócio
aplicacao: Retaguarda
slug: submenu-titulos-de-socio-tipos-de-titulo-de-socio
---

## Objetivo

Documentar a operação da tela **Tipos de título de sócio**, usada para consultar, cadastrar, editar e detalhar os tipos de título utilizados no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Títulos de sócio
- **Submenu:** Tipos de título de sócio

## Abas e campos da tela

### Tela: Tipos de título de sócio (principal)

- **Filtros:** permite pesquisar por Descrição, Limite de dependentes, Limite de agregados, Prefixo do código, Sufixo do código, Formato do código e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Descrição, Limite de dependentes, Limite de agregados, Valor de aquisição, Valor da mensalidade padrão e Situação).

### Tela: Novo/Editar tipo de título de sócio

### Aba: Geral

- **Tipo de entrada:** define o tipo de entrada associado ao título para controle de acesso.
- **Descrição:** define o nome do tipo de título.
- **Dependentes:** define o limite de dependentes permitidos no título.
- **Agregados:** define o limite de agregados permitidos no título.
- **Prefixo:** texto fixo no início do código do título; compõe o código final junto com **Formato** e **Sufixo**. Impacta a geração e a validação de códigos e evita colisões entre tipos diferentes.
- **Formato:** define a estrutura do código (máscara/ordem dos caracteres) que será gerado ou validado; é a base do código final e influencia a criação, a emissão e a identificação do título.
- **Sufixo:** texto fixo no fim do código do título; compõe o código final junto com **Prefixo** e **Formato**, afetando geração, validação e unicidade do código.
- **Automático:** define se o código do título será gerado automaticamente.
- **Necessita talonário:** indica se o tipo de título exige talonário na emissão.
- **Último código:** exibe o último código utilizado (quando aplicável).
- **Telefone do titular é obrigatório:** exige telefone no cadastro da pessoa titular.
- **Documento (CPF/CNPJ) do titular é obrigatório:** exige CPF/CNPJ no cadastro da pessoa titular.
- **E-mail do titular é obrigatório:** exige e-mail no cadastro da pessoa titular.
- **Nascimento do titular é obrigatório:** exige data de nascimento no cadastro da pessoa titular.
- **Endereço do titular é obrigatório:** exige endereço no cadastro da pessoa titular.
- **Maior idade penal do titular é obrigatória:** exige que o titular atenda a maioridade penal definida em **Limites de operações com cartão de consumo**.

### Aba: Taxa de manutenção e mensalidade

- **Pagamento no estabelecimento:** define o percentual de desconto automático para essa forma de pagamento.
- **Boleto bancário:** define o percentual de desconto automático para essa forma de pagamento.
- **Cartão de crédito agendado:** define o percentual de desconto automático para essa forma de pagamento.
- **Débito em conta:** define o percentual de desconto automático para essa forma de pagamento.
- **Tipos de mensalidade:** lista os tipos vinculados ao título e permite definir o padrão e regras de isenção.
- **Quantidade de dias de isenção:** define o número de dias de isenção de mensalidade.
- **Editar data de isenção:** permite habilitar a edição da data de isenção da mensalidade do título.

### Subtela: Novo/Editar tipo de mensalidade

- **Tipo de mensalidade:** define o tipo de mensalidade a ser vinculado ao título.
- **Tipo de cartão de consumo:** vincula o tipo de cartão para mensalidade de carteirinha (quando aplicável).
- **Ciclo de cobrança:** define o ciclo de cobrança da mensalidade.
- **Modo de cobrança de mensalidade:** define os modos permitidos (ex.: todos os integrantes), quando habilitado.
- **Por titular / Taxa:** define o valor principal de mensalidade conforme o tipo.
- **Por dependente:** define o valor da mensalidade por dependente.
- **Por agregado:** define o valor da mensalidade por agregado.
- **Modalidade de cobrança:** define a modalidade usada na emissão da mensalidade.

### Aba: Valores e limites

- **Aquisição:** define o valor de aquisição do título.
- **Adição de dependente:** define o valor para inclusão de dependente.
- **Adição de agregado:** define o valor para inclusão de agregado.
- **Transferência:** define o valor para transferência do título.
- **Cancelamento:** define o valor para cancelamento do título.
- **Remoção de dependente:** define o valor para remoção de dependente.
- **Remoção de agregado:** define o valor para remoção de agregado.
- **Valor base:** define o valor base para cálculo de comissão.
- **Percentual de comissão:** define o percentual de comissão aplicado.
- **Por título:** habilita limites de convites por título.
- **Quantidade (por título):** define a quantidade de convites por título.
- **Quantidade desconto (por título):** define a quantidade de convites com desconto por título.
- **Ciclo (por título):** define o ciclo de repetição dos convites por título.
- **Por convidado:** habilita limites de convites por convidado.
- **Quantidade (por convidado):** define a quantidade de convites por convidado.
- **Quantidade desconto (por convidado):** define a quantidade de convites com desconto por convidado.
- **Ciclo (por convidado):** define o ciclo de repetição dos convites por convidado.

### Aba: Modelo de contrato

- **Modelo de contrato:** define o texto do contrato vinculado ao tipo de título.

### Tela: Detalhes do tipo de título de sócio

- Exibe os mesmos dados do cadastro em modo de consulta.

## Botões da tela

### Tela principal

- **Novo tipo de título:** abre o formulário para cadastro de um novo tipo.
- **Editar selecionado:** abre o formulário para edição do tipo selecionado.
- **Desativar ou ativar:** alterna a situação do tipo selecionado.
- **Exibir detalhes:** abre a tela de detalhes do tipo selecionado.

### Novo/Editar tipo de título de sócio

- **Salvar:** grava o cadastro novo ou as alterações do tipo de título.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Adicionar:** inclui um tipo de mensalidade na lista do título.
- **Editar selecionado:** edita o tipo de mensalidade selecionado.
- **Exibir detalhes:** abre os detalhes do tipo de mensalidade selecionado.
- **Remover selecionado:** remove o tipo de mensalidade selecionado do título.
- **Exibir ajuda para elementos dinâmicos:** abre a ajuda para montagem do modelo de contrato.

## Regras e comportamentos importantes

- Para **editar**, **desativar/ativar** ou **exibir detalhes**, é necessário selecionar um registro no grid.
- O sistema valida descontos por forma de pagamento: nenhum pode ser maior que 100%.
- O **valor base de comissão** não pode ser maior que o valor de aquisição nem negativo.
- O **percentual de comissão** deve estar entre 0% e 100%.
- **Quantidade desconto (por título)** e **Quantidade desconto (por convidado)** não podem ser maiores do que suas respectivas quantidades.
- O sistema valida **descrição duplicada** e **código composto duplicado** (prefixo + formato + sufixo).
- O **tipo de mensalidade padrão** deve ser adicionado.
- As **restrições cadastrais do sócio titular** são aplicadas ao cadastro de pessoas quando a pessoa é titular de um título de sócio.

Campos obrigatórios mínimos para salvar:

- **Tipo de entrada**
- **Descrição**
- **Tipo de mensalidade padrão**
- **Formato do código**

## Mensagens

- **Falha ao inicializar preview das informações:** contate o suporte para maiores informações.
- **Falha ao inicializar busca:** entre em contato com o suporte para maiores informações.
- **Nenhum tipo de título selecionado:** selecione um registro para continuar.
- **Desativar ou ativar - Tem certeza de que deseja bloquear/desbloquear?:** confirma a alteração de situação do tipo.
- **Bloquear ou desbloquear - Ação realizada com sucesso:** confirma a alteração de situação.
- **Bloquear ou desbloquear - Falha ao salvar:** tente novamente.
- **Falha ao salvar:** verifique os dados informados e tente novamente.
- **Desconto inválido:** o desconto não pode ser maior que 100%.
- **Valor de comissão inválido:** o valor base não pode ser maior que o de aquisição nem negativo.
- **Percentual de comissão inválido:** o percentual deve estar entre 0% e 100%.
- **Quantidade ingresso convidado desconto inválido:** o desconto por convidado não pode ser maior que a quantidade por convidado.
- **Quantidade ingresso título desconto inválido:** o desconto por título não pode ser maior que a quantidade por título.
- **Descrição inválida:** a descrição informada já está em uso por outro tipo de título.
- **Código já cadastrado:** confirme se deseja prosseguir com a junção de prefixo + formato + sufixo.
- **Tipo de mensalidade padrão não adicionado:** adicione o tipo de mensalidade padrão para continuar.
- **Tipo de mensalidade inválido:** já existe um registro com este tipo de mensalidade.
- **Nenhum tipo selecionado:** selecione um tipo de mensalidade para continuar.
- **Tipo de título adicionado:** confirme se deseja adicionar um novo.
- **Sucesso:** os valores foram atualizados com sucesso.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Títulos de sócio:** utiliza o tipo de título na criação e edição de títulos de sócio.
- **Atendimento ("Editar tipo de título de sócio"):** permite trocar o tipo de título de um sócio.
- **Planos de venda:** define quais tipos de título podem ser vendidos e suas regras de vencimento/emissão.
- **Tipos de talonários:** vincula tipos de título que exigem talonário.
- **Baixa de talonários:** utiliza o tipo de título para registrar baixas.
- **Tipos de cartão do estabelecimento:** restringe o uso por tipo de título quando habilitado.
- **Configurações de venda pela internet:** utiliza o modelo de contrato do tipo de título para exibição ao associado.
- **Monitor de Acesso:** valida o tipo de título em regras de acesso.
- **Talonário (web):** utiliza o tipo de título em consultas e baixas de talonário.
- **Integração CM ("Relatório consolidado de venda de títulos de sócio"):** utiliza o tipo de título como filtro em relatórios de venda.
- **Voucher (web) (venda de títulos):** utiliza o modelo de contrato do tipo de título na venda de títulos.
- **Relatórios (Retaguarda):** utilizam o tipo de título como filtro/agrupamento em telas como **"Relatório consolidado de venda de títulos de sócio"**, **"Relatório detalhado de venda de títulos de sócio"**, **"Relatório consolidado de acessos de sócio"** e **"Relatório detalhado de acessos de sócio"**.

### Cadastros necessários para preencher esta tela

- **Tipos de entrada:** necessários para vincular o tipo de entrada ao tipo de título.
- **Modalidades de cobrança:** necessárias para selecionar a modalidade no cadastro do tipo de mensalidade.

## Passo a passo recomendado

1. Acesse **Títulos de sócio > Tipos de título de sócio**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo tipo de título** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Na aba **Geral**, preencha **Descrição**, **Tipo de entrada**, **Formato do código do título**, limites e regras do código.
5. Na aba **Taxa de manutenção e mensalidade**, configure descontos (se necessário) e cadastre o tipo de mensalidade padrão.
6. Na aba **Valores e limites**, informe valores de operação, comissão (se necessário) e limites de convites (se necessário).
7. Na aba **Modelo de contrato**, preencha o texto do contrato.
8. Clique em **Salvar** para concluir.
9. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
