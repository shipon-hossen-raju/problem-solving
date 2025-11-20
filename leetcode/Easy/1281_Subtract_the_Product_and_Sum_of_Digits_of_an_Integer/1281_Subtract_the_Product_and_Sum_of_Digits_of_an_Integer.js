/*
🔢 Problem: 1281. Subtract the Product and Sum of Digits of an Integer
🔗 Link: 
📘 Difficulty: Easy

 📝 description:
      Given an integer number n, return the difference between the product of its digits and the sum of its digits.

 📌 Example:
   Example 1:
      Input: n = 234
      Output: 15 
      Explanation: 
      Product of digits = 2 * 3 * 4 = 24 
      Sum of digits = 2 + 3 + 4 = 9 
      Result = 24 - 9 = 15

   Example 2:
      Input: n = 4421
      Output: 21
      Explanation: 
      Product of digits = 4 * 4 * 2 * 1 = 32 
      Sum of digits = 4 + 4 + 2 + 1 = 11 
      Result = 32 - 11 = 21

*/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const numbers = String(n).split("");
  const digits = numbers.reduce((acc, cur) => Number(acc) * Number(cur), 1);
  const sum = numbers.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return digits - sum;
};
const n = 4421;
console.log("n = 4421 ", subtractProductAndSum(n));
