<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle Financeiro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Controle Financeiro</h1>
        <div class="transaction-form-container">
            <form id="transaction-form">
                <div class="form-group">
                    <label for="description">Descrição:</label>
                    <input type="text" id="description" required>
                </div>
                <div class="form-group">
                    <label for="amount">Valor (R$):</label>
                    <input type="number" id="amount" step="0.01" required>
                </div>
                <div class="form-group">
                    <label for="type">Tipo:</label>
                    <select id="type" required>
                        <option value="income">Entrada</option>
                        <option value="expense">Saída</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="month">Mês:</label>
                    <select id="month" required>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                </div>
                <button type="submit">Adicionar Transação</button>
            </form>
        </div>
        <div class="transaction-history">
            <h2>Histórico de Transações</h2>
            <ul id="transaction-list"></ul>
        </div>
        <div class="balance">
            <h2>Saldo Atual</h2>
            <p id="balance-amount">R$ 0.00</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>