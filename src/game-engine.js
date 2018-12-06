import readlineSync from 'readline-sync';

const questionsMaxNumber = 3;

const askQuestion = (generateTask, questionNumber = 1) => {
  if (questionNumber > questionsMaxNumber) {
    return { isVictory: true };
  }

  const { question, correctAnswer } = generateTask();
  console.log(`Question: ${question}`);
  const givenAnswer = readlineSync.question('Your answer: ');

  if (givenAnswer !== correctAnswer) {
    return { isVictory: false, givenAnswer, correctAnswer };
  }

  console.log('Correct!');
  return askQuestion(generateTask, questionNumber + 1);
};

export default (gameDescription, generateTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const gameResult = askQuestion(generateTask);
  const finalMessage = gameResult.isVictory
    ? `Congratulations, ${name}!`
    : `'${gameResult.givenAnswer}' is wrong answer ;(. Correct answer was '${gameResult.correctAnswer}'.`;
  console.log(finalMessage);
};
