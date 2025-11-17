const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

const countLabel = document.getElementById('countLabel');

let count = 0;

increaseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = 0;
}

decreaseBtn.onclick = () => {
    count--;
    countLabel.textContent = count;
}