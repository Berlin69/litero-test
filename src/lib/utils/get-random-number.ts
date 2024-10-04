export const getRandomNumber = (lastNumber: number) => {
  return Math.floor(Math.random() * lastNumber) + 1;
};
