import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  return a >= b ? findGCD(a % b, b) : findGCD(a, b % a);
};

const generateTask = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGCD(firstNumber, secondNumber).toString();
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
