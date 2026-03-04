---
tipo: processo
codigo: processo-venda-ingresso-bilheteria
nome: Venda de ingresso na bilheteria
area: Vendas
nivel: operacional
versão_minima: 1.9.13
slug: venda-ingresso-bilheteria
---

## Objetivo do Processo

Orientar a venda de ingressos na bilheteria, garantindo os registros corretos e a emissão do ingresso sem erros.

## Perfis Envolvidos

- **Operador de Bilheteria**
- **Supervisor/Gerente** (para exceções, descontos ou cancelamentos)

## Pré-requisitos

- Tipos de ingresso cadastrados e ativos.
- Plano de venda configurado para a data/horário de venda.
- Caixa aberto.
- Formas de pagamento habilitadas.
- Vendedores cadastrados (quando o tipo de ingresso permitir venda por vendedor).

## Fluxo Resumido (Visão Macro)

1. Acessar a bilheteria.
2. Selecionar o plano de venda.
3. Identificar o sacado quando necessário.
4. Informar a quantidade e conferir valores.
5. Registrar o pagamento.
6. Emitir/imprimir o ingresso.

## Passo a Passo Detalhado

### Passo 1 – Acessar a bilheteria

1. Acesse **Acesso rápido > Bilheteria**.

### Passo 2 – Selecionar plano de venda

1. Escolha o **plano de venda** disponível.
2. Se o tipo permitir, selecione o **vendedor**.
3. Use o botão **+** para adicionar a **quantidade** desejada.
4. Clique em **Finalizar compra** para abrir a tela de cobrança.

### Passo 3 – Identificar comprador/sacado (quando aplicável)

1. Quando precisar identificar o sacado, use a opção **Procurar** pessoa na cobrança.

### Passo 4 – Registrar pagamento

1. Selecione a **modalidade de cobrança**.
2. Selecione a **forma de pagamento**.
3. Selecione o **meio de pagamento**.
4. Informe as **parcelas** e clique em **Adicionar parcelas** para vinculá-las à cobrança.
5. Confirme o **valor total** e eventuais **descontos/autorização**.
6. Clique em **Salvar** para concluir a venda.

### Passo 5 – Emissão do ingresso

1. Verifique a **impressão/geração** do ingresso.
2. Entregue o ingresso ao cliente.

## Variações Comuns

- **Venda com vendedor:** aparece apenas quando o tipo de ingresso permite vendedor.
- **Venda com desconto:** use apenas quando houver autorização.
- **Venda para portador identificado:** necessária quando o ingresso exige vínculo a pessoa.
- **Pagamento em mais de uma parcela:** informe o valor da 1ª parcela, clique em **Adicionar parcelas**, informe o valor da 2ª parcela e clique em **Adicionar parcelas** novamente, repetindo até completar todas as parcelas.

## Check-list Final

- [ ] Plano de venda correto selecionado.
- [ ] Quantidade e valores conferidos.
- [ ] Pagamento registrado.
- [ ] Ingresso emitido/impresso corretamente.

