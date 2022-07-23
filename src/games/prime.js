import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import random from '../utils/random.js';

const PRIME_GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const initPrimeGame = () => {
  const isPrime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };

  const number = random(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, String(correctAnswer));
};

export default () => gameEngine(PRIME_GAME_DESCRIPTION, initPrimeGame);
