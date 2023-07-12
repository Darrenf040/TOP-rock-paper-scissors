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
        scoreC = 0;
        scoreP = 0;
    }  
    else if(scoreC == 0 || scoreP == 0){
        winner.textContent = "";
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
const displayWL = document.createElement("p");
const scoreDisplay = document.createElement("div");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const winner = document.createElement("h1");

//add score/winner displays
body.appendChild(displayWL);
body.appendChild(scoreDisplay);
scoreDisplay.appendChild(playerScore);
scoreDisplay.appendChild(computerScore);
body.appendChild(winner);

displayWL.textContent = "Good Luck Soldier";
playerScore.textContent = "Your Score: " + scoreP;
computerScore.textContent = "Computer Score: " + scoreC;

//-----------creating and adding buttons using DOM-----------//


//---------------button functionality---------------//
rock.addEventListener("click", function(e){
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
paper.addEventListener("click", function(e){
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
scissors.addEventListener("click", e => {
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
//---------------button functionality---------------//


