function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}



function getRoundResult(playerChoice, computerChoice) {
    let playerScore = 0;
    let computerScore = 0;

    if ((playerChoice === 'rock' && computerChoice === 'scissors')
        || (playerChoice === 'paper' && computerChoice === 'rock')
        || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return 'win';
        } else if ((playerChoice === 'rock' && computerChoice === 'paper')
        || (playerChoice === 'paper' && computerChoice === 'scissors')
        || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            return 'lose'
        } else {
            return 'draw';
        }
}


function playGame() {
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');
    let wins = 0;
    let loses = 0;

    function playRound(e) {
        let playerChoice = e.target.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = getRoundResult(playerChoice, computerChoice);
        let gameStatus = document.querySelector('.game-status');
        let body = document.querySelector('body');

        if(result === 'win') {
            wins++;
            gameStatus.textContent = `${playerChoice} beats ${computerChoice}`;
            body.style.backgroundColor = 'lightgreen';
        }
        if(result === 'lose') {
            loses++;
            gameStatus.textContent = `${playerChoice} loses to ${computerChoice}`;
            body.style.backgroundColor = 'tomato';
        }
        if(result === 'draw') {
            gameStatus.textContent = `${playerChoice} and ${computerChoice}, draw`;
            body.style.backgroundColor = 'lightgrey';
        }

        if(wins == 5) {
            gameStatus.textContent = 'You Win';
            wins = 0;
            loses = 0;
        }
        if(loses == 5) {
            gameStatus.textContent = 'You Lose';
            wins = 0;
            loses = 0;
        }

        document.querySelector('.player-score').textContent = wins;
        document.querySelector('.computer-score').textContent = loses;
    }

    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);
  
}


playGame()