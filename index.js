function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3)];  //random number from 0-2
}

// console.log(getComputerChoice());

let computerSelect = getComputerChoice();
let playerSelect = prompt("Enter Choice");


function oneRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return console.log("Tie")
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")){
        return console.log("You Win");
    }
    else if((playerSelection == "rock" && computerSelection == "paper")){
        return console.log("You Lose");
    }
    else if((playerSelection == "paper" && computerSelection == "rock")){
        return console.log("You Win");
    }
    else if((playerSelection == "paper" && computerSelection == "scissors")){
        return console.log("You Lose");
    }
    else if((playerSelection == "scissors" && computerSelection == "rock")){
        return console.log("You Lose");
    }
    else if((playerSelection == "scissors" && computerSelection == "paper")){
        return console.log("You Win");
    }
}
console.log(oneRound(computerSelect, playerSelect))