---
tipo: tela
nome_tela: Informações do estabelecimento
menu: Estabelecimento
módulo: Retaguarda
versão_minima: 1.9.13
slug: submenu-informacoes-do-estabelecimento
---

## Objetivo

Documentar a operação da tela **Informações do estabelecimento**, usada para manter os dados institucionais, endereço, configuração de TEF e conteúdo do autoatendimento.

## Identificação da tela

- **Nome da tela:** Informações do estabelecimento
- **Menu/Caminho:** Estabelecimento > Informações do estabelecimento
- **Perfil de acesso sugerido:** Administrador / Gestor

## Abas e campos da tela

### Aba: Institucional

- **Nome fantasia:** nome comercial exibido no sistema e em relatórios.
- **Razão social:** nome jurídico da empresa.
- **CNPJ:** documento fiscal do estabelecimento.
- **IE:** inscrição estadual para controles fiscais.
- **Telefone:** contato principal do estabelecimento.
- **Website:** site oficial para divulgação e referência.
- **E-mail:** e-mail principal para contato administrativo.
- **Logomarca:** pré-visualização da imagem institucional atual.
- **Botão Alterar:** seleciona e substitui a logomarca institucional.

### Aba: Endereço

- **Logradouro:** nome da rua/avenida do estabelecimento.
- **Número:** número do endereço.
- **Bairro:** bairro do endereço cadastrado.
- **Complemento:** informação adicional de localização.
- **CEP:** código postal do endereço.
- **País:** país para definição de regras de endereço.
- **Província:** divisão regional usada quando aplicável (ex.: Argentina).
- **Estado:** unidade federativa/província estadual.
- **Cidade:** município do estabelecimento.

### Aba: TEF

- **Chip/magnético:** gateway padrão para transações presenciais.
- **Digitado (e-commerce):** gateway padrão para transações digitadas.
- **Pix (e-commerce):** gateway padrão para pagamentos PIX.

### Aba: Autoatendimento

- **Logomarca da tela inicial:** pré-visualização da imagem exibida no autoatendimento.
- **Tamanho recomendado da imagem:** referência de proporção para melhor exibição (600x388).
- **Botão Alterar:** seleciona e substitui a imagem da tela inicial.
- **Mensagem da tela Bem-vindo (Português):** texto exibido em português no autoatendimento.
- **Mensagem da tela Bem-vindo (Espanhol):** texto exibido em espanhol no autoatendimento.
- **Mensagem da tela Bem-vindo (Inglês):** texto exibido em inglês no autoatendimento.

## Botões da tela

- **Salvar**
- **Cancelar**
- **Alterar** (na aba Institucional, para logomarca)
- **Alterar** (na aba Autoatendimento, para logomarca da tela inicial)

## Regras e comportamentos importantes

- As mensagens de Bem-vindo (PT/ES/EN) são limitadas a **54 caracteres**.
- O campo **Província** só fica habilitado quando o país selecionado é Argentina.
- Ao salvar, a cidade selecionada é vinculada ao cadastro do estabelecimento.
- Após salvar com sucesso, as alterações entram em vigor após reinicialização do sistema.

## Mensagens

### Fluxo de imagem

- **Título do seletor:** `Selecionar imagem de logomarca`
- **Erro:** `Falha ao ler imagem`
- **Descrição do erro:** `O arquivo selecionado não pode ser interpretado como uma imagem.`

### Fluxo de validação e salvamento

- **Pré-processamento:** `Preparando formulário`
- **Aviso de validação:** `Valores inválidos`
- **Detalhe da validação:** `Os seguintes problemas foram encontrados:` + lista de validações
- **Pré-salvamento:** `Salvando alterações`
- **Erro ao salvar:** `Falha ao salvar`
- **Descrição do erro ao salvar:** `Não foi possível concluir a ação no momento`
- **Sucesso ao salvar:** `Alterações salvas`
- **Descrição do sucesso:** `As informações do estabelecimento foram salvas com sucesso e entrarão em vigor após a reinicialização do sistema.`

### Fluxo de cancelamento

- **Confirmação:** `Cancelar`
- **Pergunta:** `Tem certeza de que deseja cancelar?`

## Passo a passo recomendado

1. Acesse **Estabelecimento > Informações do estabelecimento**.
2. Preencha/atualize os dados da aba **Institucional**.
3. Revise os dados da aba **Endereço**.
4. Configure os gateways na aba **TEF** (quando aplicável).
5. Atualize imagem e mensagens da aba **Autoatendimento** (quando aplicável).
6. Clique em **Salvar** e confirme a mensagem de sucesso.
