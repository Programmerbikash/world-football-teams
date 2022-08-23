// This function for input value
function inputValue(value){
    const inputAmount = document.getElementById(value);
    const previousInputAmount = inputAmount.value;
    const inputAmountNext = parseInt(previousInputAmount);
    return inputAmountNext;
}

