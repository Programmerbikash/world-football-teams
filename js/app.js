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
}

function addToName(element){
    const playerNameList = element.parentNode.children[0].innerText;
    const object1 = {
        playerNameList: playerNameList
    }

    playerNameAdd.push(object1);
    console.log(playerNameAdd.length);

    display(playerNameAdd);
}