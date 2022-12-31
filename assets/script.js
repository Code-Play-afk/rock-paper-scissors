//  *M
let userInput,
  botInput,
  score = 0;
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// assign the user input
{
  rockBtn.addEventListener("click", function () {
    userInput = "rock";
    playGame();
    console.log("User: " + userInput);
  });

  paperBtn.addEventListener("click", function () {
    userInput = "paper";
    playGame();
    console.log("User: " + userInput);
  });

  scissorsBtn.addEventListener("click", function () {
    userInput = "scissors";
    playGame();
    console.log("User: " + userInput);
  });
}

// assign a value to the bot

function assignBot() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      botInput = "rock";
      break;
    case 1:
      botInput = "paper";
      break;
    case 2:
      botInput = "scissors";
      break;
  }
  console.log("Bot: " + botInput);
}

// *V

// displays user choice
function displayYou() {
  const youText = document.getElementById("you-text");
  youText.innerText = "You";
  const youImg = document.getElementById("you-img");
  if (userInput === "rock") {
    youImg.setAttribute("src", "assets/_images/rock.png");
  } else if (userInput === "paper") {
    youImg.setAttribute("src", "assets/_images/paper.png");
  } else {
    youImg.setAttribute("src", "assets/_images/scissors.png");
  }
}

// displays bot pick
function displayBot() {
  const botText = document.getElementById("bot-text");
  botText.innerText = "Bot";
  const botImg = document.getElementById("bot-img");
  if (botInput === "rock") {
    botImg.setAttribute("src", "assets/_images/rock.png");
  } else if (botInput === "paper") {
    botImg.setAttribute("src", "assets/_images/paper.png");
  } else {
    botImg.setAttribute("src", "assets/_images/scissors.png");
  }
}

// displays the result
function displayResults(flag) {
  const result = document.getElementById("result");
  const count = document.getElementById("points");
  const playAgain = document.getElementById("play-again");
  count.style.border = "2px solid black";
  switch (flag) {
    case 0:
      result.innerText = "You Tied!!";
      count.innerText = score;
      break;
    case 1:
      result.innerText = "You Won!!";
      count.innerText = score;
      break;
    case 2:
      result.innerText = "You Lost!!";
      count.innerText = score;
  }
  playAgain.innerHTML = "RESET GAME";
  playAgain.addEventListener("click", clear);
}

function clear() {
  const result = document.getElementById("result");
  const count = document.getElementById("points");
  const youText = document.getElementById("you-text");
  const youImg = document.getElementById("you-img");
  const botText = document.getElementById("bot-text");
  const botImg = document.getElementById("bot-img");
  const playAgain = document.getElementById("play-again");
  result.innerText = "Make you Choice";
  count.innerText = "";
  count.style.border = "none";
  youText.innerText = "";
  botText.innerText = "";
  youImg.innerText = "";
  playAgain.innerText = "";
  youImg.removeAttribute("src");
  botImg.removeAttribute("src");
  score = 0;
}

// *C
function evaluateResult() {
  if (userInput == botInput) {
    console.log("Tie");
    displayResults(0);
  } else if (
    (userInput == "rock" && botInput == "scissors") ||
    (userInput == "paper" && botInput == "rock") ||
    (userInput == "scissors" && botInput == "paper")
  ) {
    console.log("User Wins");
    score++;
    displayResults(1);
  } else {
    console.log("Bot Wins");
    score--;
    displayResults(2);
  }
}

function playGame() {
  displayYou();
  assignBot();
  displayBot();
  evaluateResult();
}
