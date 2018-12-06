import runGame from '../game-engine';
import generateRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;
const includedMinRandomIndex = 0;
const includedMinRandomCommonDifference = 1;
const excludedMaxRandomCommonDifference = 11;

const generateSequence = (firstElement, commonDifference) => Array(progressionLength)
  .fill(firstElement).map((element, index) => element + commonDifference * index);

const generateSequenceWithHiddenElement = (sequence, hiddenElementIndex) => [
  ...sequence.slice(0, hiddenElementIndex), '..', ...sequence.slice(hiddenElementIndex + 1),
];

const generateTask = () => {
  const firstElement = generateRandomNumber();
  const commonDifference = generateRandomNumber(
    includedMinRandomCommonDifference, excludedMaxRandomCommonDifference,
  );
  const sequence = generateSequence(firstElement, commonDifference);
  const hiddenElementIndex = generateRandomNumber(
    includedMinRandomIndex, progressionLength,
  );
  const correctAnswer = sequence[hiddenElementIndex].toString();
  const question = generateSequenceWithHiddenElement(sequence, hiddenElementIndex).join(' ');
  return { question, correctAnswer };
};

export default () => {
  runGame(gameDescription, generateTask);
};
