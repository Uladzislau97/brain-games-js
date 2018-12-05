import readlineSync from 'readline-sync';

const displayInitialGreeting = () => console.log('Welcome to the Brain Games!');

const askName = () => readlineSync.question('May I have your name? ');

const displayGreeting = name => console.log(`Hello, ${name}!`);

const moveToNewLine = () => console.log();

export {
  displayInitialGreeting,
  askName,
  displayGreeting,
  moveToNewLine,
};
