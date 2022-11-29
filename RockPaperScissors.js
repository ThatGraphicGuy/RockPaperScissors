console.log("hi");

// user's choice

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

// computer choice

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// winner of rock, paper, scissors

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You Blew Up Your Opponent!!";
  }

  if (userChoice === computerChoice) {
    return `You Tied!`;
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return `The computer won this round!`;
    } else {
      return `You beat the computer!`;
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return `The computer won this round!`;
  } else {
    return `You beat the computer!`;
  }
}

  if (useChoice === "scissors") {
    if (computerChoice === "rock") {
      return `The computer won this round!`;
  } else {
    return `You beat the computer!`;
  }
  }
};

// creating the game

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('you played: ' + userChoice);
  console.log(`The computer played: ` + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();