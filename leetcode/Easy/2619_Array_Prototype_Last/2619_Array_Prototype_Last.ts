export {}

/*
🔢 Problem: 2619. Array Prototype Last
🔗 Link: https://leetcode.com/problems/array-prototype-last
📘 Difficulty: Easy

 📝 description:
      Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

      You may assume the array is the output of JSON.parse.

 📌 Example:
   Example 1:
      Input: nums = [null, {}, 3]
      Output: 3
      Explanation: Calling nums.last() should return the last element: 3.

   Example 2:
      Input: nums = []
      Output: -1
      Explanation: Because there are no elements, return -1.

*/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  const lastW = this[this.length - 1];
  if (this.length > 0) {
    return lastW;
  } else {
    return -1;
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

//  const arr = [1, 2, 3];
const arr = [null];
console.log("arr.last() ", arr.last());
