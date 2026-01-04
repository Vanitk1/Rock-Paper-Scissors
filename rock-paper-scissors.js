let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
                
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        console.log('Computer chooses: ' + computerSelection);
        return computerSelection;
    }  

function playRound(playerSelection, computerSelection) { 
    console.log("Player Chooses: " + playerSelection);

    if (gameOver) {
      return;
    }

    computerSelection = computerPlay();

        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
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
                 `Nice smashed the computer twice. ${capitalize(
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
                
        } else if (playerSelection === computerSelection) {
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

        if (playerScore === 5 || computerScore === 5) {
          declareWinner();
        }
    }

function displayResults(result, type = "neutral") {
  const resultsBox = document.querySelector("#results");
  if(!resultsBox) {
    return;
  }

  resultsBox.textContent = result;

  resultsBox.classList.remove("result--win", "result--lose")

  if (type === "win") {
    resultsBox.classList.add("result--win")
  } 

  if (type === "lose") {
    resultsBox.classList.add("result--lose")
  }
  }

function capitalize(words) {
        return words.charAt(0).toUpperCase() + words.slice(1);
      }

function keepPlayerScore() {
        const playerScoreBox = document.querySelector("#player-score");
      
        playerScoreBox.textContent = playerScore;
      }

function keepComputerScore() {
        const computerScoreBox = document.querySelector("#computer-score");
      
        computerScoreBox.textContent = computerScore;
      }

function declareWinner() {
  gameOver = true

  if (playerScore > computerScore) {
    displayResults("Woo! you won the game!, Click the Reset button play again.", "win")
  } else {
    displayResults(":( You lost - The computer wins, Click the reset button to play again.", "lose")
  }

  document.querySelectorAll(".rock, .paper, .scissors").forEach((btn) => {
    btn.disabled = true;
  });

}

function refreshPage(){
    window.location.reload();
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
}

function initUI() {
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorsButton = document.querySelector('.scissors');
  const resetButton = document.querySelector('.reset-game')

  if (rockButton && paperButton && scissorsButton) {
    rockButton.addEventListener('click', () => playRound("rock"));
    paperButton.addEventListener('click', () => playRound("paper"));
    scissorsButton.addEventListener('click', () => playRound("scissors"));
  }

  if (resetButton) {
    resetButton.addEventListener('click', refreshPage);
  }
}

window.addEventListener('DOMContentLoaded', initUI);

if (typeof module !== 'undefined') {
  module.exports = { playRound, computerPlay, capitalize };
}
