import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const NUMBER_OF_ROUNDS = 3;
const WELCOME_MESSAGE = 'Welcome to the Brain Games!';

export default (description, fn) => {
  console.log(WELCOME_MESSAGE);
  console.log(`${description}\n`);

  let correctAnswers = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const gameData = fn();
    const correctAnswer = cdr(gameData);
    const question = car(gameData);

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (correctAnswers === NUMBER_OF_ROUNDS) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
