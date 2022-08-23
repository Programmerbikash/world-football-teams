function inputValue(value){
    const inputAmount = document.getElementById(value);
    const previousInputAmount = inputAmount.value;
    const inputAmountNext = parseInt(previousInputAmount);
    return inputAmountNext;
}