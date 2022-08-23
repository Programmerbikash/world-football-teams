document.getElementById('per-player-field').addEventListener('click', function(){
    const playerInput = inputValue('player-input');
    const playerExpensesField = document.getElementById('player-expenses-field');
    return playerExpensesField.innerText = playerInput;
})

document.getElementById('total-calculation').addEventListener('click', function(){
    const playerInput = inputValue('player-input');

    const managerAmount = inputValue('manager-amount');
    
    const coachAmount = inputValue('coach-amount');

    const totalAmount = playerInput + managerAmount + coachAmount;


    const totalAmountButton = document.getElementById('total-amount');
    const previousTotalAmountButton = totalAmountButton.innerText;
    return totalAmountButton.innerText = totalAmount;
    
})
