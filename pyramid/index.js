// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);
//   for (var i = 0; i < n; i++) {
//     let stair = '';
//     for (var j = 0; j < 2 * n - 1; j++) {
//       if (mid - i <= j && mid + i >= j) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

function pyramid(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (stair.length === 2 * n - 1) {
    console.log(stair);
    return pyramid(n, row + 1);
  }
  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if (mid - row <= stair.length && mid + row >= stair.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, stair + add);
}

module.exports = pyramid;
