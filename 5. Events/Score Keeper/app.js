const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

btn1.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        player1.textContent = p1Score;
        if (p1Score === winScore) {
            isGameOver = true;
            player1.classList.add('has-text-success');
            player2.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

btn2.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        player2.textContent = p2Score;
        if (p2Score === winScore) {
            isGameOver = true;
            player2.classList.add('has-text-success');
            player1.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

reset.addEventListener('click', resetScore);

playto.addEventListener('change', function () {
    winScore = parseInt(playto.value);
    resetScore();
})

function resetScore() {
    player1.textContent = '0';
    player2.textContent = '0';
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1.classList.remove('has-text-success', 'has-text-danger');
    player2.classList.remove('has-text-success', 'has-text-danger');
    btn1.disabled = false;
    btn2.disabled = false;
}

