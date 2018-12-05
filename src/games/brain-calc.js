import runGame from './game-engine';

const INCLUDED_MIN_RANDOM_NUMBER = 1;
const EXCLUDED_MAX_RANDOM_NUMBER = 101;
const INCLUDED_MIN_RANDOM_INDEX = 0;
const EXCLUDED_MAX_RANDOM_INDEX = 3;
const RADIX = 10;
const GAME_DESCRIPTION = 'What is the result of the expression?';

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

const generateRandomNumber = (min, max) => Math.floor(
  Math.random() * (max - min) + min,
);

const generateRandomArithmeticSign = () => {
  const randomIndex = generateRandomNumber(
    INCLUDED_MIN_RANDOM_INDEX, EXCLUDED_MAX_RANDOM_INDEX,
  );
  return arithmeticSigns[randomIndex];
};

const generateQuestion = () => {
  const firstNumber = generateRandomNumber(
    INCLUDED_MIN_RANDOM_NUMBER, EXCLUDED_MAX_RANDOM_NUMBER,
  );
  const secondNumber = generateRandomNumber(
    INCLUDED_MIN_RANDOM_NUMBER, EXCLUDED_MAX_RANDOM_NUMBER,
  );
  const sign = generateRandomArithmeticSign();
  return `${firstNumber} ${sign} ${secondNumber}`;
};

const getCorrectAnswer = (question) => {
  const [firstNumber, sign, secondNumber] = question.split(' ');
  return arithmeticOperations[sign].perform(
    parseInt(firstNumber, RADIX),
    parseInt(secondNumber, RADIX),
  ).toString();
};

export default () => {
  runGame(GAME_DESCRIPTION, generateQuestion, getCorrectAnswer);
};
