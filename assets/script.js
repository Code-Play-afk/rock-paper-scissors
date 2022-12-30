//*generates messages
const displayMessage = {
  input: "Pick make your choice:\n>Rock\n>Paper\n>Scissors",
  invalid: "You enterred invalid input.\nPlease click OK to continue",
  result: "",
  score: "\n******Score******",
  playerPick: "\nYou picked:\t",
  botPick: "\nComputer picked:\t",
  replay: "\nPress OK to play again or Cancel to end the game.",
};

//* variables
let userInput, botChoice;
var win = 0,
  loss = 0,
  tie = 0;

//* takes input from user
function takeInput() {
  userInput = prompt(displayMessage.input);
  checkInput();
}

//*checks if input is valid
function checkInput() {
  switch (userInput) {
    case "Rock":
    case "Paper":
    case "Scissors":
      break;
    default:
      displayInvalidInput();
  }
}

//* displays error message if input is invalid
function displayInvalidInput() {
  alert(displayMessage.invalid);
  takeInput();
}

//* assigns a value to bot
function assignBot() {
  const randomNum = Math.floor(Math.random() * 10);
  switch (randomNum) {
    case 0:
    case 1:
    case 2:
      return "Rock";
      break;
    case 3:
    case 4:
    case 5:
      return "Paper";
      break;
    case 6:
    case 7:
    case 8:
      return "Scissors";
      break;
  }
}

//*calculates the outcome of the game
function calculateResult(userInput, botChoice) {
  if (
    (userInput == "Rock" && botChoice == "Rock") ||
    (userInput == "Paper" && botChoice == "Paper") ||
    (userInput == "Scissors" && botChoice == "Scissors")
  ) {
    displayMessage.result = "It is a tie!! Try harder next round...";
    tie += 1;
  } else if (
    (userInput == "Rock" && botChoice == "Scissors") ||
    (userInput == "Paper" && botChoice == "Rock") ||
    (userInput == "Scissors" && botChoice == "Paper")
  ) {
    displayMessage.result = "Congratulations!! You won this round...";
    win += 1;
  } else {
    displayMessage.result = "Oops!! You lost this round...";
    loss += 1;
  }
}

//* displays the outcome of the game
function displayOutcome() {
  alert(
    displayMessage.result +
      displayMessage.playerPick +
      userInput +
      displayMessage.botPick +
      botChoice +
      displayMessage.score +
      "\nWins: " +
      win +
      "\nLosses: " +
      loss +
      "\nTies: " +
      tie +
      "\nTotal: " +
      (tie + loss + win)
  );
}

//*asks to replay the game
function playAgain() {
  if (confirm(displayMessage.replay) == true) {
    playGame();
  }
}

//*runs the game
function playGame() {
  takeInput();
  botChoice = assignBot();
  calculateResult(userInput, botChoice, win, loss, tie);
  displayOutcome();
  playAgain();
}

//*debugs the game
console.log("userInput: " + userInput);
console.log("botChoice: " + botChoice);
console.log(displayMessage.result);
console.log(
  "Wins: " +
    win +
    "\nLosses: " +
    loss +
    "\nTies: " +
    tie +
    "\nTotal: " +
    (tie + loss + win)
);

playGame();