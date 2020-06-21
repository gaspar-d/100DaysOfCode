// Aula 11 Laços
// air table 3-3
// Adivinhar o número digitado

// Version with one player
console.log("Lets Play");
const numToGuess = Math.floor(Math.random() * 100 + 1);
let guess = prompt("I think it is: ");

if (numToGuess === guess) {
  console.log(`The guess number is ${guess}`);
  console.log("Hit it, congrats");
} else if (true) {
  while (numToGuess != guess) {
    if (guess === null) {
      break; // If cancel btn is pressed the loop stops and return a ternary
    } else {
      console.log(`The guess number is ${guess}`);
      console.log(guess < numToGuess ? `Wrong, bigger` : "Wrong, smaller");
      guess = prompt("I think it is:"); // keep asking based on the ternay above
    }
  }
  console.log(
    // this only executes when the cancel is pressed.
    guess === null
      ? "Give up"
      : `The guess number is ${guess}

  Hit it, congrats!!!`
  );
}



// Version with two human players
/* 
console.log("Lets Play");
const numToGuess = prompt("Enter a number: ");
let guess = prompt("I think it is: ");

if (numToGuess == guess) {
  console.log(`The guess number is ${guess}`);
  console.log("Hit it, congrats");
} else {
  while (numToGuess != guess) {
    console.log(`The guess number is ${guess}`);
    console.log(guess < numToGuess ? `Wrong, bigger` : "Wrong, smaller");
    guess = prompt("I think it is:");
  }
  console.log(`The guess number is ${guess}`);
  console.log("Hit it, congrats");
}
 */
