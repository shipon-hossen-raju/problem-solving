export {};

/*
🔢 Problem: 14. Longest Common Prefix
🔗 Link: https://leetcode.com/problems/longest-common-prefix
📘 Difficulty: Easy

 📝 description:
      Write a function to find the longest common prefix string amongst an array of strings.
      If there is no common prefix, return an empty string "".

 📌 Example:
   Example 1:
      Input: strs = ["flower","flow","flight"]
      Output: "fl"

   Example 2:
      Input: strs = ["dog","racecar","car"]
      Output: ""
      Explanation: There is no common prefix among the input strings
      
   Example 3:

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let firstStr = strs[0];
  for (const str of strs) {
    let j = 0;
    while (j < firstStr.length && j < str.length && firstStr[j] === str[j]) {
      j++;
    }

    firstStr = firstStr.substring(0, j);

    if (firstStr === "") return "";
  }

  return firstStr;
};

const strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log(result);
