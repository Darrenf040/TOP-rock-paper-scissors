function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3)];  //random number from 0-2
}

let scoreP = 0;
let scoreC = 0;
function oneRound(playerSelection, computerSelection){
    let win = true;
    let lose = false;
    if(playerSelection == computerSelection){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        return;
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreP++;
        return win;
    }
    else if((playerSelection == "rock" && computerSelection == "paper")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreC++;
        return lose;
    }
    else if((playerSelection == "paper" && computerSelection == "rock")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreP++;
        return win;
    }
    else if((playerSelection == "paper" && computerSelection == "scissors")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreC++;
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "rock")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreC++;
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "paper")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        scoreP++;
        return win;
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let input = prompt();
        let newInput = input.toLowerCase(); //case insensitive
        result = oneRound(newInput, getComputerChoice());
        if(result == true){
            playerScore += 1;
        }
        else if(result == false){
            computerScore +=1;
        }
    }
    if(playerScore > computerScore){
        console.log("WINNER WINNER CHICKEN DINNER");
    }
    else if(playerScore < computerScore){
        console.log("Me personally I wouldn't let that slide");
    }
    else{
        console.log("TIE");
    }
    return playerScore;
}

//update score when someone wins and display winner
function scoreTracker(){
    if(scoreC == 5 || scoreP == 5){
        if(scoreP == 5){
            winner.textContent = "WINNER WINNER CHICKEN DINNER";
        }
        else if(scoreC == 5){
            winner.textContent = "You lost to AI? Me personally I wouldn't let that slide";
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        playAgain.textContent = "Play Again";
        body.appendChild(playAgain);
    }  
    
}

//resets score and match start msg (Good luck Soldier) 
function reset(){
    scoreC = 0;
    scoreP = 0;
    if(scoreC == 0 && scoreP == 0){
        displayWL.textContent = "Good Luck Soldier";
    }
}

//-----------creating and adding buttons using DOM-----------//
//buttons
const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

//adding buttons to body
const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

//score elements
const display = document.createElement("div");
const displayWL = document.createElement("p");
const scoreDisplay = document.createElement("div");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const winner = document.createElement("h1");

//add score/winner displays
body.appendChild(display);
display.appendChild(displayWL);
body.appendChild(scoreDisplay);
scoreDisplay.appendChild(playerScore);
scoreDisplay.appendChild(computerScore);
body.appendChild(winner);

reset();
playerScore.textContent = "Your Score: " + scoreP;
computerScore.textContent = "Computer Score: " + scoreC;

//play again button
const playAgain = document.createElement("button");

//-----------creating and adding buttons using DOM-----------//




//---------------EVENT LISTNERS---------------//
rock.addEventListener("click", function(){
    const playRock = oneRound("rock", getComputerChoice());
    if(playRock == true){
        displayWL.textContent = "You win";
    }
    else if(playRock == false){
        displayWL.textContent = "You lose";
    }
    else{
        displayWL.textContent = "tie";
    }
    playerScore.textContent = "Your Score: " + scoreP;
    computerScore.textContent = "Computer Score: " + scoreC;
    scoreTracker();
    });

paper.addEventListener("click", function(){
    const playPaper = oneRound("paper", getComputerChoice());
    if(playPaper == true){
        displayWL.textContent = "You win";
    }
    else if(playPaper == false){
        displayWL.textContent = "You lose";
    }
    else{
        displayWL.textContent = "tie";
    }
    playerScore.textContent = "Your Score: " + scoreP;
    computerScore.textContent = "Computer Score: " + scoreC;
    scoreTracker();
});

scissors.addEventListener("click", () => {
    const playScissors = oneRound("scissors", getComputerChoice());
    if(playScissors == true){
        displayWL.textContent = "You win";
    }
    else if(playScissors == false){
        displayWL.textContent = "You lose";
    }
    else{
        displayWL.textContent = "tie";
    }
    playerScore.textContent = "Your Score: " + scoreP;
    computerScore.textContent = "Computer Score: " + scoreC;
    scoreTracker();
});

//play again button functionality
playAgain.addEventListener("click", function(){
    reset();
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerScore.textContent = "Your Score: " + scoreP;
    computerScore.textContent = "Computer Score: " + scoreC;
    playAgain.parentNode.removeChild(playAgain);
    winner.textContent = "";
});

//---------------EVENT LISTNERS---------------//


