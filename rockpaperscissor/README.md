# Rock Paper Scissors game

In the last session we completed the *"rock paper scissors"* project, sucessfully implementing it into an UI in the browser. 

During this project we figured out how to create a function to make a random choice for the computer to play with using the `Math.random()` function, adjusting the code to return the array containing **rock, paper or scissors** with a randomly generated index. The function ended up looking like this.
<br />

 	function computerPlay() {
 
		const rps = ["rock", "paper", "scissors"];
	
		return rps[Math.floor(Math.random() * 3)];

	}


---  

After creating the function generating a random choice for the computer, we had to figure out how to write a program for the whole gameplay, that would take our own choice and compare it with that of the computers.

To do this we created a new function named `gamePlay()`, which we then started filling with the logic behind the game. First we figured out how to write it using `if/else` statements and we were sucessful, we had a running game that we were able to play with in the console.

Once we knew how to do it with the `if/else` method, we wanted to try out the `switch/case` statements, and after a short explanation from our great class mate Matheus, we were able to write a whole block of code applying the logic using the `switch/case` method.  

This is a snippet of the code that shows the logic behind the solving of each round.

	function switchPlay(playerChoice) {
		switch (playerChoice) {
			case "rock":
				switch (computerPlay()) {
					case "rock": 
						outcome.innerHTML = "It's a tie!";
						break;
					case "paper":
						cScore++;
						innerHTML = cScore; 
						outcome.innerHTML = "You lose against paper!";
						break;
					case "scissors":
						pScore++;
						playerScore.innerHTML = pScore;
						outcome.innerHTML = "You win against scissors!";
						break;
				}
				break;

<br> 

## Using the DOM

Once we had a functioning game that we could play with in the console, we decided to apply that game to the browser using a UI, with a score counter and a limited number of points.

We had an HTML template to start with, and all we had to do was select the *nodes* using `document.querySelector()` and use them in the game. We added a score counter and we also had a display box where we would see if we won or lost that round.   

The last thing we implemented was also a limited number of rounds for the game, the first one to reach 10 rounds won would win the game. We implemented a small code to check for the number of rounds won, and if that number is 10, then we would execute a code letting you know if you won or lost, and a after a small timeout, using the `setTimeOut()` function, the page would refresh using the `location.reload()` function.  
  
### Additional notes

This was a fun little project and I hope you guys were able to benefit from this. Remember to try and re-write the game from scratch on your one with as little help as possible, you will benefit a lot from doing so!

The idea of the implementation of this game was taken from [The Odin Project](https://theodinproject.com).