// dsa/day0.js
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Example
console.log(findLargest([3, 7, 2, 9, 5]));

// Time Complexity: O(n)
// Space Complexity: O(1)
