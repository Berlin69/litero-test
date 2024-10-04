import { getRandomNumber } from './get-random-number';

export const getResponse = (): 'alert' | 'success' | 'alert2' | 'alert3' => {
  const statuses = ['alert', 'success', 'alert2', 'alert3'];

  const randomIndex = getRandomNumber(statuses.length - 1);
  const status = statuses[randomIndex];

  return status as 'alert' | 'success' | 'alert2' | 'alert3';
};
