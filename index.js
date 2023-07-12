function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3)];  //random number from 0-2
}


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
        return win;
    }
    else if((playerSelection == "rock" && computerSelection == "paper")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        return lose;
    }
    else if((playerSelection == "paper" && computerSelection == "rock")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        return win;
    }
    else if((playerSelection == "paper" && computerSelection == "scissors")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "rock")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "paper")){
        console.log("Player Choice:", playerSelection);
        console.log("Computer Choice:", computerSelection);
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

//-----------creating and adding buttons using DOM-----------//
const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const display = document.createElement("div");
body.appendChild(display)         
//-----------creating and adding buttons using DOM-----------//


//---------------button functionality---------------//
rock.addEventListener("click", function(e){
    const playRock = oneRound("rock", getComputerChoice());
    if(playRock == true){
        display.textContent = "You win";
    }
    else if(playRock == false){
        display.textContent = "You lose";
    }
    else{
        display.textContent = "tie";
    }
});
paper.addEventListener("click", function(e){
    const playPaper = oneRound("paper", getComputerChoice());
    if(playPaper == true){
        display.textContent = "You win";
    }
    else if(playPaper == false){
        display.textContent = "You lose";
    }
    else{
        display.textContent = "tie";
    }

});
scissors.addEventListener("click", e => {
    const playScissors = oneRound("scissors", getComputerChoice());
    if(playScissors == true){
        display.textContent = "You win";
    }
    else if(playScissors == false){
        display.textContent = "You lose";
    }
    else{
        display.textContent = "tie";
    }
});
//---------------button functionality---------------//


