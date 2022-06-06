const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
                
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        console.log('Computer chooses: ' + computerSelection);
        return computerSelection;
    }  



function playRound(playerSelection, computerSelection) { 
    playerSelection = this.dataset.button;
    console.log("Player Chooses: " + playerSelection);
    computerSelection = computerPlay();
            
        if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            playerScore++;
            return win = alert("You win this round"), console.log("win");
                
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            playerScore++;
            return win = alert("You win this round"), console.log("win");
                
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            playerScore++;
            return win = alert("You win this round"), console.log("win");
                
        } else if (playerSelection == computerSelection) {
            return tie = alert("Tie"), console.log("Tie");
                
        } else if (computerSelection == "rock" && playerSelection == "scissors") { 
            computerScore++;
            return loser = alert("You lose this round"), console.log("better luck next time");

        } else if (computerSelection == "paper" && playerSelection == "rock") { 
            computerScore++;
            return loser = alert("You lose this round"), console.log("better luck next time");
                
        } else if (computerSelection == "scissors" && playerSelection == "paper") { 
            computerScore++;
            return loser = alert("You lose this round"), console.log("better luck next time");
                }  
    }



function game(playerSelection) {
    let player = playerSelection;
    let computer = computerPlay();
    playRound(player, computer);

        if (playerScore == 5) {
            return winner = alert("Congratulations you beat the computer!"),
            console.log("Winner");

        } else if (computerScore == 5) {
            return roundLoser = alert("Unfortunatley computer wins this time"),
            console.log("Computer Wins");

        } for (let i = 0; i < 5; i++) {
            if (playerScore > computerScore){
                console.log(" Congratulations! You Win " + playerScore + " to " + computerScore);
        } else {
            console.log(" Sorry! You Lose " + computerScore + " to " + playerScore);
                }
            }
    }

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

playRound(playerSelection, computerSelection)
