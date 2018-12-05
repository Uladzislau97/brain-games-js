import readlineSync from 'readline-sync';
import {
  displayInitialGreeting,
  askName,
  displayGreeting,
  moveToNewLine,
} from '.';

const QUESTIONS_MAX_NUMBER = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const displayBrainEvenInitialGreeting = () => {
  displayInitialGreeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  moveToNewLine();
};

const displayBrainEvenGreeting = (name) => {
  displayGreeting(name);
  moveToNewLine();
};

const displayCongratulations = name => console.log(`Congratulations, ${name}!`);

const generateRandomNumber = () => Math.floor(
  Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER,
);

const displayQuestion = number => console.log(`Question: ${number}`);

const askForAnswer = () => readlineSync.question('Your answer: ');

const isEven = number => number % 2 === 0;

const isAnswerCorrect = (answer, number) => (isEven(number)
  && answer === 'yes') || (!isEven(number) && answer === 'no');

const displayCorrectMessage = () => console.log('Correct!');

const displayIncorrectMessage = (givenAnswer, correctAnswer) => console.log(
  `'${givenAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
);

const askQuestion = (playerName, questionNumber = 1) => {
  if (questionNumber > QUESTIONS_MAX_NUMBER) {
    displayCongratulations(playerName);
    return;
  }

  const number = generateRandomNumber();
  displayQuestion(number);
  const answer = askForAnswer();

  if (isAnswerCorrect(answer, number)) {
    displayCorrectMessage();
    askQuestion(playerName, questionNumber + 1);
    return;
  }

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  displayIncorrectMessage(answer, correctAnswer);
};

export default () => {
  displayBrainEvenInitialGreeting();
  const name = askName();
  const firstQuestionNumber = 1;
  displayBrainEvenGreeting(name);
  askQuestion(name, firstQuestionNumber);
};
