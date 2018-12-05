import runGame from './game-engine';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const GAME_DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => Math.floor(
  Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER,
);

const getCorrectAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  runGame(GAME_DESCRIPTION, generateQuestion, getCorrectAnswer);
};
