//declare the function for the hilo game
function hilo() {
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  var randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  //print out random number so we can test
  console.log(randomNumber);
  // Create a var for user input
  var userNumber;
  //create counter
  var count = 0;
  //while loop counter is less than 8 and user and random numbers don't match
  while (count < 8 && (userNumber != randomNumber)) {
    //ask the username to guess a number from 1 to 100
    userNumber = parseInt(prompt("Please Enter a Number from 1 to 100"));
    console.log(userNumber);
    if (isNaN(userNumber)) {
      alert("Numbers only please");
    }
    //log the count to make sure it is functioning properly
    console.log(count);
    // compares the user input to see if its greater than the random number
    if (userNumber > randomNumber) {
      //give the user a message that the guess is too high
      alert("Your Guess is too high, Try Again");
      //increment the count by one
      count = count + 1;
    }
    //compare the user input with to see if its less  than the random number
    if (userNumber < randomNumber) {
      //give the user a message that the guess is too low
      alert("Your Guess is too low, Try Again");
      //increment the count by one
      count = count + 1;
    }
    //compares the user input to see if it is equal to the random number
    if (userNumber === randomNumber) {
      //give the user a message that they won
      alert("You WIN");
    }
    //compares the count to see if it equals 7 guesses
    if (count === 7 ) {
      //give the user a message that they guessed too many incorrectly
      alert("Too many guesses, You LOSE!");
    }
  }
  //alert("You are Done");
}
