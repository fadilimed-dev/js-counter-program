const decreaseButton =document.getElementById('deacraseBtn');
const resetButton = document.getElementById('resetBtn');
const increaseButton = document.getElementById('increaseBtn');
let label = 0;

decreaseButton.onclick = function (){
    label--;
    document.getElementById('countLabel').textContent = label;
}
~
resetButton.onclick = function (){
    label = 0;
    document.getElementById('countLabel').textContent = label;
}

increaseButton.onclick = function (){
    label++;
    document.getElementById('countLabel').textContent = label;
}