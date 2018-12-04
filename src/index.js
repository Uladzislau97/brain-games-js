import readlineSync from 'readline-sync';

export const run = () => {
  console.log("Welcome to the Brain Games!\n");
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
