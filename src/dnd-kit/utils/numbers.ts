// https://stackoverflow.com/a/32851198

export function romanize(num: number): string {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = '';
  for (const i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

// https://codereview.stackexchange.com/a/72288

const charCodeOfA = 'A'.charCodeAt(0);
const alphabetLength = 'Z'.charCodeAt(0) - charCodeOfA + 1;

function convertNumberToLetter(n: number): string {
  var charCode = charCodeOfA + n - 1;
  return String.fromCharCode(charCode);
}

export function numberToLetters(n: number): string {
  if (n <= alphabetLength) {
    return convertNumberToLetter(n);
  } else {
    var firstNumber = Math.floor((n - 1) / alphabetLength);
    var firstLetter = convertNumberToLetter(firstNumber);

    var secondNumber = n % alphabetLength || alphabetLength;
    var secondLetter = convertNumberToLetter(secondNumber);

    return firstLetter + secondLetter;
  }
}
