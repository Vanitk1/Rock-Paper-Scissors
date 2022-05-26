let playerScore = 0;
            let computerScore = 0;
                            
            function computerPlay() {
                const choices = ["rock", "paper", "scissors"];
                
                let computerSelection = choices[Math.floor(Math.random() * choices.length)];
                console.log('Computer chooses: ' + computerSelection);
                return computerSelection;
            }
          
            function playRound(playerSelection, computerSelection) { 
                        
                if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                    playerScore++;
                    return win, console.log("win");
                
                    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
                    playerScore++;
                    return win, console.log("win");
                
                    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
                    playerScore++;
                    return win, console.log("win");
                
                    } else if (playerSelection == computerSelection) {
                    return lie, console.log("Tie");
                
                    } else if (computerSelection == "rock" && playerSelection == "scissors") { 
                    computerScore++;
                    return loser, console.log("better luck next time");

                    } else if (computerSelection == "paper" && playerSelection == "rock") { 
                    computerScore++;
                    return loser, console.log("better luck next time");
                
                    } else if (computerSelection == "scissors" && playerSelection == "paper") { 
                    computerScore++;
                    return loser, console.log("better luck next time");
                    }  
                }

            function game(playerChoice) {
                let player = playerChoice;
                let computer = computerPlay();
                playRound(player, computer);

                if (playerScore == 5) {
                    console.log("Winner");
                } else if (computerScore == 5) {
                    console.log("Computer Wins")
                } for (let i = 0; i < 5; i++) {
                    if (playerScore > computerScore){
                    console.log(" Congratulations! You Win " + playerScore + " to " + computerScore);
                } else {
                    console.log(" Sorry! You Lose " + computerScore + " to " + playerScore);
                    }
                }

            }
            

            let playerSelection = prompt("Your Move");
            let win = "You Win";
            let loser = "You Lose";
            let tie = "Tie";
            console.log("Player Chooses: " + playerSelection);
            game(playerSelection);
            