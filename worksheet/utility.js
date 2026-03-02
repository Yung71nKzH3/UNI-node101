/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

// export function compare(arr1, arr2) {
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }

export function compare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

export function largest(arr) {
  return Math.max(...arr);
}

export function zeroest(arr) {
  return arr.reduce((a, b) => {
    if (Math.abs(a) === Math.abs(b)) {
      return Math.max(a, b);
    }
    return Math.abs(a) < Math.abs(b) ? a : b;
  });
}


