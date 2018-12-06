export default (min = 1, max = 101) => Math.floor(
  Math.random() * (max - min) + min,
);
