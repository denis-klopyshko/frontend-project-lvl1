import readlineSync from "readline-sync";

const SUCCESS_ATTEMPTS = 3;
let currentAttempt = 1;

// Initialization
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));
const expectedNumber = generateNumber(100);

console.log(`Question: ${expectedNumber}`);

// Function to get answer
const getAnswer = () => readlineSync.question("Your answer: ");

// Check if number isEven
const isEven = (num) => (num % 2 === 0 ? true : false);

const checkResult = () => {
  let answer;
  if (currentAttempt === SUCCESS_ATTEMPTS) {
    console.log("Congratulations, Bill!");
    return;
  }

  if (currentAttempt <= SUCCESS_ATTEMPTS) {
    answer = getAnswer();
    if (
      (answer === "yes" && isEven(expectedNumber)) ||
      (answer === "no" && !isEven(expectedNumber))
    ) {
      console.log("Correct!");
      currentAttempt += currentAttempt;
      checkResult();
      return;
    }

    console.log(
      "yes' is wrong answer ;(. Correct answer was 'no'./nLet's try again, Bill!"
    );
    checkResult();
  }
};
