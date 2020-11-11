const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const outcome = document.querySelector(".display-outcome");

function computerPlay() {
	const rps = ["rock", "paper", "scissors"];
	return rps[Math.floor(Math.random() * 3)];
}

let pScore = 0;
let cScore = 0;

function switchPlay(playerChoice) {
	switch (playerChoice) {
		case "rock":
			switch (computerPlay()) {
				case "rock":
					outcome.innerHTML = "It's a tie!";
					break;
				case "paper":
					cScore++;
					computerScore.innerHTML = cScore;
					outcome.innerHTML = "You lose against paper!";
					break;
				case "scissors":
					pScore++;
					playerScore.innerHTML = pScore;
					outcome.innerHTML = "You win against scissors!";
					break;
			}
			break;

		case "paper":
			switch (computerPlay()) {
				case "rock":
					return "You win against rock!";
				case "paper":
					return "It's a tie!";
				case "scissors":
					return "You lose against scsissors!";
			}
			break;

		case "scissors":
			switch (computerPlay()) {
				case "rock":
					return "You lose against rock!";
				case "paper":
					return "You win against scissors!";
				case "scissors":
					return "It's a tie!";
			}
			break;

		default:
			return "Wrong input!";
	}
}

// function gamePlay(playerChoice, computerChoice) {
// 	if (playerChoice === "rock") {
// 		if (computerChoice === "rock") {
// 			return "It's a tie!";
// 		} else if (computerChoice === "paper") {
// 			return "You lose against paper!";
// 		} else if (computerChoice === "scissors") {
// 			return "You win against scissors!";
// 		}
// 	} else if (playerChoice === "paper") {
// 		if (computerChoice === "paper") {
// 			return "It's a tie!";
// 		} else if (computerChoice == "rock") {
// 			return "You win against rock!";
// 		} else if (computerChoice == "scissors") {
// 			return "You lost against scissors!";
// 		}
// 	} else if (playerChoice === "scissors") {
// 		if (computerChoice === "paper") {
// 			return "You win against paper!";
// 		} else if (computerChoice == "rock") {
// 			return "You lose against rock!";
// 		} else if (computerChoice == "scissors") {
// 			return "It's a tie!";
// 		}
// 	}
// }
