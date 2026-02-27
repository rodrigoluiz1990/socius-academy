---
tipo: tela
nome_tela: Informações do estabelecimento
menu: Estabelecimento
módulo: Retaguarda
versão_minima: 1.9.13
slug: submenu-informacoes-do-estabelecimento
---

## Objetivo

Documentar a operacao da tela **Informações do estabelecimento**, utilizada para cadastro e manutencao dos dados gerais da empresa no Retaguarda.

## Identificacao da tela

- **Nome da tela:** Informações do estabelecimento
- **Form:** InformaçõesEstabelecimentoForm
- **Menu/Caminho:** Estabelecimento > Informações do estabelecimento
- **Perfil de acesso sugerido:** Administrador / Gestor

## Quando usar

- No primeiro cadastro do ambiente.
- Quando houver mudanca de dados cadastrais da empresa.
- Para revisar informações fiscais e de contato antes de processos de faturamento e emissão fiscal.

## Campos principais

### Dados cadastrais

- **Razao social:** nome juridico da empresa.
- **Nome fantasia:** nome comercial exibido no sistema e relatórios.
- **CNPJ:** identificacao fiscal da empresa.
- **Inscricao estadual / municipal:** dados fiscais conforme obrigatoriedade local.

### Endereco e contato

- **CEP, logradouro, numero, complemento, bairro, cidade, UF**
- **Telefone principal**
- **E-mail principal**

### Parametros operacionais

- **Status do estabelecimento (ativo/inativo)**
- **Configuracoes padrao de operacao** (quando disponivel no ambiente)

## Regras de negocio importantes

- CNPJ deve estar em formato valido.
- Campos obrigatorios nao podem ficar em branco (ex.: razao social, CNPJ, cidade, UF).
- Alteracoes em dados fiscais podem impactar rotinas de emissão e integracoes.
- Apenas usuarios com permissao devem alterar dados sensiveis.

## Passo a passo (cadastro/atualizacao)

1. Acessar **Estabelecimento > Informações do estabelecimento**.
2. Preencher ou revisar os dados cadastrais.
3. Preencher endereco e contatos.
4. Validar campos obrigatorios e formato dos documentos.
5. Clicar em **Salvar**.
6. Confirmar mensagem de sucesso e revisar os dados gravados.

## Acoes da tela

- **Salvar:** grava as alteracoes realizadas.
- **Cancelar/Limpar:** desfaz alteracoes nao salvas (quando disponivel).
- **Fechar/Voltar:** retorna para tela anterior sem novas alteracoes.

## Mensagens e erros comuns

- **CNPJ invalido:** conferir quantidade de digitos e formato.
- **Campo obrigatorio nao informado:** preencher os campos destacados pela validacao.
- **Sem permissao para alterar:** solicitar perfil adequado para o usuario.
- **Falha ao salvar:** revisar conectividade e tentar novamente; se persistir, acionar suporte.

## Validacao apos salvar

- Reabrir a tela e confirmar persistencia dos dados.
- Conferir se nome fantasia e dados de contato aparecem corretamente nas telas relacionadas.
- Em ambiente com fiscal/integracao, validar reflexo nas rotinas que usam dados do estabelecimento.

