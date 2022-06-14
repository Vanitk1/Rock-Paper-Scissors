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
    playerScore = playerScore++;
    computerScore = computerScore++;
            
        if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
            (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
         ) {
             playerScore++
             keepPlayerScore();
             if (playerScore === 1) {
               displayResults(
                 `You won this round.
                 ${capitalize(playerSelection)} beats ${computerSelection}.`
               );
             } else if (playerScore === 2) {
               displayResults(
                 `nice smashed the computer twice. ${capitalize(
                   playerSelection
                 )} beats ${computerSelection}.`
               );
             } else if (playerScore === 3) {
               displayResults(
                 `${capitalize(
                   playerSelection
                 )} beats ${computerSelection}! Almost there, keep fighting!`
               );
             } else if (playerScore === 4) {
               displayResults(
                 `${capitalize(
                   playerSelection
                 )} beats ${computerSelection}. Just one more time and you win!`
               );
             } else if (playerScore === 5){
                displayResults(
                    `WOOOOOO YOU WON!
                      ${capitalize(
                          playerSelection
                        )} beats ${computerSelection}. Go on play another round, See if you can smash the computer again.` 
                        );
             }
                
        } else if (playerSelection == computerSelection) {
            displayResults("Tie game!");
                
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper") 
            ) { 
            computerScore++;
            keepComputerScore();
            if (computerScore === 1) {
              displayResults(
                `Ha Ha! You lost (Computer).
                ${capitalize(computerSelection)} beats ${playerSelection}.`
              );
            } else if (computerScore === 2) {
              displayResults(
                `I am learning (Computer). 
                ${capitalize(
                  computerSelection
                )} beats ${playerSelection}. Come on, You can do this!`
              );
            } else if (computerScore === 3) {
              displayResults(
                `My win is inevitable (Computer)
                ${capitalize(
                  computerSelection
                )} beats ${playerSelection}. It's ok. You got this!!`
              );
            } else if (computerScore === 4) {
              displayResults(
                `Oh no. It's match point!! 
                ${capitalize(
                  computerSelection
                )} beats ${playerSelection}. Don't let us down!`
              );
            } else if (computerScore === 5) {
              displayResults(
                `Too bad you lost!
                  ${capitalize(
                      computerSelection
                    )} beats ${playerSelection}. Better luck next time.` 
                      );
            }  
        }
    }

function capitalize(result) {
        return result.charAt(0).toUpperCase() + result.slice(1);
      }

function displayResults(result) {
    alert (result);
    }

function keepPlayerScore() {
        let playerScoreBox = document.querySelector("#player-score");
      
        playerScoreBox.textContent = playerScore;
      }

function keepComputerScore() {
        let computerScoreBox = document.querySelector("#computer-score");
      
        computerScoreBox.textContent = computerScore;
      }

function game(playerSelection) {
    let player = playerSelection;
    let computer = computerPlay();
    playRound(player, computer);

    if (playerScore === 5) {
        return declareWinner();
    }
    else if (computerScore === 5) {
        return declareWinner();
    }
    }


function declareWinner() {

    if (playerScore > computerScore) {
      return alert = "You win!", console.log = "you win";
    } else {
      return alert = "You lost", console.log = "you lose";
    }
}

function refreshPage(){
    window.location.reload();
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
}


rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);


