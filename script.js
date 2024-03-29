function getComputerChoice() {
    let index = Math.floor(Math.random()*3)+1;
    if (index === 1){
        return 'rock';
    } else if (index === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function playRound(playerChoice, computerChoice) {
    
    if ((playerChoice === 'rock' && computerChoice === 'scissors')
        || (playerChoice === 'paper' && computerChoice === 'rock')
        || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return ('You win! ' + playerChoice + ' beats ' + computerChoice);
        } else if ((playerChoice === 'rock' && computerChoice === 'paper')
        || (playerChoice === 'paper' && computerChoice === 'scissors')
        || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            return ('You loose! ' + computerChoice + ' beats ' + playerChoice);
        } else if (playerChoice === computerChoice) {
            return ('Draw! ' + computerChoice + ' and ' + playerChoice + ' are friends');
        } else {
            return 'Make a valid choice!!';
        }

}


function playGame() {
    let round = 0;
    
    while(round <= 4) {
        let playerChoice = prompt('Chose Rock, paper, or Scissors')
        let computerChoice = getComputerChoice()
        console.log(playRound(playerChoice.toLocaleLowerCase(), computerChoice))
        round++
    }
}


playGame()