import readlineSync from 'readline-sync';

const QUESTIONS_MAX_NUMBER = 3;

const askQuestion = (generateQuestion, getCorrectAnswer, questionNumber = 1) => {
  if (questionNumber > QUESTIONS_MAX_NUMBER) {
    return { isVictory: true };
  }

  const question = generateQuestion();
  console.log(`Question: ${question}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(question);

  if (givenAnswer !== correctAnswer) {
    return { isVictory: false, givenAnswer, correctAnswer };
  }

  console.log('Correct!');
  return askQuestion(generateQuestion, getCorrectAnswer, questionNumber + 1);
};

export default (gameDescription, generateQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const gameResult = askQuestion(generateQuestion, getCorrectAnswer);
  const finalMessage = gameResult.isVictory
    ? `Congratulations, ${name}!`
    : `'${gameResult.givenAnswer}' is wrong answer ;(. Correct answer was '${gameResult.correctAnswer}'.`;
  console.log(finalMessage);
};
