export {};

/*
🔢 Problem: 2635. Apply Transform Over Each Element in Array
🔗 Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array
📘 Difficulty: Easy

 📝 description:
      Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

      The returned array should be created such that returnedArray[i] = fn(arr[i], i).

      Please solve it without the built-in Array.map method.

 📌 Example:
   Example 1:
      Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
      Output: [2,3,4]
      Explanation:
      const newArray = map(arr, plusone); // [2,3,4]
      The function increases each value in the array by one. 

   Example 2:
      Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
      Output: [1,3,5]
      Explanation: The function increases each value by the index it resides in.
   
   Example 3:
      Input: arr = [10,20,30], fn = function constant() { return 42; }
      Output: [42,42,42]
      Explanation: The function always returns 42.

*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result: number = fn(arr[i], i);
    newArr.push(result);
  }

  return newArr;
};

const arrNumbers = [1, 2, 3];
const plusone = map(arrNumbers, function (n) {
  return n + 1;
});

const plusI = map(arrNumbers, function (n, j) {
  return n + j;
});

const constant = map(arrNumbers, function () {
  return 42;
});

console.log("map plusone ", plusone);
console.log("map plusI ", plusI);
console.log("map constant ", constant);
