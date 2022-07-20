import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import random from '../utils/random.js';

const PROGRESSION_GAME_DESCRIPTION = 'What number is missing in the progression?';

export const maxFirstElement = 20;
export const amount = 10;
export const maxStep = 5;
export const minStep = 2;

const initProgressionGame = () => {
  const firstElement = random(1, maxFirstElement);
  const hiddenElementPosition = random(0, amount - 1);
  const step = random(minStep, maxStep);
  const correctAnswer = firstElement + hiddenElementPosition * step;
  let question = '';
  for (let i = 0; i < amount; i += 1) {
    if (i === hiddenElementPosition) {
      question = `${question}.. `;
    } else {
      question = `${question}${i * step + firstElement} `;
    }
  }
  return cons(question.trim(), String(correctAnswer));
};

export default () => gameEngine(PROGRESSION_GAME_DESCRIPTION, initProgressionGame);
