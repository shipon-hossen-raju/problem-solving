/*
🔢 Problem: 2235. Add Two Integers
🔗 Link: https://leetcode.com/problems/add-two-integers
📘 Difficulty: Easy

 📝 description:
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      You can return the answer in any order.

 📌 Example:
      Example 1:
         Input: num1 = 12, num2 = 5
         Output: 17
         Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

      Example 2:
         Input: num1 = -10, num2 = 4
         Output: -6
         Explanation: num1 + num2 = -6, so -6 is returned.

*/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function (num1, num2) {
  return num1 + num2;
};
const num1 = 12;
const num2 = 5;

console.log("Sum ", sum(num1, num2));
