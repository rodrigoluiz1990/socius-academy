---
tipo: tela
nome_tela: Vendedores
menu: Entidades
aplicacao: Retaguarda
slug: submenu-entidades-vendedores
---

## Objetivo

Documentar a operação da tela **Vendedores**, usada para consultar, cadastrar, editar, ativar/desativar e detalhar vendedores no Retaguarda.

## Detalhes

- **Aplicação:** Retaguarda
- **Menu:** Entidades
- **Submenu:** Vendedores

## Abas e campos da tela

### Tela: Vendedores (principal)

- **Filtros:** permite pesquisar por Nome, CPF, CNPJ, Tipo de pessoa e Corretor.
- **Grid:** exibe os registros salvos com base nos filtros utilizados (Nome, CPF/CNPJ, Corretor, Tipo de comissão, Valor de comissão e Situação).

### Tela: Novo/Editar vendedor

### Aba: Informações básicas

- **Tipo de cadastro:** define se o vendedor é Pessoa Física, Pessoa Jurídica ou Estrangeiro.
- **Nome completo / Nome fantasia:** identifica o vendedor (nome principal do cadastro).
- **CPF / CNPJ / Documento 1:** informa o documento principal, conforme o tipo de cadastro.
- **RG / IE / Documento 2:** informa o documento secundário, conforme o tipo de cadastro.
- **Razão social:** informa a razão social quando o tipo for Pessoa Jurídica.
- **Cônjuge:** registra o nome do cônjuge quando aplicável.
- **Nome da mãe:** registra o nome da mãe para referência cadastral.
- **Nome do pai:** registra o nome do pai para referência cadastral.
- **Naturalidade (cidade):** vincula a cidade de nascimento/fundação do vendedor.
- **Data de nascimento / Data de fundação:** informa a data conforme o tipo de cadastro.
- **Local de trabalho:** registra empresa/local de trabalho quando aplicável.
- **Profissão:** registra a profissão quando aplicável.
- **Observações adicionais:** permite anotar informações complementares do cadastro.

### Aba: Informações de contato

- **Grid de contatos (Tipo, Valor):** lista as informações de contato cadastradas.

### Aba: Endereços

- **Grid de endereços (Endereço, Bairro, Cidade):** lista os endereços vinculados ao vendedor.

### Aba: Anexos

- **Grid de anexos (Nome do arquivo, Data do upload, Tamanho):** lista os arquivos anexados ao cadastro.

### Aba: Venda de ingressos comissionados

- **Corretor:** seleciona o corretor responsável pelo vendedor.
- **Comissão do corretor (somente leitura):** exibe o valor/porcentagem configurado no corretor selecionado.
- **Tipo de comissão (vendedor):** define se a comissão do vendedor é por porcentagem ou valor.
- **Valor da comissão / Porcentagem da comissão (vendedor):** informa a comissão do vendedor conforme o tipo selecionado.

### Subtela: Buscar cidade

- **País:** base do vínculo geográfico; define o conjunto de províncias disponíveis.
- **Província:** depende do país selecionado e define os estados disponíveis.
- **Estado:** quando houver província, depende da província selecionada; quando não houver, fica vinculado diretamente ao país. Define as cidades disponíveis.
- **Cidade:** depende do estado selecionado; ao escolher, é vinculada na naturalidade do vendedor.

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
- **Principal:** define se o endereço é o principal do vendedor.

### Tela: Detalhes do vendedor

- Exibe os mesmos dados do cadastro (informações básicas, contatos, endereços, anexos e comissão) em modo de consulta.

## Botões da tela

### Tela principal

- **Novo vendedor:** abre o formulário para cadastro de um novo vendedor.
- **Editar selecionado:** abre o formulário para edição do vendedor selecionado.
- **Exibir detalhes:** abre a tela de detalhes do vendedor selecionado.
- **Desativar ou ativar:** altera a situação (ativo/inativo) do vendedor selecionado.

### Novo/Editar vendedor

- **Salvar:** grava o cadastro novo ou as alterações do vendedor.
- **Cancelar:** fecha o formulário mediante confirmação.
- **Buscar cidade / Remover cidade:** seleciona ou remove a naturalidade vinculada.
- **Adicionar informação:** abre o cadastro de novo contato para o vendedor.
- **Remover selecionada (informação):** remove o contato selecionado após confirmação.
- **Adicionar endereço:** abre o cadastro de novo endereço para o vendedor.
- **Remover selecionado (endereço):** remove o endereço selecionado após confirmação.
- **Exibir detalhes (endereço):** abre os detalhes do endereço selecionado.
- **Adicionar anexo:** envia arquivo e vincula ao cadastro.
- **Remover selecionado (anexo):** remove o anexo selecionado após confirmação.

### Subtelas de Novo/Editar vendedor

- **Buscar cidade > Utilizar:** confirma a cidade selecionada e aplica na naturalidade.
- **Buscar cidade > Cancelar:** fecha a seleção de cidade mediante confirmação.
- **Nova informação de contato > Adicionar:** inclui a informação de contato no cadastro.
- **Nova informação de contato > Cancelar:** fecha a subtela mediante confirmação.
- **Novo endereço > Buscar (CEP):** consulta o CEP e preenche os dados disponíveis automaticamente.
- **Novo endereço > Novo bairro:** permite cadastrar bairro quando não existir na cidade selecionada.
- **Novo endereço > Adicionar:** inclui o endereço no cadastro.
- **Novo endereço > Cancelar:** fecha a subtela mediante confirmação.

### Detalhes do vendedor

- **Salvar selecionado (anexo):** salva em disco o anexo selecionado para consulta externa.

## Regras e comportamentos importantes

- Para **editar**, **ativar/desativar** ou **exibir detalhes**, é necessário selecionar um vendedor no grid.
- O **tipo de cadastro** ajusta automaticamente rótulos e máscaras de documento.
- Para **Pessoa Jurídica**, campos como naturalidade, data de nascimento, cônjuge, nomes dos pais, local de trabalho e profissão ficam desabilitados.
- Para **Pessoa Estrangeira**, os campos de documento passam a ser **Documento 1/Documento 2**.
- **CPF/CNPJ** não pode estar duplicado.
- **CPF/CNPJ** deve ser válido conforme o tipo de cadastro.
- **Data de nascimento/fundação** deve ser menor ou igual à data atual.
- **Corretor** é obrigatório para salvar.
- Quando **Tipo de comissão** for porcentagem, o valor não pode ser maior que **100%**.
- A comissão do vendedor não pode ser maior que a comissão do corretor quando ambos possuem o mesmo tipo de comissão.
- Não é permitido incluir informação de contato duplicada (mesmo tipo e mesmo valor).
- Tamanho máximo de anexo: **25 MB** por arquivo.

Campos obrigatórios mínimos para salvar:

- **Tipo de cadastro**
- **Nome completo / Nome fantasia**
- **CPF / CNPJ / Documento 1**
- **Corretor**

## Mensagens

- **Falha ao inicializar preview das informações:** recarregue a tela; se persistir, acione o suporte.
- **Contate o suporte para maiores informações:** usar quando a falha de preview persistir.
- **Falha ao inicializar busca:** recarregue a tela e tente novamente.
- **Entre em contato com o suporte para maiores informações:** usar quando a falha de busca persistir.
- **Nenhum vendedor selecionado:** selecione um registro para continuar.
- **Selecione um registro para continuar:** clique em um item antes de executar a ação.
- **Desativar ou ativar:** confirma a alteração de status do vendedor selecionado.
- **Ação realizada com sucesso.:** alteração de status concluída.
- **Informações inválidas - O preenchimento do nome do vendedor é obrigatório:** preencha o nome e tente salvar novamente.
- **Informações inválidas - O preenchimento do CPF do vendedor é obrigatório:** preencha o CPF e tente salvar novamente.
- **Informações inválidas - O preenchimento do CNPJ do vendedor é obrigatório:** preencha o CNPJ e tente salvar novamente.
- **Informações inválidas - O preenchimento do Documento 1 do vendedor é obrigatório:** preencha o Documento 1 e tente salvar novamente.
- **CPF já cadastrado / CNPJ já cadastrado / Documento 1 já cadastrado:** altere o documento e tente novamente.
- **Informações inválidas - O CNPJ informado não é válido:** revise o CNPJ e tente salvar novamente.
- **Informações inválidas - O CPF informado não é válido:** revise o CPF e tente salvar novamente.
- **Data de nascimento inválida - A data de nascimento não pode ser maior que a data atual:** informe uma data válida.
- **Corretor inválido - O corretor deve ser informado:** selecione um corretor para continuar.
- **Porcentagem de comissão inválida - A porcentagem de comissão de venda do vendedor não pode ser maior que 100%:** ajuste o valor da comissão.
- **Comissão inválida - A comissão de venda do vendedor não pode ser maior que a comissão do corretor:** reduza a comissão ou altere o corretor.
- **Informações inválidas - Os seguintes problemas foram encontrados:** corrija cada item listado e tente salvar novamente.
- **Falha ao salvar:** revise os dados informados e tente novamente.
- **Vendedor adicionado com sucesso - Gostaria de adicionar outro?:** confirma se deseja abrir novo cadastro.
- **Vendedor atualizado - Vendedor atualizado com sucesso:** edição concluída.
- **Informação duplicada - A informação de contato informada já foi cadastrada anteriormente:** altere tipo/valor para um contato único.
- **Nenhum item selecionado - Selecione um registro para continuar:** selecione um contato antes de remover.
- **Falha ao remover - Não foi possível remover o item selecionado:** tente novamente; se persistir, acione o suporte.
- **Nenhum endereço selecionado - Selecione um registro para continuar:** selecione um endereço antes de remover/exibir detalhes.
- **Nenhum anexo selecionado - Nenhum anexo foi selecionado na tabela. Selecione um registro primeiro.:** selecione um anexo antes de remover ou salvar.
- **Remover anexo - Tem certeza de que deseja remover o anexo selecionado?:** confirma a remoção do anexo.
- **Cancelar - Tem certeza de que deseja cancelar?:** confirma o cancelamento do cadastro/edição.
- **Arquivo inválido:** selecione um arquivo existente e com permissão de leitura.
- **Arquivo muito grande - O arquivo não pode ter tamanho igual ou superior a 25MB:** selecione um arquivo menor.
- **Falha ao ler arquivo - Não foi possível enviar o arquivo para o servidor:** tente novamente; se persistir, acione o suporte.
- **Falha ao recuperar arquivo - Não foi possível recuperar o arquivo do servidor no momento:** tente novamente; se persistir, acione o suporte.
- **Substituir arquivo - Tem certeza de que deseja substituir o arquivo selecionado?:** confirma sobrescrita no salvamento do anexo.
- **Arquivo salvo em disco com sucesso - Gostaria de abrir o arquivo salvo em disco?:** confirma abertura do arquivo exportado.

## Dependências entre telas

### Onde este cadastro é utilizado

- **Bilheteria (ingressos):** utiliza o vendedor quando o tipo de ingresso permite venda por vendedor.
- **Ingresso avulso:** utiliza o vendedor para vincular a venda de ingresso avulso.
- **Ingresso avulso automático:** utiliza o vendedor para vincular a venda automática de ingresso avulso.

### Cadastros necessários para preencher esta tela

- **Corretores:** é necessário para selecionar o corretor responsável na aba de comissão.
- **Endereços (País, Província, Estado, Cidade e Bairro):** é necessário para o preenchimento dos campos de naturalidade, telefone e endereço.
- **Armazenamento de arquivos:** necessária para habilitar o envio e a manutenção de **anexos**.

## Passo a passo recomendado

1. Acesse **Entidades > Vendedores**.
2. Use os **Filtros** para localizar um cadastro existente, se necessário.
3. Clique em **Novo vendedor** para cadastrar, ou selecione um registro e clique em **Editar selecionado**.
4. Preencha a aba **Informações básicas**.
5. Se necessário, complete as abas **Informações de contato**, **Endereços**, **Anexos** e **Venda de ingressos comissionados**.
6. Clique em **Salvar** para concluir.
7. Para consulta sem edição, selecione o item e clique em **Exibir detalhes**.
