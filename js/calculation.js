document.getElementById('per-player-field').addEventListener('click', function(){
    const playerInputAmount = inputValue('player-input');
    
    const playerExpensesField = document.getElementById('player-expenses-field');
    const playerExpenses = playerExpensesField.innerText;
    playerExpensesField.innerText = playerInputAmount;
})

document.getElementById('total-calculation').addEventListener('click', function(){
    const playerInputAmount = inputValue('player-input');

    const managerAmount = inputValue('manager-amount');

    const coachAmount = inputValue('coach-amount');

    const totalAmount = playerInputAmount + managerAmount + coachAmount;
    console.log(totalAmount)

    const totalAmountButton = document.getElementById('total-amount');
    const previousTotalAmountButton = totalAmountButton.innerText;

    return totalAmountButton.innerText = totalAmount;
})

