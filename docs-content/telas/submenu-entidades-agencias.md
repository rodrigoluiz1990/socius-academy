---
tipo: tela
nome_tela: Agências
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-agencias
---

## Objetivo

Documentar a operação da tela **Agências**, usada para consultar, cadastrar, editar, ativar/desativar e detalhar agências no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Agências

## Abas e campos da tela

### Tela: Agências (principal)

- **Filtros:** permite pesquisar por Nome, CPF, CNPJ, Tipo de pessoa e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, Documento, Tipo de cadastro e Situação).

### Tela: Novo/Editar agência

### Aba: Informações básicas

- **Tipo de cadastro:** define se a agência é Pessoa Física, Pessoa Jurídica ou Estrangeiro.
- **Nome completo / Nome fantasia:** identifica a agência (nome principal do cadastro).
- **CPF / CNPJ / Documento 1:** informa o documento principal, conforme o tipo de cadastro.
- **RG / IE / Documento 2:** informa o documento secundário, conforme o tipo de cadastro.
- **Razão social:** informa a razão social quando o tipo for Pessoa Jurídica.
- **Cônjuge:** registra o nome do cônjuge quando aplicável.
- **Nome da mãe:** registra o nome da mãe para referência cadastral.
- **Nome do pai:** registra o nome do pai para referência cadastral.
- **Naturalidade (cidade):** vincula a cidade de nascimento/fundação da agência.
- **Data de nascimento / Data de fundação:** informa a data conforme o tipo de cadastro.
- **Local de trabalho:** registra empresa/local de trabalho quando aplicável.
- **Profissão:** registra a profissão quando aplicável.
- **Observações adicionais:** permite anotar informações complementares do cadastro.

### Aba: Informações de contato

- **Grid de contatos (Tipo, Valor):** lista os contatos cadastrados da agência.

### Aba: Endereços

- **Grid de endereços (Endereço, Bairro, Cidade):** lista os endereços vinculados à agência.

### Aba: Anexos

- **Grid de anexos (Nome do arquivo, Data do upload, Tamanho):** lista os arquivos anexados ao cadastro.

### Tela: Detalhes da agência

- Exibe os mesmos dados do cadastro (informações básicas, contatos, endereços e anexos) em modo de consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Nova agência:** abre o formulário para cadastro de uma nova agência.
- **Editar selecionada:** abre o formulário para edição da agência selecionada.
- **Desativar ou ativar:** altera a situação (ativa/inativa) da agência selecionada.
- **Exibir detalhes:** abre a tela de detalhes da agência selecionada.

### Novo/Editar agência

- **Salvar:** grava o cadastro novo ou as alterações da agência.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Buscar cidade / Remover cidade:** seleciona ou remove a naturalidade vinculada.
- **Adicionar informação:** abre o cadastro de novo contato para a agência.
- **Remover selecionada (informação):** remove o contato selecionado após confirmação.
- **Adicionar endereço:** abre o cadastro de novo endereço para a agência.
- **Remover selecionado (endereço):** remove o endereço selecionado após confirmação.
- **Exibir detalhes (endereço):** abre os detalhes do endereço selecionado.
- **Adicionar anexo:** envia arquivo e vincula ao cadastro.
- **Remover selecionado (anexo):** remove o anexo selecionado após confirmação.

### Detalhes da agência

- **Salvar selecionado (anexo):** salva em disco o anexo selecionado para consulta externa.

## Regras e comportamentos importantes

- Para **editar**, **ativar/desativar** ou **exibir detalhes**, é necessário selecionar uma agência no grid.
- O campo **Nome completo / Nome fantasia** é obrigatório para salvar.
- O sistema valida os dados da entidade antes de salvar e lista inconsistências quando houver.
- **Data de nascimento/fundação** não pode ser maior que a data atual.
- Não é permitido salvar agência com **CPF/CNPJ já cadastrado** em outro registro.
- Para Pessoa Jurídica, o **CNPJ** deve ser válido.
- Para Pessoa Física, o **CPF** deve ser válido.
- O tipo de cadastro ajusta automaticamente os rótulos e máscaras de documento.
- Não é permitido incluir informação de contato duplicada (mesmo tipo e mesmo valor).
- Tamanho máximo de anexo: **25 MB** por arquivo.

Campos obrigatórios mínimos para salvar:

- **Nome completo / Nome fantasia**

## Mensagens

- **Falha ao inicializar preview das informações:** recarregue a tela; se persistir, acione o suporte.
- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de inicialização persistir.
- **Nenhuma agência selecionada:** selecione um registro no grid para continuar.
- **Selecione um item na tabela para continuar:** clique em uma agência antes de exibir detalhes.
- **Selecione uma agência na tabela para continuar:** clique em uma agência antes de editar ou ativar/desativar.
- **Desativar ou ativar - Tem certeza de que deseja desativar/ativar a agência "X"?:** confirme apenas se a alteração de situação for desejada.
- **Ação realizada com sucesso.:** a alteração de status da agência foi concluída.
- **Falha ao salvar:** revise os dados informados e tente novamente.
- **Verifique as informações e tente novamente.:** corrija os dados indicados e repita a operação.
- **Informações inválidas - Os seguintes problemas foram encontrados:** corrija cada item listado e tente salvar novamente.
- **Nome inválido - O preenchimento do nome da agência é obrigatório:** preencha o nome e salve novamente.
- **Data de nascimento inválida - A data de nascimento não pode ser maior que a data atual:** informe uma data válida.
- **CPF/CNPJ já cadastrado - Altere e tente novamente.:** informe um documento que não exista em outro cadastro.
- **Informações inválidas - O CNPJ informado não é válido:** revise o CNPJ e tente salvar novamente.
- **Informações inválidas - O CPF informado não é válido:** revise o CPF e tente salvar novamente.
- **Agência salva com sucesso - A agência foi salva com sucesso:** operação concluída.
- **Informação duplicada - A informação de contato informada já foi cadastrada anteriormente:** altere tipo/valor para um contato único.
- **Nenhuma informação selecionada:** selecione um contato no grid para remover.
- **Remover informação de contato - Tem certeza de que deseja remover?:** confirma a remoção do contato selecionado.
- **Nenhum endereço selecionado:** selecione um endereço no grid para remover ou exibir detalhes.
- **Remover endereço - Tem certeza de que deseja remover?:** confirma a remoção do endereço selecionado.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.
- **Arquivo inválido:** selecione um arquivo existente e com permissão de leitura.
- **Arquivo muito grande - O arquivo não pode ter tamanho igual ou superior a 25MB:** selecione um arquivo menor que 25 MB.
- **Falha ao ler arquivo - Não foi possível enviar o arquivo para o servidor:** tente novamente; se persistir, valide conexão/configuração de storage.
- **Nenhum anexo selecionado:** selecione um anexo no grid para remover.
- **Remover anexo - Tem certeza de que deseja remover o anexo selecionado?:** confirma a remoção do anexo.
- **Falha ao recuperar arquivo:** tente salvar o anexo novamente; se persistir, acione o suporte.
- **Arquivo salvo em disco com sucesso:** exportação do anexo concluída.

## Dependências entre telas

- **NFSe em lote por resgate de voucher por agência:** usa o cadastro de agências para selecionar a agência no filtro de emissão.
- **Relatório detalhado de agências:** usa os dados de agências para geração do relatório analítico.
- **Telas necessárias para realizar o cadastro desta tela:** não há dependência obrigatória de cadastro prévio em outros submenus; a naturalidade pode ser vinculada via seleção de cidade quando necessário.

## Passo a passo recomendado

1. Acesse **Entidades > Agências**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova agência** para cadastrar, ou selecione um registro e clique em **Editar selecionada**.
4. Preencha a aba **Informações básicas**.
5. Se necessário, complete as abas **Informações de contato**, **Endereços** e **Anexos**.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
