---
tipo: processo
codigo: processo-envio-foto-leitor-facial
nome: Envio de foto no leitor facial
area: Controle de acesso
nivel: operacional
versao_minima: 1.9.12
slug: envio-foto-leitor-facial
---

## Objetivo do Processo

Orientar o envio da foto de pessoas para leitores faciais, garantindo que o cadastro esteja apto para validação no **Monitor de acessos**.

## Perfis Envolvidos

- **Operador de cadastro**
- **Responsável técnico de acesso** (quando houver ajustes de rede, monitor ou leitor)

## Pré-requisitos

- Pessoa com **foto** cadastrada.
- Pessoa com **cartão de consumo** ou **carteirinha de sócio** ativo.
- Cadastro em **Acesso > Leitor facial** ativo com os campos **Descrição**, **IP**, **Usuário** e **Senha** preenchidos.
- **Leitor** com IP único e acessível na rede.
- Dispositivo habilitado na tela **Sistema > Dispositivos de acesso ao sistema**.
- Aplicação Socius - **Monitor de acessos** em execução.

## Fluxo Resumido (Visão Macro)

1. Validar cadastros e conectividade.
2. Acessar a pessoa e abrir a aba de reenvio.
3. Enviar a foto para os leitores ativos.
4. Verificar retorno e tratar inconsistências.

## Passo a Passo Detalhado

### Passo 1 - Validar configurações antes do envio

1. Confira o cadastro do **leitor** em **Acesso > Leitor facial**.
2. Valide se o **leitor** está ativo e com IP/usuário/senha corretos.
3. Confirme que o dispositivo está habilitado para o **Monitor de acessos** em **Sistema > Dispositivos de acesso ao sistema**.
4. Garanta que o **Monitor de acessos** está aberto na estação responsável pelo controle de acesso.

### Passo 2 - Acessar o cadastro da pessoa

1. Acesse **Entidades > Pessoas físicas e jurídicas**.
2. Localize e abra o cadastro da pessoa.
3. Confirme se a **Pessoa** possui **foto** e **cartão** vinculados.
4. Abra a aba **Reenviar Faces**.

### Passo 3 - Enviar a foto

1. Clique no botão **Reenviar**.
2. Aguarde o processamento do envio para os leitores faciais ativos.
3. Verifique a mensagem de retorno.

### Passo 4 - Validar resultado

1. Quando retornar sucesso, confirme com a equipe de acesso a sincronização no **leitor**.
2. Quando houver falha, trate a causa informada e repita o envio.

## Mensagens comuns e como tratar

- "Equipamento não conectado":
  - Verifique se o **Monitor de acessos** está aberto.
  - Valide comunicação de rede com o **IP** do **leitor**.
- "Verifique se a pessoa possui foto cadastrada":
  - Cadastre ou recadastre a **foto** da **Pessoa** e tente novamente.
- "Não existe carteirinha de ativação para a pessoa selecionada":
  - Cadastre um **cartão de consumo**/**carteirinha de sócio** para a **Pessoa**.
- "A carteirinha de ativação da pessoa selecionada está vencida":
  - Atualize a **ativação** e repita o envio.
- "Usuário bloqueado ou sem ativação":
  - Revise bloqueio/situação do cadastro da **Pessoa** e do **cartão** vinculado.
- Falha padrão de envio da foto:
  - Verifique nome da **Pessoa** (até 41 caracteres), **foto** com fundo neutro, **cartão** vinculado e configuração do **leitor facial**.

## Variações Comuns

- **Leitor Topdata**: o envio depende da comunicação do leitor com o servidor do **Monitor de acessos** (WebSocket).
- **Leitor Intelbras**: o envio depende da integração online do leitor com o **Monitor de acessos** e da configuração de rede do equipamento.
- Reenvio após troca de foto: sempre repetir o processo na aba **Reenviar Faces** após atualização de foto.

## Check-list Final

- [ ] **Pessoa** com **foto**, **cartão de consumo**/**carteirinha de sócio** e **ativação** válidos.
- [ ] **Leitor facial** ativo e acessível na rede.
- [ ] **Dispositivo** habilitado para **Monitor de acessos**.
- [ ] **Monitor de acessos** em execução.
- [ ] Reenvio concluído com sucesso.










