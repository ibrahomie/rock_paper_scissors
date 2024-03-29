function computerChoice() {
    let index = Math.floor(Math.random()*3)+1;
    if (index === 1){
        return 'rock';
    } else if (index === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(computerChoice())
