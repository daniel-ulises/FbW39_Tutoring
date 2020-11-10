function computerPlay() {
	const rps = ["rock", "paper", "scissor"];
	return rps[Math.floor(Math.random() * 3)];
}

function gamePlay(playerChoice, computerChoice) {
	if (playerChoice === "rock") {
		if (computerChoice === "rock") {
			return "It's a tie!";
		} else if (computerChoice === "paper") {
			return "You lose against paper!";
		} else {
			return "You win against scissor!";
		}
	}
}
