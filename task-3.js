function filterArray(numbers, value) {
  const biggerThanValue = [];
  for (const number of numbers) {
    if (number > value) {
      biggerThanValue.push(number);
    }
  }
  return biggerThanValue;
}
