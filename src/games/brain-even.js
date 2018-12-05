import runGame from './game-engine';

const INCLUDED_MIN_RANDOM_NUMBER = 1;
const EXCLUDED_MAX_RANDOM_NUMBER = 101;
const GAME_DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => Math.floor(
  Math.random() * (EXCLUDED_MAX_RANDOM_NUMBER - INCLUDED_MIN_RANDOM_NUMBER)
    + INCLUDED_MIN_RANDOM_NUMBER,
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
