import readlineSync from 'readline-sync';

const SUCCESS_ATTEMPTS = 3;

const random = (max) => Math.floor(Math.random() * Math.floor(max));

// Function to get answer
const getAnswer = () => readlineSync.question('Your answer: ');

// Check if number isEven
const isEven = (num) => num % 2 === 0;

export default function initGame(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < SUCCESS_ATTEMPTS; i += 1) {
    const number = random(100);
    console.log(`Question: ${number}`);
    const answer = getAnswer();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
