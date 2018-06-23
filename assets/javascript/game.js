var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = [];
var computerChoice;

//to initiate the game
theGame();

function theGame() {
  //Random Number/Letter Generator
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var randomLetter = alphabet[Math.floor(Math.random() * 26)];
  var computerChoice = randomLetter;

  //Lets test and see in console, what random letter has computer choosen.
  console.log(computerChoice);

  checkIfCorrect();

  function checkIfCorrect() {
    document.onkeyup = function(event) {
      //turns user's unicode into alphanumeric key, and then turns it into a lowercase string.
      //Concept:https://www.w3schools.com/jsref/jsref_fromcharcode.asp
      var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

      //Lets use if-statement to prevent user from choosing a key that's not part of the alphabet. a = unicode 65, z = unicode 90.
      //Source: http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/05/char1.html
      if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Invalid Entry! Please choose letter between a to z only");

        //else/if statement to stop user from guess a letter they already guessed
      } else if (yourGuess.indexOf(userChoice) >= 0) {
        alert("You already guessed that!");

        //if the user guesses correctly
      } else if (userChoice === computerChoice) {
        //Lets test for alert you win
        console.log("You win.");

        alert("You are Genius. You have choosen correct letter. You win!");
        wins++;

        document.getElementById("your-wins").innerHTML = wins;

        resetGame();

        //if the user guesses wrong...
      } else {
        guessesLeft--;

        document.getElementById("guesses-left").innerHTML = guessesLeft;

        //append user's choice to array yourGuess
        yourGuess.push(userChoice);

        //Lets test for your guesses so far
        console.log("Your guesses so far: " + yourGuess);

        document.getElementById("your-guesses").innerHTML = yourGuess;

        //Lets test for guesses left
        console.log("Guesses Left: " + guessesLeft);

        noGuessesLeft();
      }
    };
  }

  function resetGame() {
    guessesLeft = 9; //reset guessess left to 9
    yourGuess = []; //reset empty array
    document.getElementById("guesses-left").innerHTML = guessesLeft; //reset guessess left display on screen
    document.getElementById("your-guesses").innerHTML = yourGuess; //reset your guessess so far
    theGame(); //restart the game with new letter choice by computer.
  }

  function noGuessesLeft() {
    if (guessesLeft === 0) {
      //Lets check if you lose alert is working
      console.log("YOU LOSE.");

      alert("WRONG GUESS. YOU LOSE! TRY AGAIN.");
      // losses = losses + 1;
      losses++;

      document.getElementById("your-losses").innerHTML = losses;

      resetGame();
    } else {
      // Lets test for Wrong Guess
      console.log("Wrong Guess. Try again");
      checkIfCorrect();
    }
  }
}
