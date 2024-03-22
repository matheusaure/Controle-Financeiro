// Variável para armazenar o saldo total
let balance = 0;
let selectedMonth = null;

// Selecionar elementos do formulário e histórico de transações
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const balanceAmount = document.getElementById('balance-amount');
const monthSelect = document.getElementById('month');

// Adicionar evento de submit ao formulário
transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar valores do formulário
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const month = parseInt(document.getElementById('month').value);

    // Verificar se a transação é de entrada ou saída e atualizar o saldo
    if (type === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }

    // Adicionar transação ao histórico
    addTransaction(description, amount, type, month);

    // Atualizar saldo na interface
    updateBalance();

    // Limpar o formulário
    transactionForm.reset();
});

// Adicionar evento de mudança de mês
monthSelect.addEventListener('change', function() {
    selectedMonth = parseInt(monthSelect.value);
    doFilterTransactions(selectedMonth);
});

// Função para adicionar transação ao histórico
function addTransaction(description, amount, type, month) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${description}</span>
        <span> R$ ${amount.toFixed(2)}</span>
        <span class="${type === 'income' ? 'income' : 'expense'}"> ${type === 'income' ? 'Entrada' : 'Saída'}</span>
        <span class="transaction-month"> ${month}</span>
        <button class="remove-btn">Remover</button>
    `;

    // Adicionar espaço entre os elementos
    li.innerHTML = li.innerHTML.replace(/<\/span><span/g, '</span> <span');

    transactionList.appendChild(li);

    // Restante do seu código...
}

// Função para atualizar o saldo na interface
function updateBalance() {
    balanceAmount.textContent = `R$ ${balance.toFixed(2)}`;
}

// Função para filtrar transações com base no mês
function doFilterTransactions(month) {
    console.log('Mês selecionado:', month);
    const allTransactions = document.querySelectorAll('#transaction-list li');
    allTransactions.forEach(transaction => {
        const transactionMonth = parseInt(transaction.querySelector('.transaction-month').textContent);
        if (month === transactionMonth || !month) {
            transaction.style.display = 'block';
        } else {
            transaction.style.display = 'none';
        }
    });
}