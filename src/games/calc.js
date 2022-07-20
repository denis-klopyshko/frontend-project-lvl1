import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import random from '../utils/random.js';

const max = 25;
const operations = ['+', '-', '*'];
const CALC_GAME_DESCRIPTION = 'What is the result of the expression?';

const initCalcGame = () => {
  const operand1 = random(1, max);
  const operand2 = random(1, max);
  const operationIndex = random(0, operations.length - 1);
  const question = `${operand1} ${operations[operationIndex]} ${operand2}`;

  let correctAnswer;
  switch (operations[operationIndex]) {
    case '+':
      correctAnswer = operand1 + operand2;
      break;
    case '-':
      correctAnswer = operand1 - operand2;
      break;
    case '*':
      correctAnswer = operand1 * operand2;
      break;
    default:
      return false;
  }
  return cons(question, String(correctAnswer));
};

export default () => gameEngine(CALC_GAME_DESCRIPTION, initCalcGame);
