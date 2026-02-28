---
tipo: tela
nome_tela: Informações do estabelecimento
menu: Estabelecimento
aplicacao: Retaguarda
slug: submenu-informacoes-do-estabelecimento
---

## Objetivo

Documentar a operação da tela **Informações do estabelecimento**, usada para manter os dados institucionais, endereço, configuração de TEF e conteúdo do autoatendimento.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Estabelecimento
- **Submenu:** Informações do estabelecimento

## Abas e campos da tela

### Aba: Institucional

- **Nome fantasia:** define o nome comercial exibido no sistema e em relatórios.
- **Razão social:** informa o nome jurídico da empresa.
- **CNPJ:** registra o documento fiscal do estabelecimento.
- **IE:** informa a inscrição estadual para controles fiscais.
- **Telefone:** mantém o contato principal do estabelecimento.
- **Website:** registra o site oficial da empresa.
- **E-mail:** mantém o e-mail administrativo principal.
- **Logomarca:** exibe a imagem institucional atual.
- **Alterar (logomarca):** permite selecionar e substituir a logomarca.

### Aba: Endereço

- **Logradouro:** informa a rua/avenida do estabelecimento.
- **Número:** informa o número do endereço.
- **Bairro:** informa o bairro do endereço.
- **Complemento:** registra uma referência adicional de localização.
- **CEP:** informa o código postal.
- **País:** define o país do estabelecimento.
- **Província:** define a província quando aplicável.
- **Estado:** define a unidade federativa.
- **Cidade:** define o município do estabelecimento.

### Aba: TEF

- **Chip/magnético:** define o gateway padrão para operações presenciais.
- **Digitado (e-commerce):** define o gateway padrão para transações digitadas.
- **Pix (e-commerce):** define o gateway padrão para pagamentos PIX.

### Aba: Autoatendimento

- **Logomarca da tela inicial:** exibe a imagem usada no autoatendimento.
- **Tamanho recomendado da imagem:** orienta a proporção ideal da arte (600x388).
- **Alterar (imagem inicial):** permite substituir a imagem da tela inicial.
- **Mensagem da tela Bem-vindo (Português):** texto exibido em português.
- **Mensagem da tela Bem-vindo (Espanhol):** texto exibido em espanhol.
- **Mensagem da tela Bem-vindo (Inglês):** texto exibido em inglês.

## Botões da tela

- **Salvar:** grava as alterações realizadas na tela.
- **Cancelar:** fecha a tela mediante confirmação.
- **Alterar (Institucional):** abre seletor de arquivo para troca da logomarca institucional.
- **Alterar (Autoatendimento):** abre seletor de arquivo para troca da imagem inicial do autoatendimento.

## Regras e comportamentos importantes

- As mensagens de boas-vindas (PT/ES/EN) são limitadas a **54 caracteres**.
- O campo **Província** fica habilitado somente quando o país selecionado é Argentina.
- Após salvar com sucesso, as alterações passam a valer após reinicialização do sistema.

Campos obrigatórios mínimos para salvar:

- **Nome fantasia**
- **Razão social**
- **CNPJ** (em formato válido)
- **Logradouro**
- **Bairro**
- **Telefone**
- **CEP**
- **Cidade**

## Mensagens

- **Selecionar imagem de logomarca**
- **Falha ao ler imagem:** confirme se o arquivo é uma imagem válida (PNG/JPG) e tente novamente.
- **O arquivo selecionado não pode ser interpretado como uma imagem:** selecione outro arquivo de imagem, preferencialmente em formato PNG ou JPG.
- **Preparando formulário**
- **Valores inválidos:** revise os campos obrigatórios e o formato dos dados antes de salvar.
- **Os seguintes problemas foram encontrados:** + lista de validações. Corrija cada item listado e tente salvar novamente.
- **Salvando alterações**
- **Falha ao salvar:** verifique os dados preenchidos, confirme conexão com serviços do sistema e tente novamente.
- **Não foi possível concluir a ação no momento:** aguarde alguns instantes e repita a operação; se persistir, acione o suporte.
- **Alterações salvas**
- **As informações do estabelecimento foram salvas com sucesso e entrarão em vigor após a reinicialização do sistema.**
- **Cancelar**
- **Tem certeza de que deseja cancelar?**

## Passo a passo recomendado

1. Acesse **Estabelecimento > Informações do estabelecimento**.
2. Atualize os dados da aba **Institucional**.
3. Revise as informações da aba **Endereço**.
4. Configure os gateways da aba **TEF**, quando aplicável.
5. Ajuste imagem e mensagens da aba **Autoatendimento**, quando necessário.
6. Clique em **Salvar** e valide a mensagem de sucesso.
