import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const generateTask = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question);
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
