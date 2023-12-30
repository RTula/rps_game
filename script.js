function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection == "rock" ||
    playerSelection == "scissors" ||
    playerSelection == "paper"
  )
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You Won! rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You Won! scissors beats paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You Won! paper beats rock!";
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
  else if (playerSelection == "") {
    return "Please choose your object to start!";
  } else {
    return "OOPS, It looks you had a typo! Please try again! ";
  }
}

function getComputerChoice() {
  const elements = ["rock", "paper", "scissors"];
  function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const i = randomNumber(2);
  getComputerChoice = elements[i];
  return getComputerChoice;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
