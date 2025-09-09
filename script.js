function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return `ROCK`;
    case 1:
      return `PAPER`;
    case 2:
      return `SCISSORS`;
    default:
      return undefined;
  }
}

function getHumanChoice() {
  const choice = prompt("Choose your weapon! (rock, paper, or scissors)");

  return choice.toUpperCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  /*
ROCK > SCISSORS
PAPER > ROCK
SCISSORS > PAPER
*/
  function playRound(humanChoice, computerChoice) {
    let winner = null;

    // The logic behind the game
    if (humanChoice === `ROCK`) {
      if (computerChoice === `PAPER`) {
        winner = `COMPUTER`;
      } else if (computerChoice === `SCISSORS`) {
        winner = `PLAYER`;
      }
    } else if (humanChoice === `PAPER`) {
      if (computerChoice === `ROCK`) {
        winner = `PLAYER`;
      } else if (computerChoice === `SCISSORS`) {
        winner = `COMPUTER`;
      }
    } else if (humanChoice === `SCISSORS`) {
      if (computerChoice === `ROCK`) {
        winner = `COMPUTER`;
      } else if (computerChoice === `PAPER`) {
        winner = `PLAYER`;
      }
    }

    // Increment the winner's score
    if (winner === `PLAYER`) humanScore++;
    else if (winner === `COMPUTER`) computerScore++;

    // Display the results
    if (winner) {
      console.log(
        `The player chose ${humanChoice} and the computer chose ${computerChoice}`
      );
      console.log(`The winner is the ${winner}. Congrats!`);
      console.log(
        `Current score is PLAYER: ${humanScore} and COMPUTER: ${computerScore}`
      );
    } else console.log(`Something went wrong`);
  }

  // Play the game 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();
