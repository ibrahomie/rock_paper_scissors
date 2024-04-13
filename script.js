function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3)+1;
    return choice[index];
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
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');
    
    rock.addEventListener('click', () => {
        let playerChoice = 'rock';
        let computerChoice = getComputerChoice();

        document.querySelector('.round-state').textContent = playRound(playerChoice, computerChoice)
    })

    paper.addEventListener('click', () => {
        let playerChoice = 'paper';
        let computerChoice = getComputerChoice();

        document.querySelector('.round-state').textContent = playRound(playerChoice, computerChoice)
    })

    scissors.addEventListener('click', () => {
        let playerChoice = 'scissors';
        let computerChoice = getComputerChoice();

        document.querySelector('.round-state').textContent = playRound(playerChoice, computerChoice)
    })
   
       
        
  
}


playGame()