// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let finalArray = [];
//   for (let i of array) {
//     const last = finalArray[finalArray.length - 1];
//     if (!last || last.length === size) {
//       finalArray.push([i]);
//     } else {
//       last.push(i);
//     }
//   }
//   return finalArray;
// }

function chunk(array, size) {
  let finalArray = [];
  let i = 0;
  while (i < array.length) {
    finalArray.push(array.slice(i, i + size));
    i += size;
  }
  return finalArray;
}

module.exports = chunk;
