function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * 3)];  //random number from 0-2
}

console.log(getComputerChoice());