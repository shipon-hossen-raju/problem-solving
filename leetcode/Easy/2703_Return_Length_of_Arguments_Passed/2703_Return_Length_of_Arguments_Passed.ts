export {};

/*
🔢 Problem: 2703. Return Length of Arguments Passed
🔗 Link: https://leetcode.com/problems/return-length-of-arguments-passed
📘 Difficulty: Easy

 📝 description:
      Write a function argumentsLength that returns the count of arguments passed to it.

 📌 Example:
      Example 1:
         Input: args = [5]
         Output: 1
         Explanation:
         argumentsLength(5); // 1

         One value was passed to the function so it should return 1.

      Example 2:
         Input: args = [{}, null, "3"]
         Output: 3
         Explanation: 
         argumentsLength({}, null, "3"); // 3

         Three values were passed to the function so it should return 3.
   
*/

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */
console.log("argumentsLength(1, 2, 3) ", argumentsLength(1, 2, 3, {}));
