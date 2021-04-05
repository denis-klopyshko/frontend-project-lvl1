#!/usr/bin/env node
import initEvenGame from '../games/even.js';
import askName from './cli.js';

console.log('Welcome to the Brain Games!');

const userName = askName();

initEvenGame(userName);
