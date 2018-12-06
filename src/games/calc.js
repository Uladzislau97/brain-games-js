import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const includedMinRandomIndex = 0;
const excludedMaxRandomIndex = 3;
const gameDescription = 'What is the result of the expression?';

const arithmeticSigns = ['+', '-', '*'];
const arithmeticOperations = {
  '+': {
    perform: (firstNumber, secondNumber) => firstNumber + secondNumber,
  },
  '-': {
    perform: (firstNumber, secondNumber) => firstNumber - secondNumber,
  },
  '*': {
    perform: (firstNumber, secondNumber) => firstNumber * secondNumber,
  },
};

const generateRandomArithmeticSign = () => {
  const randomIndex = generateRandomNumber(
    includedMinRandomIndex, excludedMaxRandomIndex,
  );
  return arithmeticSigns[randomIndex];
};

const generateTask = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const sign = generateRandomArithmeticSign();
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const correctAnswer = arithmeticOperations[sign]
    .perform(firstNumber, secondNumber).toString();
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
