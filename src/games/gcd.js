import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import random from '../utils/random.js';

const GCD_GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const initGcdGame = () => {
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  const operand1 = random(1, 100);
  const operand2 = random(1, 100);

  const correctAnswer = gcd(operand1, operand2);
  const question = `${operand1} ${operand2}`;

  return cons(question, String(correctAnswer));
};

export default () => gameEngine(GCD_GAME_DESCRIPTION, initGcdGame);
