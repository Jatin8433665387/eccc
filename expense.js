document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    // Load expenses from local storage
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Display existing expenses
    function displayExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach((expense, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${expense.amount}- $${expense.description}-$${category} <button onclick="deleteExpense(${index})">Delete</button> <button onclick="editexpense(${index})">edit</button`;
            expenseList.appendChild(listItem);
        });
    }

    // Add a new expense
    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

        if (expenseName && !isNaN(expenseAmount)) {
            const newExpense = {
                name: expenseName,
                amount: expenseAmount
            };
            expenses.push(newExpense);

            // Save to local storage
            localStorage.setItem("expenses", JSON.stringify(expenses));

            // Clear form inputs
            expenseForm.reset();

            // Display updated expensea
            displayExpenses();
        }
    });

    // Delete an expense
    function deleteExpense(index) {
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        displayExpenses();
    }

    // Initial display of expenses
    displayExpenses();
});
