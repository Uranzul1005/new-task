const playerChoiceElement = document.getElementById("playerChoise");
const computerChoiceElement = document.getElementById("computerChoise");
const scores = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

let winnerScore = "";

const choices = ["rock", "paper", "scissors"];

function playgame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  playerChoiceElement.innerText = move;
  computerChoiceElement.innerText = computerChoice;

  if (
    ("rock" == move && "scissors" == computerChoice) ||
    ("paper" == move && "rock" == computerChoice) ||
    ("scissors" == move && "paper" == computerChoice)
  ) {
    playerScore++;
  } else if (computerChoice == move) {
  } else {
    computerScore++;
  }

  updateScore();
}

function updateScore() {
  scores.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore == 3) {
    setTimeout(() => {
      alert("Player wins");
      resetGame();
    }, 1);
  }

  if (computerScore == 3) {
    setTimeout(function () {
      alert("Computer wins");
      resetGame();
    }, 1);
  }
}

function resetGame() {
  playerChoiceElement.innerText = "";
  computerChoiceElement.innerText = "";
  scores.innerText = `Player: 0 | Computer: 0`;
  playerScore = 0;
  computerScore = 0;
}
