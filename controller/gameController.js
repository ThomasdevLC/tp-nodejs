const controller = {};

const choices = ["pierre", "feuille", "ciseaux"];
let score = { wins: 0, loses: 0, ties: 0 };

const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    score.ties++;
    return `Vous avez joué ${playerChoice} , le serveur a joué ${computerChoice},  Tie!`;
  } else if (
    (playerChoice === "pierre" && computerChoice === "ciseaux") ||
    (playerChoice === "feuille" && computerChoice === "pierre") ||
    (playerChoice === "ciseaux" && computerChoice === "feuille")
  ) {
    score.wins++;
    return `Vous avez joué ${playerChoice} , le serveur a joué ${computerChoice},  You Win!`;
  } else {
    score.loses++;
    return `Vous avez joué ${playerChoice} , le serveur a joué ${computerChoice},You Lose!`;
  }
};

controller.play = (req, res) => {
  const playerChoice = req.params.choice.toLowerCase();
  if (!choices.includes(playerChoice)) {
    return res.status(400).json({ error: "Invalid choice" });
  }

  const result = playGame(playerChoice);
  res.json({ result });
};

controller.getScore = (req, res) => {
  res.json(score);
};

controller.resetScore = (req, res) => {
  score = { wins: 0, loses: 0, ties: 0 };
  res.json({ message: "Score reset successfully", score: score });
};

controller.updateScore = (req, res) => {
  const { wins, loses, ties } = req.params;
  score = { wins: parseInt(wins), loses: parseInt(loses), ties: parseInt(ties) };
  res.json({ message: "Score updated successfully", score: score });
};

module.exports = controller;
