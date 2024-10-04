export const getRandomNumber = (lastNumber: number) => {
  console.log('random', Math.random());
  return Math.floor(Math.random() * lastNumber) + 1;
};
