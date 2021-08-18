import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import random from '../utils/random.js';

const MAX_RANDOM_VALUE = 100;
const EVEN_GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const initEvenGame = () => {
  const question = random(1, MAX_RANDOM_VALUE);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameEngine(EVEN_GAME_DESCRIPTION, initEvenGame);
