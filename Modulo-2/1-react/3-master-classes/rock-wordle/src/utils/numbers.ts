export const getRandomBetween = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min)) + min;
};
