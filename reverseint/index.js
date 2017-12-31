// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sig = Math.sign(n);
  n = Math.abs(n);
  let rev = parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  return sig * rev;
}

module.exports = reverseInt;
