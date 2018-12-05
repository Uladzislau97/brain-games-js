import runGame from './game-engine';

const INCLUDED_MIN_RANDOM_NUMBER = 1;
const EXCLUDED_MAX_RANDOM_NUMBER = 101;
const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const generateRandomNumber = () => Math.floor(
  Math.random() * (EXCLUDED_MAX_RANDOM_NUMBER - INCLUDED_MIN_RANDOM_NUMBER)
    + INCLUDED_MIN_RANDOM_NUMBER,
);

const findGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  return a >= b ? findGCD(a % b, b) : findGCD(a, b % a);
};

const generateQuestion = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

const getCorrectAnswer = (question) => {
  const numbers = question.split(' ');
  return findGCD(...numbers).toString();
};

export default () => {
  runGame(GAME_DESCRIPTION, generateQuestion, getCorrectAnswer);
};
