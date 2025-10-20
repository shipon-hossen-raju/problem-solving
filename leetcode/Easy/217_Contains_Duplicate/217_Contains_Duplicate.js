/*
🔢 Problem: 217. Contains Duplicate
🔗 Link: https://leetcode.com/problems/contains-duplicate
📘 Difficulty: Easy

 📝 description:
     Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 📌 Example:
   Example 1:
      Input: nums = [1,2,3,1]
      Output: true
      Explanation: The element 1 occurs at the indices 0 and 3.

   Example 2:
      Input: nums = [1,2,3,4]
      Output: false
      Explanation: All elements are distinct.
   
   Example 3:
      Input: nums = [1,1,1,3,3,4,3,2,4,2]
      Output: true

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // error: Time Limit Exceeded
  /*
  
  let dp = [];
  nums.forEach((num) => {
    if (!dp.includes(num)) {
      dp.push(num);
    }
  });

  return nums.length !== dp.length;

  */

   // low time limit 
  const removeDuplicate = new Set(nums);
  return removeDuplicate.size !== nums.length;
};

// const nums = [1, 2, 3, 1];
const nums = [3, 2, 4];
// const nums = [3, 3];
const result = containsDuplicate(nums);
console.log(result);
