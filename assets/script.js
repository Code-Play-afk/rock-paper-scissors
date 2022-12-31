//  *M
let userInput, botInput;
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  userInput = "rock";
  playGame();
  console.log("User Input: " + userInput);
});

paperBtn.addEventListener("click", function () {
  userInput = "paper";
  console.log("User Input: " + userInput);
});

scissorsBtn.addEventListener("click", function () {
  userInput = "scissors";
  console.log("User Input: " + userInput);
});

// *V
function displayYou() {
  const youText = document.getElementById("you-text");
  youText.innerText = "You";
  const youImg = document.getElementById("you-img");
  youImg.setAttribute("src", "assets/_images/rock.png");
}
function displayBot() {
  const botText = document.getElementById("bot-text");
  botText.innerText = "Bot";
  const botImg = document.getElementById("bot-img");
  botImg.setAttribute("src", "assets/_images/rock.png");
}
function clear() {
  const youText = document.getElementById("you-text");
  const botText = document.getElementById("bot-text");
  youText.innerText = "";
  botText.innerText = "";
}

// *C
function playGame() {
  displayYou();
  displayBot();
}
