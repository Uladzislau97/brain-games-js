import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minPrimeNumber = 2;

const isPrime = (number) => {
  if (number < minPrimeNumber) return false;

  const maxPossibleDivider = Math.floor(Math.sqrt(number));

  const iter = (n) => {
    if (n > maxPossibleDivider) return true;
    if (number % n === 0) return false;
    return iter(n + 1);
  };

  return iter(minPrimeNumber);
};

const generateTask = () => {
  const question = generateRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
