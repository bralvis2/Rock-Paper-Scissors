
function playGame() {
     /* Variables to store player wins, losses and ties */
     var wins = 0;
     var losses = 0;
     var ties = 0;
    /* Users are prompted to enter Rock (R), Paper (P), 
    or Scissors (S) to begin playing. */
    /* Prompts users to enter R P or S. */
    /* Store user input as a variable */
    var playerChoice = window.prompt("To begin playing, enter R, P, or S below");

    /* Application should accept lowercase letters too */
    var newPlayerChoice = playerChoice.toUpperCase();
    console.log(newPlayerChoice);

    if (playerChoice == null || playerChoice == ""){
        window.confirm("Ensure to type R, P, or S in the text box shown. Click okay to continue or cancel to end the game.");
        playGame();
    }


    /* The player is alerted with the answer choice the application selected. */
    /* The application randomly selects an option from an array */
    var answerChoices = ["R", "P", "S"];
    
    var appRandomChoice = answerChoices[Math.floor(Math.random()*answerChoices.length)];
    console.log(appRandomChoice);

    /* Returns the selected array item as an alert */
    var appChoice = window.alert("The computer has selected " + appRandomChoice);


    /* After the player clicks okay, the player is alerted if they won, lost, or tied */
    /* compare the player choice variable and the application choice array item to
    determine wins, losses, or ties */
    if (newPlayerChoice == appRandomChoice) {
        ties++ ;
        window.alert("It's a tie!");
    } else if (
        (newPlayerChoice === "R" && appRandomChoice === "S") ||
        (newPlayerChoice === "P" && appRandomChoice === "R") ||
        (newPlayerChoice === "S" && appRandomChoice === "P")
    ) {
        wins++ ;
        window.alert("You win!");
    } else {
        losses++ ;
        window.alert("You lose!");
    }
    /* Return the outcome as an alert */

    /* Then the player is alerted their statics. of wins, losses, and ties. */
   
    /* Variables are returned in an alert */

    /* After clicking okay, the player is asked if they would like to play again.
    Press Okay to play again or cancel to quit. */
    // Call the function to restart the game or end the game

}

playGame();