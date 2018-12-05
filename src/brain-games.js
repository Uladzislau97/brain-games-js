import {
  displayInitialGreeting,
  askName,
  displayGreeting,
  moveToNewLine,
} from '.';

export default () => {
  displayInitialGreeting();
  moveToNewLine();
  const name = askName();
  displayGreeting(name);
};
