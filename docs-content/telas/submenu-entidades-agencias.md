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

### Subtela: Buscar cidade

- **País:** base do vínculo geográfico; define o conjunto de províncias disponíveis.
- **Província:** depende do país selecionado e define os estados disponíveis.
- **Estado:** quando houver província, depende da província selecionada; quando não houver, fica vinculado diretamente ao país. Define as cidades disponíveis.
- **Cidade:** depende do estado selecionado; ao escolher, é vinculada na naturalidade da agência.

### Subtela: Nova informação de contato

- **Tipo de informação:** define o tipo do contato (ex.: telefone, e-mail e outros tipos configurados).
- **Valor:** informa o conteúdo da informação de contato.
- **País:** habilitado quando o tipo de informação se refere a telefone.

### Subtela: Novo endereço

- **Tipo:** define o tipo de endereço a ser cadastrado.
- **CEP:** informa o CEP e permite busca automática de endereço.
- **País:** define o país do endereço.
- **Província:** define a província do endereço.
- **Estado:** define o estado do endereço.
- **Cidade:** define a cidade do endereço.
- **Bairro:** define o bairro do endereço.
- **Logradouro:** informa rua/avenida do endereço.
- **Número:** informa o número do endereço.
- **Complemento:** informa complemento quando necessário.
- **Referência:** informa ponto de referência para facilitar localização.
- **Principal:** define se o endereço é o principal da agência.

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

### Subtelas de Novo/Editar agência

- **Buscar cidade > Utilizar:** confirma a cidade selecionada e aplica na naturalidade da agência.
- **Buscar cidade > Cancelar:** fecha a seleção de cidade mediante confirmação.
- **Nova informação de contato > Adicionar:** inclui a informação de contato no cadastro da agência.
- **Nova informação de contato > Cancelar:** fecha a subtela mediante confirmação.
- **Novo endereço > Buscar (CEP):** consulta o CEP e preenche os dados disponíveis automaticamente.
- **Novo endereço > Novo bairro:** permite cadastrar bairro quando não existir na cidade selecionada.
- **Novo endereço > Adicionar:** inclui o endereço no cadastro da agência.
- **Novo endereço > Cancelar:** fecha a subtela mediante confirmação.

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
- **Valor inválido - O valor da informação de contato não pode ser vazio:** informe o valor e tente adicionar novamente.
- **Nenhum CEP informado - Informe um CEP para o endereço:** preencha o CEP antes de usar a busca automática.
- **Atenção - CEP inválido.:** revise o CEP informado e tente novamente.
- **Falha ao buscar endereço - Endereço não encontrado para o CEP informado:** valide o CEP ou preencha o endereço manualmente.

## Dependências entre telas

### Onde este cadastro é utilizado

- **NFSe em lote por resgate de voucher por agência:** usa o cadastro de agências para selecionar a agência no filtro de emissão.
- **Relatório detalhado de agências:** usa os dados de agências para geração do relatório analítico.

### Cadastros necessários para preencher esta tela

- **Endereços (País, Província, Estado, Cidade e Bairro):** é necessário para o preenchimento dos campos de naturalidade, telefone e endereço.
- **Armazenamento de arquivos:** necessária para habilitar o envio e a manutenção de **anexos**.

## Passo a passo recomendado

1. Acesse **Entidades > Agências**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova agência** para cadastrar, ou selecione um registro e clique em **Editar selecionada**.
4. Preencha a aba **Informações básicas**.
5. Se necessário, complete as abas **Informações de contato**, **Endereços** e **Anexos**.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
