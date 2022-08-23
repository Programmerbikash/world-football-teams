const playerNameAdd = [];

function display(players){
    const playerName = document.getElementById('player-name');
    playerName.innerHTML = '';
    for(let i = 0; i < players.length; i++){
        if (i < 5) {
            const playerNameList = playerNameAdd[i].playerNameList;
            const tr = document.createElement('tr')
        
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${playerNameList}</td>
            `;
            playerName.appendChild(tr);
            
        }
        else{
            return alert('Please do not over then 5 player name');
        }
    }
    

    const playerInputAmount = inputValue('player-input');
    const playerExpensesField = document.getElementById('player-expenses-field');
    const playerExpenses = playerExpensesField.innerText;
    playerExpensesField.innerText = playerInputAmount * playerNameAdd.length;
    const previousTotalPlayerAmount = playerExpensesField.innerText;
    const totalPlayerAmount = parseInt(previousTotalPlayerAmount);
    
    const managerAmount = inputValue('manager-amount');
    
    const coachAmount = inputValue('coach-amount');

    const totalAmount = totalPlayerAmount + managerAmount + coachAmount;


    const totalAmountButton = document.getElementById('total-amount');
    const previousTotalAmountButton = totalAmountButton.innerText;
    return totalAmountButton.innerText = totalAmount;

}

function addToName(element){
    const playerNameList = element.parentNode.children[0].innerText;
    const object1 = {
        playerNameList: playerNameList
    }

    playerNameAdd.push(object1);

    display(playerNameAdd);
    
}

