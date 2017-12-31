// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let rev = '';
//   for (let s of str) {
//     rev = s + rev;
//   }
//   return rev;
// }

function reverse(str) {
  return str.split('').reduce((rev, i) => i + rev, '');
}

module.exports = reverse;
