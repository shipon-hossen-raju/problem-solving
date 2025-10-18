export {}

/*
🔢 Problem: 9. Palindrome Number
🔗 Link: https://leetcode.com/problems/palindrome-number
📘 Difficulty: Easy

 📝 description:
      Given an integer x, return true if x is a palindrome, and false otherwise.

 📌 Example:
   Example 1:
      Input: x = 121
      Output: true
      Explanation: 121 reads as 121 from left to right and from right to left.

   Example 2:
      Input: x = -121
      Output: false
      Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
   
   Example 3:
      Input: x = 10
      Output: false
      Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x: number): boolean {
  const str: string = x.toString();
  const reverseData: string = str.split("").reverse().join("");
  const isP: boolean = reverseData === str;
  return isP;
}

const data = -121;
const result = isPalindrome(data);
console.log("result ", result);

// const data = -121;
