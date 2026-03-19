---
tipo: tela
nome_tela: Visão geral da aplicação
menu: PDV
aplicacao: PDV
slug: submenu-pdv-visao-geral-da-aplicacao
---

## Objetivo

Documentar a aplicação **PDV** de forma detalhada, com visão operacional das telas, comandos de acesso e mensagens mais comuns durante a operação.

## Contexto geral

O **PDV** é a aplicação desktop de operação presencial para vendas, movimentações de cartão, aluguel, estacionamento e rotinas de caixa.

A navegação principal é feita por comando digitado na tela **Ponto de venda**, com atalhos para abrir cada fluxo operacional.

## Detalhes

- **Aplicação:** PDV
- **Acesso:** aplicação desktop
- **Origem das configurações:** telas de cadastro/configuração no Retaguarda

## Acesso e autenticação

### Tela: Login

- Autentica o operador por usuário e senha.
- Valida situação do operador e permissões de abertura de caixa.
- Valida se a loja vinculada ao dispositivo está ativa.

### Tela: Ponto de venda

- Exibe dados de **empresa**, **loja**, **PDV**, **caixa** e data de abertura.
- Recebe o comando digitado para abrir a operação.

## Seções da aplicação

### Seção: Operações por comando

- `1`: Ativação de cartão
- `2`: Bloqueio de cartão
- `3`: Recarga de saldo
- `4`: Transferência de saldo
- `5`: Venda ou aluguel
- `6`: Troca de aluguel
- `7`: Devolução de produtos
- `8`: Devolução de saldo
- `9`: Perca de aluguel
- `10`: Perca de cartão
- `11`: Extrato do cartão
- `12`: Estacionamento
- `C1`: Suprimento de caixa
- `C2`: Sangria de caixa
- `E`: Estorno de transações
- `I`: Reimpressão de comprovante
- `R`: Relatórios
- `S`: Menu gerencial SiTef
- `B`: Bloquear PDV
- `X`: Fechar caixa

## Fluxo por opção do menu principal

### Tela principal: Ponto de venda

- **Dados da tela:** empresa, loja, PDV, caixa, data de abertura e campo para digitar comando.
- **Menu lateral:** lista de comandos disponíveis (`1` a `12`, `C1`, `C2`, `E`, `I`, `R`, `S`, `B`, `X`).
- **Sequência de solicitações:** digitar comando, pressionar `Enter`, seguir o fluxo da tela aberta.

### Opção `1`: Ativação de cartão

- **Dados da tela:**
status da operação
código do cartão
tipo do cartão
custo de ativação
valor total
meio de pagamento
valor recebido
valor de troco
nome do portador (quando exigido)
documento do portador (quando exigido)
e-mail do portador (quando exigido)
código complementar (quando exigido)

- **Menu lateral:**
`X - Cancelar ativação`
`1`, `2`, `3`... - meios de pagamento (quando exibidos conforme configuração da loja/dispositivo)
- **Sequência de solicitações:**
1. Digitar o código do cartão ou ler pulseira/cartão (`F11`).
2. Confirmar se o cartão é válido para ativação.
3. Informar nome da pessoa (quando obrigatório).
4. Informar documento (quando obrigatório).
5. Informar e-mail (quando obrigatório).
6. Informar código complementar (quando obrigatório).
7. Informar valor da recarga de ativação (quando aplicável).
8. Informar meio de pagamento solicitado pelo sistema.
9. Se o meio for espécie/cheque, informar valor recebido; para os demais meios, o sistema segue sem essa etapa.
10. Confirmar salvamento quando o sistema perguntar (`1 - Sim` ou `2 - Cancelar`).
11. Em pagamento TEF com falha, escolher entre tentar novamente, trocar forma de pagamento ou cancelar ativação.
12. Aguardar conclusão e impressão do comprovante.
13. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `2`: Bloqueio de cartão

- **Dados da tela:**
status da operação
cartão selecionado
dados do titular
motivo de bloqueio
dados de devolução/transferência (quando aplicável)
valor total
meio de pagamento (quando aplicável)

- **Menu lateral:**
`X - Cancelar bloqueio`
`N - Pesquisar por nome`
`P - Pesquisar por documento`
`1`, `2`, `3`... - meios de pagamento (quando exibidos conforme configuração da loja/dispositivo)

- **Sequência de solicitações:**
1. Informar cartão, nome ou documento para localizar o registro.
2. Selecionar o cartão correto para bloqueio.
3. Informar motivo e dados obrigatórios da operação.
4. Quando houver cobrança/devolução, informar meio de pagamento e valores solicitados.
5. Confirmar salvamento da operação.
6. Aguardar impressão do comprovante.
7. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `3`: Recarga de saldo

- **Dados da tela:**
status da operação
cartão selecionado
nome do portador
valor da recarga
meio de pagamento
valor recebido
valor de troco

- **Menu lateral:**
`X - Cancelar recarga`
`1`, `2`, `3`... - meios de pagamento (quando exibidos conforme configuração da loja/dispositivo)

- **Sequência de solicitações:**
1. Informar cartão para iniciar a recarga.
2. Informar valor da recarga.
3. Informar meio de pagamento.
4. Informar valor recebido quando solicitado.
5. Confirmar operação.
6. Aguardar impressão do comprovante.
7. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `4`: Transferência de saldo

- **Dados da tela:**
status da operação
cartão de origem
cartão de destino
saldo disponível
valor da transferência

- **Menu lateral:**
`X - Cancelar transferência de saldo`

- **Sequência de solicitações:**
1. Informar cartão de origem.
2. Informar cartão de destino.
3. Informar valor da transferência.
4. Confirmar operação.
5. Aguardar impressão do comprovante (quando aplicável).
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `5`: Venda ou aluguel

- **Dados da tela:**
status da operação
tipo de operação selecionada
cartão/cliente do atendimento
itens selecionados
quantidades
valor total
meio de pagamento

- **Menu lateral:**
`X - Cancelar venda/aluguel`
atalhos da operação conforme tela aberta

- **Sequência de solicitações:**
1. Escolher se a operação será venda de consumo ou aluguel.
2. Identificar cartão/cliente.
3. Selecionar produto(s) e quantidade(s).
4. Conferir valores.
5. Informar pagamento quando solicitado.
6. Confirmar e salvar.
7. Aguardar impressão do comprovante.
8. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `6`: Troca de aluguel

- **Dados da tela:**
status da operação
item alugado atual
item substituto
cartão/cliente
diferenças de valores (quando houver)

- **Menu lateral:**
`X - Cancelar troca de aluguel`

- **Sequência de solicitações:**
1. Localizar aluguel ativo.
2. Selecionar item atual e item substituto.
3. Validar valores e regras.
4. Confirmar operação.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `7`: Devolução de produtos

- **Dados da tela:**
status da operação
cartão/atendimento
itens vinculados
quantidade devolvida
valores de ajuste (quando aplicável)

- **Menu lateral:**
`X - Cancelar devolução`
atalhos de listagem/pesquisa conforme tela aberta

- **Sequência de solicitações:**
1. Identificar atendimento/cartão.
2. Selecionar item(ns) para devolução.
3. Informar quantidade devolvida.
4. Confirmar operação.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `8`: Devolução de saldo

- **Dados da tela:**
status da operação
cartão selecionado
saldo disponível
valor de devolução
meio de pagamento (quando aplicável)

- **Menu lateral:**
`X - Cancelar devolução de saldo`

- **Sequência de solicitações:**
1. Informar cartão.
2. Conferir saldo disponível.
3. Informar valor da devolução.
4. Confirmar operação.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `9`: Perca de aluguel

- **Dados da tela:**
status da operação
item alugado não devolvido
dados do cliente/cartão
valor de cobrança
meio de pagamento

- **Menu lateral:**
`X - Cancelar perca de aluguel`

- **Sequência de solicitações:**
1. Localizar item alugado pendente.
2. Confirmar situação de perca.
3. Informar pagamento quando solicitado.
4. Confirmar operação.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `10`: Perca de cartão

- **Dados da tela:**
status da operação
cartão perdido
dados do titular
regras de substituição/cobrança
meio de pagamento (quando aplicável)

- **Menu lateral:**
`X - Cancelar perca de cartão`

- **Sequência de solicitações:**
1. Localizar cartão.
2. Confirmar dados do titular.
3. Aplicar regras de perda/substituição.
4. Informar pagamento quando solicitado.
5. Confirmar operação.
6. Aguardar impressão do comprovante.
7. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `11`: Extrato do cartão

- **Dados da tela:**
status da operação
cartão selecionado
período consultado
movimentações do extrato
totalizadores

- **Menu lateral:**
`X - Cancelar relatório de consumo`

- **Sequência de solicitações:**
1. Informar cartão.
2. Informar período desejado.
3. Gerar consulta.
4. Validar movimentações.
5. Imprimir quando necessário.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `12`: Estacionamento

- **Dados da tela:**
status da operação
ticket/cartão
dados do veículo
tempo/período
valor do estacionamento
meio de pagamento

- **Menu lateral:**
`X - Cancelar operação`
`1`, `2`, `3`... - meios de pagamento (quando exibidos conforme configuração da loja/dispositivo)

- **Sequência de solicitações:**
1. Informar ticket/cartão.
2. Validar dados do veículo e permanência.
3. Conferir valor calculado.
4. Informar meio de pagamento.
5. Confirmar baixa/pagamento.
6. Aguardar impressão do comprovante.
7. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `C1`: Suprimento de caixa

- **Dados da tela:**
status da operação
valor do suprimento
motivo/justificativa
meio de movimento
observações

- **Menu lateral:**
`X - Cancelar suprimento`
`1`, `2`, `3`... - meios de movimento (quando exibidos conforme configuração da loja/dispositivo)

- **Sequência de solicitações:**
1. Informar valor do suprimento.
2. Informar justificativa.
3. Selecionar meio de movimento quando solicitado.
4. Confirmar lançamento.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `C2`: Sangria de caixa

- **Dados da tela:**
status da operação
valor da sangria
motivo/justificativa
meio de movimento
observações

- **Menu lateral:**
`X - Cancelar sangria`
`1`, `2`, `3`... - meios de movimento (quando exibidos conforme configuração da loja/dispositivo)

- **Sequência de solicitações:**
1. Informar valor da sangria.
2. Informar justificativa.
3. Selecionar meio de movimento quando solicitado.
4. Confirmar lançamento.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `E`: Estorno de transações

- **Dados da tela:**
status da operação
tipo de estorno
registro original
valores envolvidos
resultado da operação

- **Menu lateral:**
`X - Cancelar estorno`
atalhos de tipo de estorno conforme tela aberta

- **Sequência de solicitações:**
1. Escolher tipo de estorno.
2. Localizar transação original.
3. Validar permissões e dados.
4. Confirmar estorno.
5. Aguardar impressão do comprovante.
6. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `I`: Reimpressão de comprovante

- **Dados da tela:**
status da operação
tipo de comprovante
filtros de busca
listagem de comprovantes
detalhes do registro selecionado

- **Menu lateral:**
`X - Cancelar reimpressão`
atalhos de tipo de reimpressão conforme tela aberta

- **Sequência de solicitações:**
1. Escolher tipo de comprovante para reimpressão.
2. Informar filtros de busca.
3. Selecionar registro.
4. Confirmar reimpressão.
5. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `R`: Relatórios

- **Dados da tela:**
status da operação
tipo de relatório
período
filtros
resultado/visualização

- **Menu lateral:**
`X - Cancelar relatório`
atalhos de seleção conforme tela de relatório

- **Sequência de solicitações:**
1. Escolher relatório.
2. Informar período e filtros.
3. Gerar relatório.
4. Imprimir/exportar quando aplicável.
5. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `S`: Menu gerencial SiTef

- **Dados da tela:**
status da operação
função gerencial selecionada
mensagens de retorno da integração
resultado da operação

- **Menu lateral:**
`X - Cancelar menu SiTef`
opções da rotina gerencial exibidas na própria tela

- **Sequência de solicitações:**
1. Abrir menu gerencial.
2. Selecionar rotina desejada.
3. Seguir instruções da integração (pinpad/SiTef).
4. Confirmar resultado final.
5. Em qualquer etapa, usar `X` para cancelar e retornar à tela principal.

### Opção `B`: Bloquear PDV

- **Dados da tela:**
status da sessão (PDV bloqueado)
usuário do operador
campo de senha para desbloqueio

- **Menu lateral:**
não se aplica

- **Sequência de solicitações:**
1. Acionar bloqueio no PDV.
2. Informar senha do mesmo operador para desbloquear.
3. Confirmar desbloqueio e retornar à tela principal.

### Opção `X`: Fechar caixa

- **Dados da tela:**
resumo do caixa
valores por meio de movimento
diferenças/apurações
autenticação do operador/supervisor
resultado do fechamento

- **Menu lateral:**
não se aplica

- **Sequência de solicitações:**
1. Conferir valores do fechamento.
2. Informar credenciais exigidas (operador/supervisor).
3. Confirmar fechamento.
4. Aguardar geração/impressão dos comprovantes.

## Regras e comportamentos importantes

- A operação depende de operador autenticado e caixa válido no dispositivo.
- Comando inválido na tela principal gera aviso de comando desconhecido.
- O bloqueio do PDV preserva a sessão e exige desbloqueio pelo operador autorizado.
- Algumas operações podem exigir liberação por operador com permissão superior.

## Mensagens

- **Usuário ou senha inválidos:** confirme credenciais digitadas e se o operador está ativo.
- **Usuário bloqueado:** validar situação do operador em **Operadores do sistema**.
- **Acesso negado (loja/permissão):** revisar vínculo do operador com a loja e permissões de caixa.
- **Operador já autenticado:** aguardar encerramento no outro dispositivo ou finalizar sessão anterior.
- **Estação de trabalho temporariamente bloqueada:** o caixa está aberto por outro operador; fechar caixa na origem ou pela Retaguarda.
- **Loja bloqueada:** ativar a loja vinculada ao dispositivo antes do login.
- **Comando desconhecido:** revisar o código digitado na tela principal.
- **Dados inválidos no desbloqueio:** conferir senha do operador logado que bloqueou o PDV.
- **Acesso negado no desbloqueio:** somente o operador autorizado pode desbloquear a sessão.
- **Informações inválidas / Dados incompletos (autorizar dispositivo ou conexão):** preencher todos os campos obrigatórios.
- **Falha ao salvar:** revisar dados obrigatórios e conectividade com banco de dados.
- **Falha ao imprimir comprovante:** validar impressora configurada no dispositivo e disponibilidade da impressora física.

## Dependências entre telas

### Onde esta aplicação é utilizada

- Não se aplica. Esta é uma aplicação separada de operação.

### Cadastros/configurações necessários

- **Dispositivos de acesso ao sistema:** cadastro e configuração do dispositivo usado como PDV.
- **Operadores do sistema:** usuários e permissões para autenticação e execução das operações.
- **Lojas:** vínculo da loja utilizada na operação do PDV.
- **Cartões de consumo e carteirinhas de sócio:** base para operações de ativação, bloqueio, recarga, extrato e transferência.
- **Produtos de consumo:** base para venda e devolução de consumo.
- **Produtos de aluguel:** base para venda/aluguel, troca, devolução e perca de aluguel.
- **Produtos de estacionamento:** base para operações de estacionamento no PDV.

## Passo a passo recomendado

1. Confirme os cadastros e configurações no Retaguarda (dispositivo, operador, loja e produtos).
2. Abra o **PDV** no equipamento operacional.
3. Realize login com usuário e senha do operador autorizado.
4. Na tela **Ponto de venda**, digite o código da ação desejada e pressione `Enter`.
5. Execute a operação conforme o fluxo da tela aberta.
6. Use "I" para reimpressões e "E" para estornos quando necessário.
7. Ao final do dia de operação, use "X" para fechar caixa.
8. Se precisar sair do computador por um momento use "B" para bloquear o PDV.
