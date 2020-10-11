export function formateNumber(number: number) {
  if (number === undefined) return;
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};

export function declineWord(number: number, words: string[]) {
  /* const words = ['сутки', 'суток', 'суток']; */

  const stringifiedNumber = number.toString();
  const isEndOnOne = stringifiedNumber[stringifiedNumber.length - 1] === '1';
  const isNotEqualEleven = number !== 11;
  if (isEndOnOne && isNotEqualEleven)
    return words[0];

  const isEndNumberMoreThenOne = Number.parseInt(stringifiedNumber[stringifiedNumber.length - 1]) > 1;
  const isEndNumberLessThenFour = Number.parseInt(stringifiedNumber[stringifiedNumber.length - 1]) <= 4;
  const isEndNumberBetweenTwelveAndFourteen = number < 12 || number > 14;
  const isSecondWord = isEndNumberMoreThenOne && isEndNumberLessThenFour && isEndNumberBetweenTwelveAndFourteen;
  if (isSecondWord)
    return words[1];

  return words[2];
}