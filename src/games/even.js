import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateTask = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
