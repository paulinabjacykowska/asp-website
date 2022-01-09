export const getRandomNumber = (min, max) =>
  Math.round(min + Math.random() * (max - min));

export const isOdd = number => {
  return number % 2 !== 0;
};

export const isDivisibleThree = number => {
  return number % 3 === 0;
};
