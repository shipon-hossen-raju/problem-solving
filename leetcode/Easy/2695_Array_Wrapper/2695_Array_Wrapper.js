/*
🔢 Problem: 2695. Array Wrapper
🔗 Link: https://leetcode.com/problems/array-wrapper
📘 Difficulty: Easy

 📝 description:
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      You can return the answer in any order.

 📌 Example:
   Example 1:
      Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

   Example 2:
      Input: nums = [3,2,4], target = 6
      Output: [1,2]
   
   Example 3:
      Input: nums = [3,3], target = 6
      Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
   ArrayWrapper.prototype.valueOf = function () {
   return this.nums.reduce((sum, num) => sum + num, 0);
   };

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};

/**
 * Example
 */
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log("obj1 + obj2 =", obj1 + obj2);      // ✅ 10
console.log("String(obj1) =", String(obj1));    // ✅ "[1,2]"
console.log("String(obj2) =", String(obj2));    // ✅ "[3,4]"