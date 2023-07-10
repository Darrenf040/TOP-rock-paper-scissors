function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3)];  //random number from 0-2
}

// console.log(getComputerChoice());



function oneRound(playerSelection, computerSelection){
    let win = true;
    let lose = false;
    if(playerSelection == computerSelection){
        return console.log("Tie")
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")){
        console.log("You Win");
        return win;
    }
    else if((playerSelection == "rock" && computerSelection == "paper")){
        console.log("You Lose");
        return lose;
    }
    else if((playerSelection == "paper" && computerSelection == "rock")){
        console.log("You Win");
        return true;
    }
    else if((playerSelection == "paper" && computerSelection == "scissors")){
        console.log("You Lose");
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "rock")){
        console.log("You Lose");
        return lose;
    }
    else if((playerSelection == "scissors" && computerSelection == "paper")){
        console.log("You Win");
        return win;
    }
}
// console.log(oneRound(computerSelect, playerSelect));

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
game();