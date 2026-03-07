---
tipo: tela
nome_tela: Pessoas físicas e jurídicas
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-pessoas-fisicas-e-juridicas
---

## Objetivo

Documentar a operação da tela **Pessoas físicas e jurídicas**, usada para consultar, cadastrar, editar e detalhar pessoas no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Pessoas físicas e jurídicas

## Abas e campos da tela

### Tela: Pessoas (principal)

- **Filtros:** permite pesquisar por Nome, Email, CPF, CNPJ, Tipo de pessoa e Título de sócio.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, CPF/CNPJ, Data de nascimento, Cidade natal e Nome da mãe).

### Tela: Nova/Editar pessoa

### Aba: Informações básicas

- **Tipo de cadastro:** define se a pessoa é Física, Jurídica ou Estrangeira.
- **Nome completo / Nome fantasia:** identifica a pessoa (nome principal do cadastro).
- **CPF / CNPJ / Documento 1:** informa o documento principal, conforme o tipo de cadastro.
- **RG / IE / Documento 2:** informa o documento secundário, conforme o tipo de cadastro.
- **Razão social:** informa a razão social quando o tipo for Pessoa Jurídica.
- **Cônjuge:** registra o nome do cônjuge quando aplicável.
- **Nome da mãe:** registra o nome da mãe para referência cadastral.
- **Nome do pai:** registra o nome do pai para referência cadastral.
- **Naturalidade (cidade):** vincula a cidade de nascimento/fundação da pessoa.
- **Data de nascimento / Data de fundação:** informa a data conforme o tipo de cadastro.
- **Local de trabalho:** registra empresa/local de trabalho quando aplicável.
- **Profissão:** registra a profissão quando aplicável.
- **Salário:** registra o valor salarial quando aplicável.
- **Sexo:** define o sexo da pessoa quando aplicável.
- **Estado civil:** define o estado civil quando aplicável.
- **Código correspondente:** registra o código de integração, quando utilizado.
- **Observações adicionais:** permite anotar informações complementares do cadastro.
- **Foto:** permite capturar, carregar ou remover a foto da pessoa.

### Aba: Endereços

- **Grid de endereços (Endereço, Bairro, Cidade, Principal):** lista os endereços vinculados à pessoa.

### Aba: Informações de contato

- **Grid de contatos (Tipo, Valor):** lista as informações de contato cadastradas.

### Aba: Biometria

- **Biometrias por dedo:** cadastra, atualiza ou remove biometrias por mão/dedo.
- **Desabilitar biometrias:** desativa o uso de biometrias para a pessoa.
- **Legenda:** indica se o dedo está cadastrado ou não cadastrado.

### Aba: Anexos

- **Grid de anexos (Nome do arquivo, Data de upload, Tamanho):** lista os arquivos anexados ao cadastro.

### Aba: Reenviar Faces

- **Grid de leitor facial (Leitor Facial, Status):** exibe o status de envio de faces para leitores.

### Subtela: Buscar cidade

- **País:** base do vínculo geográfico; define o conjunto de províncias disponíveis.
- **Província:** depende do país selecionado e define os estados disponíveis.
- **Estado:** quando houver província, depende da província selecionada; quando não houver, fica vinculado diretamente ao país. Define as cidades disponíveis.
- **Cidade:** depende do estado selecionado; ao escolher, é vinculada na naturalidade da pessoa.

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
- **Principal:** define se o endereço é o principal da pessoa.

### Tela: Detalhes da pessoa

- Exibe os mesmos dados do cadastro (informações básicas, contatos, endereços, biometria, anexos e faces) em modo de consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Nova pessoa:** abre o formulário para cadastro de uma nova pessoa.
- **Editar selecionado:** abre o formulário para edição da pessoa selecionada.
- **Exibir detalhes:** abre a tela de detalhes da pessoa selecionada.
- **Exportar:** gera arquivo no formato padrão do Socius (extensão `.pessoas`) com as pessoas selecionadas no grid.
- **Importar:** permite importar apenas arquivos no formato padrão do Socius (extensão `.pessoas`); arquivos de outras bases/bancos não são compatíveis.

### Nova/Editar pessoa

- **Salvar:** grava o cadastro novo ou as alterações da pessoa.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Buscar cidade / Remover cidade:** seleciona ou remove a naturalidade vinculada.
- **Capturar:** abre a captura de foto via webcam.
- **Abrir arquivo:** carrega foto a partir de arquivo.
- **Remover foto:** remove a foto cadastrada.
- **Adicionar informação:** abre o cadastro de novo contato.
- **Remover selecionada (informação):** remove o contato selecionado.
- **Adicionar endereço:** abre o cadastro de novo endereço.
- **Remover selecionado (endereço):** remove o endereço selecionado.
- **Exibir detalhes (endereço):** abre os detalhes do endereço selecionado.
- **Adicionar anexo:** envia arquivo e vincula ao cadastro.
- **Remover selecionado (anexo):** remove o anexo selecionado após confirmação.
- **Biometria (botões de dedo):** inicia cadastro, atualização ou remoção da biometria do dedo selecionado.
- **Reenviar Faces > Listar:** consulta o status de envio das faces.
- **Reenviar Faces > Reenviar:** reenvia a foto para o leitor facial.

### Subtelas de Nova/Editar pessoa

- **Buscar cidade > Utilizar:** confirma a cidade selecionada e aplica na naturalidade.
- **Buscar cidade > Cancelar:** fecha a seleção de cidade mediante confirmação.
- **Nova informação de contato > Adicionar:** inclui a informação de contato no cadastro.
- **Nova informação de contato > Cancelar:** fecha a subtela mediante confirmação.
- **Novo endereço > Buscar (CEP):** consulta o CEP e preenche os dados disponíveis automaticamente.
- **Novo endereço > Novo bairro:** permite cadastrar bairro quando não existir na cidade selecionada.
- **Novo endereço > Adicionar:** inclui o endereço no cadastro.
- **Novo endereço > Cancelar:** fecha a subtela mediante confirmação.

## Regras e comportamentos importantes

- Para **editar** ou **exibir detalhes**, é necessário selecionar uma pessoa no grid.
- O **tipo de cadastro** ajusta automaticamente rótulos e máscaras de documento.
- Para **Pessoa Jurídica**, campos como naturalidade, sexo, estado civil e dados pessoais são desabilitados.
- Para **Pessoa Estrangeira**, os campos de documento passam a ser **Documento 1/Documento 2**.
- **CPF/CNPJ** não pode estar duplicado.
- **CPF/CNPJ** deve ser válido conforme o tipo de cadastro.
- **Data de nascimento/fundação** deve ser menor ou igual à data atual.
- Não é permitido definir **mais de um endereço principal**.
- **Campos obrigatórios adicionais** podem ser definidos pela configuração de cadastro de pessoa.
- Quando a pessoa é **titular** em **título de sócio** que exige documento, e-mail, endereço, data de nascimento, maioridade ou telefone, o sistema bloqueia o salvamento se esses dados não estiverem preenchidos.
- Endereço de cobrança **não pode ser removido** quando vinculado a título de sócio com cobrança.
- Tamanho máximo de anexo: **25 MB** por arquivo.

Campos obrigatórios mínimos para salvar:

- **Tipo de cadastro**
- **Nome completo / Nome fantasia**
- **CPF / CNPJ / Documento 1**

## Mensagens

- **Falha ao inicializar preview das informações:** recarregue a tela; se persistir, acione o suporte.
- **Contate o suporte para maiores informações:** usar quando a falha de preview persistir.
- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de busca persistir.
- **Nenhuma pessoa selecionada:** selecione um registro para continuar.
- **Selecione um registro para continuar:** clique em um item antes de executar a ação.
- **Selecione um item na tabela para continuar:** selecione registros antes de exportar.
- **Atenção - Salvar automaticamente?:** confirma salvamento automático na importação.
- **Pessoa não importada:** revise o ID do registro e tente novamente.
- **Atenção - Importar próximo registro?:** confirma continuidade após inconsistência de ID.
- **Falha ao carregar o arquivo:** verifique o arquivo e tente novamente.
- **Falha ao carregar foto:** o arquivo de imagem pode estar corrompido ou ilegível.
- **Falha ao atualizar status:** tente novamente; se persistir, acione o suporte.
- **Informações inválidas - Informe apenas números no código correspondente.:** revise o código correspondente.
- **CPF/CNPJ já está cadastrado:** altere o documento e tente novamente.
- **Informações inválidas - O CNPJ informado não é válido:** revise o CNPJ e tente novamente.
- **Informações inválidas - O CPF informado não é válido:** revise o CPF e tente novamente.
- **Endereço inválido - Não é possível definir mais de um endereço como principal:** defina apenas um endereço principal.
- **Informações inválidas - Os seguintes campos são obrigatórios:** preencha os campos listados.
- **Informações inválidas - Os seguintes problemas foram encontrados:** corrija os problemas listados.
- **Documento obrigatório:** a pessoa é titular em título de sócio que exige CPF/CNPJ.
- **E-mail obrigatório:** a pessoa é titular em título de sócio que exige e-mail.
- **Endereço obrigatório:** a pessoa é titular em título de sócio que exige endereço.
- **Data de nascimento obrigatória:** a pessoa é titular em título de sócio que exige data de nascimento.
- **Maior idade penal obrigatória:** a pessoa é titular em título de sócio que exige maioridade (18 anos ou mais).
- **Telefone obrigatório:** a pessoa é titular em título de sócio que exige telefone.
- **Endereço não pode ser removido:** endereço de cobrança não pode ser removido quando vinculado a título.
- **Dados de pessoa estrangeira inválido:** título exige endereço de cobrança nacional e CPF válido.
- **Endereço inválido:** título exige endereço de cobrança nacional.
- **Atenção - Já existe outra pessoa com o mesmo identificador no sistema. Deseja sobrescrever?:** confirma sobrescrita na importação.
- **Falha ao salvar:** verifique as informações e tente novamente.
- **Pessoa salva com sucesso:** confirma o salvamento.
- **Nenhum item selecionado:** selecione um registro para continuar.
- **Não é possível remover o item:** pessoa possui ou integra título com cobrança compartilhada; endereço, telefone e e-mail são obrigatórios.
- **Falha ao remover:** tente novamente; se persistir, acione o suporte.
- **Nenhum endereço selecionado:** selecione um registro para continuar.
- **Dado inconsistente:** a data deve ser menor ou igual à data atual.
- **Biometria cadastrada:** confirma cadastro do dedo.
- **Falha ao ler biometria:** leitura interrompida ou leitor não encontrado.
- **Biometria atualizada:** confirma atualização do dedo.
- **Biometria removida:** confirma remoção do dedo.
- **Não foi possível remover biometria.:** tente novamente; se persistir, acione o suporte.
- **Biometria já cadastrada:** permite remover, recadastrar ou não fazer nada.
- **Remover foto - Tem certeza de que deseja remover?:** confirma remoção da foto.
- **Falha ao ler imagem:** o arquivo selecionado não pôde ser interpretado como imagem.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma cancelamento do cadastro/edição.
- **Arquivo inválido:** selecione um arquivo existente e com permissão de leitura.
- **Arquivo muito grande:** o arquivo não pode ter tamanho igual ou superior a 25MB.
- **Falha ao ler arquivo:** não foi possível enviar o arquivo para o servidor.
- **Nenhum anexo selecionado:** selecione um anexo para remover.
- **Remover anexo - Tem certeza de que deseja remover o anexo selecionado?:** confirma remoção do anexo.
- **Foto enviada com sucesso:** confirma envio da foto ao leitor facial.
- **Falha ao enviar a foto:** verifique a conexão com o leitor e tente novamente.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Emissão de título (Título de sócio):** utiliza a pessoa como titular/dependente/agregado no cadastro do título.
- **Relatórios de títulos e pessoas:** utiliza dados cadastrais para filtros e identificação.
- **Autoatendimento:** utiliza nome e documento do portador em telas de pagamento, recarga, extrato e comprovantes.
- **PDV:** utiliza dados do portador do cartão (nome, documento e e-mail) em consumo, recarga, estorno, devolução, extrato e impressões.
- **Portal do Sócio (web):** utiliza dados da pessoa/título para carteirinhas e documentos do sócio.
- **Meu Cartão (web):** utiliza dados pessoais do portador no login e operações de transferência.
- **Voucher (web):** utiliza dados pessoais no cadastro/alteração do usuário e aquisição de títulos/ingressos.
- **Monitor de Acesso (desktop):** utiliza pessoa, títulos e foto/biometria na validação de acesso.
- **Monitor de Acesso (web):** utiliza pessoa/hóspede nas telas de entrada e check-in.
- **Monitor de Impressão:** utiliza o nome da pessoa em comandas e estornos.
- **Atendimento ao sócio (Iniciar atendimento ao sócio):** utiliza a pessoa para iniciar atendimento, cadastrar convites e consultar dados do sócio.
- **Visitas:** utiliza a pessoa como visitante.
- **Ativação e bloqueio de cartão de consumo:** utiliza a pessoa na ativação e edição de cartões.
- **Títulos de sócio:** utiliza a pessoa em emissão, transferência e manutenção de dependentes/agregados.
- **NF-e / NFC-e / NFS-e / CF-e:** utiliza a pessoa como tomador/transportadora nos documentos fiscais.
- **Títulos de cobrança:** utiliza a pessoa na cobrança e pagamento de títulos.
- **Alteração de convidados (Detalhes do ingresso de convidado de sócio):** utiliza a pessoa em convites e alteração de convidados.
- **Relatórios detalhados de entidades, títulos e vendas:** utiliza dados de pessoas para filtros e identificação.

### Cadastros necessários para preencher esta tela

- **Endereços (País, Província, Estado, Cidade e Bairro):** é necessário para o preenchimento dos campos de naturalidade, telefone e endereço.
- **Armazenamento de arquivos:** necessária para habilitar o envio e a manutenção de **anexos**.
- **Biometria:** necessária para habilitar o uso da aba **Biometria**.
- **Leitor facial:** necessária para habilitar o **reenviar foto** e a integração com leitores faciais.
- **Monitor de acesso:** necessário para executar o envio de fotos aos leitores faciais.

## Passo a passo recomendado

1. Acesse **Entidades > Pessoas físicas e jurídicas**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Nova pessoa** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha a aba **Informações básicas**.
5. Se necessário, complete as abas **Endereços**, **Informações de contato**, **Biometria**, **Anexos** e **Reenviar Faces**.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
