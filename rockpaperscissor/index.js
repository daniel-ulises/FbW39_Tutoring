/*
This is a simple implementation of the "rock paper scissors" game.
First we wrote a console-onle game, and after that we implemented
the game in a browser using the DOM. 

It is a simple logic and simple methos that we are all
familiar with and learned in the course so far. 
To understand this better, it is recomended to re-write
the whole game from scratch by your own. Learn by doing!
*/

// We will select the player-score container to display the increment in the score
const playerScore = document.querySelector(".player-score");

// Same as above, but for the computer score
const computerScore = document.querySelector(".computer-score");

// This will be used to display the message after each round.
const outcome = document.querySelector(".display-outcome");

// A simple function returning a random choice for the computer
function computerPlay() {
	const rps = ["rock", "paper", "scissors"];

	// Generate a random index "rps[randomNumber]" using the Math operators.
	return rps[Math.floor(Math.random() * 3)];
}

// Initializing both the computer's and the player's scores.
let pScore = 0;
let cScore = 0;

/*
Gameplay function, which will play each round depending on the choices.
"playerChoice" being the parameter for what we pick, which will be used
to compare what the first function computerPlay() picks.
*/
function switchPlay(playerChoice) {
	// We will use switch case for it to be more easy to read. We can also achieve the same thing by using if/else.

	// Here we will take our choice by passing the "playerChoice" parameter, this will be used for the comparison.
	// The case will determine what is going to happen if playerChoice happens to be "rock", and so on.
	switch (playerChoice) {
		case "rock":
			// We nest a separate switch/case but this time calling the computerPlay() function.
			// The next cases in the nested switch will determine what happens after comparing playerChoice with computerPlay().
			switch (computerPlay()) {
				case "rock": // playerChoice is "rock".
					outcome.innerHTML = "It's a tie!";
					break;
				case "paper":
					cScore++; // Here we increment the computer score which we initialized earlier.
					computerScore.innerHTML = cScore; // Display the current score in the score counter.
					outcome.innerHTML = "You lose against paper!"; // Display the message after each round.
					break;
				case "scissors":
					pScore++;
					playerScore.innerHTML = pScore;
					outcome.innerHTML = "You win against scissors!";
					break;
			}
			break;

		case "paper": // playerChoice is "paper".
			switch (computerPlay()) {
				case "rock":
					pScore++;
					playerScore.innerHTML = pScore;
					outcome.innerHTML = "You win against rock!";
					break;
				case "paper":
					outcome.innerHTML = "It's a tie!";
				case "scissors":
					cScore++;
					computerScore.innerHTML = cScore;
					outcome.innerHTML = "You lose against scissors!";
					break;
			}
			break;

		case "scissors": // playerChoice is "scissors".
			switch (computerPlay()) {
				case "rock":
					cScore++;
					computerScore.innerHTML = cScore;
					outcome.innerHTML = "You lose against rock!";
					break;
				case "paper":
					pScore++;
					playerScore.innerHTML = pScore;
					outcome.innerHTML = "You win against paper!";
					break;
				case "scissors":
					outcome.innerHTML = "It's a tie!";
					break;
			}
			break;

		default:
			return "Wrong input!";
	}

	// Here we will define what happens when either the player or the computer reaches a set amount of points.
	if (cScore == 10) {
		alert("You lose!"); // Will pop up a box with a message.

		// Here we declare a timeout, after a set amount of time we will run location.reload();
		setTimeout(() => {
			location.reload(); // This will refresh the whole page, and you can start to play again.
		}, 2000);
	} else if (pScore == 10) {
		alert("You win!");
		setTimeout(() => {
			location.reload();
		}, 2000); // 2000 milliseconds, which translate to 2 seconds.
	}
}

/* This would be the same example as above with switch/case but using if/else. 
The concept is the same, but it uses a different way of writing it, it also is a little more messy.


function gamePlay(playerChoice, computerChoice) {
	if (playerChoice === "rock") {
		if (computerChoice === "rock") {
			return "It's a tie!";
		} else if (computerChoice === "paper") {
			return "You lose against paper!";
		} else if (computerChoice === "scissors") {
			return "You win against scissors!";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "paper") {
			return "It's a tie!";
		} else if (computerChoice == "rock") {
			return "You win against rock!";
		} else if (computerChoice == "scissors") {
			return "You lost against scissors!";
		}
	} else if (playerChoice === "scissors") {
		if (computerChoice === "paper") {
			return "You win against paper!";
		} else if (computerChoice == "rock") {
			return "You lose against rock!";
		} else if (computerChoice == "scissors") {
			return "It's a tie!";
		}
	}
}
*/
