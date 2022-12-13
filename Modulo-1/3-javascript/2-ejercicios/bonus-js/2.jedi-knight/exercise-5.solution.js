const rollDice = (sides) => {
  // Math.floor(Math.random() * (max - min + 1) + min)
  return Math.floor(Math.random() * sides + 1);
};

console.log(rollDice(20)); // => 1...6


const christmasLottery = () => {
  // 00000 ... 99999
  const randomLottery = Math.floor(Math.random() * (99999 - 0 + 1) + 1);
  return randomLottery.toString().padStart(5, '0')
}

console.log(christmasLottery())