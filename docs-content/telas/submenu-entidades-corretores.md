---
tipo: tela
nome_tela: Corretores
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-corretores
---

## Objetivo

Documentar a operação da tela **Corretores**, usada para consultar, cadastrar, editar, ativar/desativar e detalhar corretores no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Corretores

## Abas e campos da tela

### Tela: Corretores (principal)

- **Filtros:** permite pesquisar por Nome, CPF, CNPJ, Tipo de pessoa e Situação.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, CPF/CNPJ, Tipo de pessoa e Situação).

### Tela: Novo/Editar corretor

### Aba: Informações básicas

- **Tipo de cadastro:** define se o corretor é Pessoa Física, Pessoa Jurídica ou Estrangeiro.
- **Nome completo / Nome fantasia:** identifica o corretor (nome principal do cadastro).
- **CPF / CNPJ / Documento 1:** informa o documento principal, conforme o tipo de cadastro.
- **RG / IE / Documento 2:** informa o documento secundário, conforme o tipo de cadastro.
- **Razão social:** informa a razão social quando o tipo for Pessoa Jurídica.
- **Cônjuge:** registra o nome do cônjuge quando aplicável.
- **Nome da mãe:** registra o nome da mãe para referência cadastral.
- **Nome do pai:** registra o nome do pai para referência cadastral.
- **Naturalidade (cidade):** vincula a cidade de nascimento/fundação do corretor.
- **Data de nascimento / Data de fundação:** informa a data conforme o tipo de cadastro.
- **Local de trabalho:** registra empresa/local de trabalho quando aplicável.
- **Profissão:** registra a profissão quando aplicável.
- **Observações adicionais:** permite anotar informações complementares do cadastro.

### Aba: Informações de contato

- **Grid de contatos (Tipo, Valor):** lista os contatos cadastrados do corretor.

### Aba: Endereços

- **Grid de endereços (Endereço, Bairro, Cidade):** lista os endereços vinculados ao corretor.

### Aba: Anexos

- **Grid de anexos (Nome do arquivo, Data do upload, Tamanho):** lista os arquivos anexados ao cadastro.

### Aba: Acesso Web

- **Acesso Web autorizado:** habilita o uso de login e senha do corretor na aplicação Talonário.
- **Login:** define o usuário de acesso quando a aplicação Talonário está autorizada.
- **Senha:** define a senha quando a aplicação Talonário está autorizada.
- **Uso do acesso web:** permite autenticação do corretor na aplicação Talonário para consulta de talonários, acompanhamento de baixas e operações vinculadas ao seu cadastro.

### Aba: Venda de ingressos comissionados

- **Tipo de comissão:** define se a comissão é por porcentagem ou valor.
- **Valor da comissão / Porcentagem da comissão:** informa o valor aplicável conforme o tipo selecionado.

### Subtela: Buscar cidade

- **País:** base do vínculo geográfico; define o conjunto de províncias disponíveis.
- **Província:** depende do país selecionado e define os estados disponíveis.
- **Estado:** quando houver província, depende da província selecionada; quando não houver, fica vinculado diretamente ao país. Define as cidades disponíveis.
- **Cidade:** depende do estado selecionado; ao escolher, é vinculada na naturalidade do corretor.

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
- **Principal:** define se o endereço é o principal do corretor.

### Tela: Detalhes do corretor

- Exibe os mesmos dados do cadastro (informações básicas, contatos, endereços, anexos, acesso web e comissão) em modo de consulta.

## Botões da tela

### Tela principal

- **Filtro:** aciona os critérios de pesquisa para refinar os registros exibidos no grid.
- **Novo corretor:** abre o formulário para cadastro de um novo corretor.
- **Editar selecionado:** abre o formulário para edição do corretor selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do corretor selecionado.
- **Exibir detalhes:** abre a tela de detalhes do corretor selecionado.

### Novo/Editar corretor

- **Salvar:** grava o cadastro novo ou as alterações do corretor.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Buscar cidade / Remover cidade:** seleciona ou remove a naturalidade vinculada.
- **Adicionar informação:** abre o cadastro de novo contato para o corretor.
- **Remover selecionada (informação):** remove o contato selecionado.
- **Adicionar endereço:** abre o cadastro de novo endereço para o corretor.
- **Remover selecionado (endereço):** remove o endereço selecionado.
- **Exibir detalhes (endereço):** abre os detalhes do endereço selecionado.
- **Adicionar anexo:** envia arquivo e vincula ao cadastro.
- **Remover selecionado (anexo):** remove o anexo selecionado após confirmação.

### Subtelas de Novo/Editar corretor

- **Buscar cidade > Utilizar:** confirma a cidade selecionada e aplica na naturalidade do corretor.
- **Buscar cidade > Cancelar:** fecha a seleção de cidade mediante confirmação.
- **Nova informação de contato > Adicionar:** inclui a informação de contato no cadastro do corretor.
- **Nova informação de contato > Cancelar:** fecha a subtela mediante confirmação.
- **Novo endereço > Buscar (CEP):** consulta o CEP e preenche os dados disponíveis automaticamente.
- **Novo endereço > Novo bairro:** permite cadastrar bairro quando não existir na cidade selecionada.
- **Novo endereço > Adicionar:** inclui o endereço no cadastro do corretor.
- **Novo endereço > Cancelar:** fecha a subtela mediante confirmação.

### Detalhes do corretor

- **Salvar selecionado (anexo):** salva em disco o anexo selecionado para consulta externa.

## Regras e comportamentos importantes

- Para **editar**, **desativar/ativar** ou **exibir detalhes**, é necessário selecionar um corretor no grid.
- O campo **Nome completo / Nome fantasia** é obrigatório para salvar.
- O documento principal (**CPF/CNPJ/Documento 1**) é obrigatório para salvar.
- Não é permitido salvar corretor com **CPF/CNPJ já cadastrado** em outro registro.
- Para Pessoa Jurídica, o **CNPJ** deve ser válido.
- Para Pessoa Física, o **CPF** deve ser válido.
- **Data de nascimento/fundação** não pode ser maior que a data atual.
- O tipo de cadastro ajusta automaticamente rótulos e máscaras de documento.
- Para Pessoa Jurídica, os campos de naturalidade e data de nascimento ficam desabilitados.
- Não é permitido incluir informação de contato duplicada (mesmo tipo e mesmo valor).
- Quando **Acesso Web** está habilitado, **Login** e **Senha** tornam-se obrigatórios.
- **Login** deve ter entre 4 e 255 caracteres; **Senha**, entre 6 e 255 caracteres.
- O **Login** não pode estar em uso por outro corretor.
- Quando **Tipo de comissão** for porcentagem, o valor não pode ser maior que **100%**.
- Tamanho máximo de anexo: **25 MB** por arquivo.

Campos obrigatórios mínimos para salvar:

- **Nome completo / Nome fantasia**
- **CPF / CNPJ / Documento 1**

## Mensagens

- **Falha ao inicializar preview das informações:** recarregue a tela; se persistir, acione o suporte.
- **Contate o suporte para maiores informações:** usar quando a falha de preview persistir.
- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de busca persistir.
- **Nenhum corretor selecionado:** selecione um registro para continuar.
- **Selecione um registro para continuar:** clique em um item antes de executar a ação.
- **Desativar ou ativar:** confirma a alteração de status do corretor selecionado.
- **Ação realizada com sucesso.:** alteração de status concluída.
- **Falha ao salvar:** revise os dados informados e tente novamente.
- **Informações inválidas - O preenchimento do nome do corretor é obrigatório:** preencha o nome e tente salvar novamente.
- **Informações inválidas - O preenchimento do CPF do corretor é obrigatório:** preencha o CPF e tente salvar novamente.
- **Informações inválidas - O preenchimento do CNPJ do corretor é obrigatório:** preencha o CNPJ e tente salvar novamente.
- **Informações inválidas - O preenchimento do Documento 1 do corretor é obrigatório:** preencha o Documento 1 e tente salvar novamente.
- **CPF já cadastrado / CNPJ já cadastrado / Documento 1 já cadastrado:** altere o documento e tente novamente.
- **Informações inválidas - O CNPJ informado não é válido:** revise o CNPJ e tente salvar novamente.
- **Informações inválidas - O CPF informado não é válido:** revise o CPF e tente salvar novamente.
- **Data de nascimento inválida - A data de nascimento não pode ser maior que a data atual:** informe uma data válida.
- **Dados inválidos - Caso habilitado o acesso Web, o login deve ser informado:** informe o login.
- **Dados inválidos - Caso habilitado o acesso Web, a senha deve ser informada:** informe a senha.
- **Dados inválidos - O login para acesso Web deve possuir de 4 a 255 caracteres.:** ajuste o tamanho do login.
- **Dados inválidos - A senha para acesso Web deve possuir de 6 a 255 caracteres.:** ajuste o tamanho da senha.
- **Dados inválidos - O login informado já está em uso por outro corretor.:** informe outro login.
- **Informações inválidas - Os seguintes problemas foram encontrados:** corrija cada item listado e tente novamente.
- **Porcentagem de comissão inválida - A porcentagem de comissão de venda do corretor não pode ser maior que 100%:** ajuste o valor da comissão.
- **Corretor adicionado com sucesso - Gostaria de adicionar outro?:** confirma se deseja abrir novo cadastro.
- **Corretor atualizado - Corretor atualizado com sucesso:** edição concluída.
- **Informação duplicada - A informação de contato informada já foi cadastrada anteriormente:** altere tipo/valor para um contato único.
- **Nenhum item selecionado - Selecione um registro para continuar:** selecione um contato antes de remover.
- **Falha ao remover - Não foi possível remover o item selecionado:** tente novamente; se persistir, acione o suporte.
- **Nenhum endereço selecionado - Selecione um registro para continuar:** selecione um endereço antes de remover/exibir detalhes.
- **Arquivo inválido:** selecione um arquivo existente e com permissão de leitura.
- **Arquivo muito grande - O arquivo não pode ter tamanho igual ou superior a 25MB:** selecione um arquivo menor.
- **Falha ao ler arquivo - Não foi possível enviar o arquivo para o servidor:** tente novamente; se persistir, acione o suporte.
- **Nenhum anexo selecionado:** selecione um anexo no grid para remover ou salvar.
- **Remover anexo - Tem certeza de que deseja remover o anexo selecionado?:** confirma a remoção do anexo.
- **Falha ao recuperar arquivo - Não foi possível recuperar o arquivo do servidor no momento:** tente novamente; se persistir, acione o suporte.
- **Substituir arquivo - Tem certeza de que deseja substituir o arquivo selecionado?:** confirma sobrescrita no salvamento do anexo.
- **Arquivo salvo em disco com sucesso - Gostaria de abrir o arquivo salvo em disco?:** confirma abertura do arquivo exportado.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Emissão de título (Título de sócio):** seleciona o corretor para vincular ao título e sua comissão.
- **Título de sócio:** permite filtrar títulos por corretor na listagem.
- **Baixa de comissão de título:** busca títulos com comissão pendente por corretor.
- **Lote de talonário:** utiliza o corretor para vincular lotes ao responsável.
- **Talonário:** utiliza o corretor como filtro e referência nos registros de talonário.
- **Baixa de talonário:** seleciona o corretor para listar talonários pendentes.
- **Cancelamento de talonário:** utiliza o corretor vinculado ao talonário.
- **Visitas:** utiliza o corretor para vincular a visita.
- **Venda de produtos do clube:** vincula o corretor à venda.
- **Bilheteria:** utiliza o corretor na venda de ingressos quando o tipo de ingresso permite comissão por corretor.
- **Relatório detalhado de corretores:** utiliza os dados de corretores para geração do relatório analítico.
- **Relatório consolidado de previsão de receita:** utiliza corretores como filtro de emissão.
- **Relatório detalhado de visita:** utiliza corretores como filtro.
- **Relatório consolidado de visita:** utiliza corretores como filtro.
- **Relatório consolidado de comissão de ingressos:** utiliza corretores como filtro.
- **Relatório detalhado de baixas de comissão (título):** utiliza corretores como filtro.
- **Relatório consolidado de baixas de comissão (título):** utiliza corretores como filtro.
- **Relatório detalhado de situação de comissão (título):** utiliza corretores como filtro.
- **Relatório detalhado de lote de talonário:** utiliza corretores como filtro.
- **Relatório consolidado de vendas de título por plano de venda:** utiliza corretores como filtro.
- **Relatório consolidado de perfil faixa etária (título):** utiliza corretores como filtro.

### Cadastros necessários para preencher esta tela

- **Endereços (País, Província, Estado, Cidade e Bairro):** é necessário para o preenchimento dos campos de naturalidade, telefone e endereço.
- **Armazenamento de arquivos:** necessária para habilitar o envio e a manutenção de **anexos**.

## Passo a passo recomendado

1. Acesse **Entidades > Corretores**.
2. Use o **Filtro** para localizar um cadastro existente, se necessário.
3. Clique em **Novo corretor** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha a aba **Informações básicas**.
5. Se necessário, complete as abas **Informações de contato**, **Endereços**, **Anexos**, **Acesso Web** e **Venda de ingressos comissionados**.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
