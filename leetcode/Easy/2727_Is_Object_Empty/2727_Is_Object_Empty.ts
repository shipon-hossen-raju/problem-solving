export {}

/*
🔢 Problem: 2727. Is Object Empty
🔗 Link: https://leetcode.com/problems/is-object-empty
📘 Difficulty: Easy

 📝 description:
      Given an object or an array, return if it is empty.
      An empty object contains no key-value pairs.
      An empty array contains no elements.
      You may assume the object or array is the output of JSON.parse.

 📌 Example:
   Example 1:
      Input: obj = {"x": 5, "y": 42}
      Output: false
      Explanation: The object has 2 key-value pairs so it is not empty.

   Example 2:
      Input: obj = {}
      Output: true
      Explanation: The object doesn't have any key-value pairs so it is empty.
         
   Example 3:
      Input: obj = [null, false, 0]
      Output: false
      Explanation: The array has 3 elements so it is not empty.

*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
}; 

const obj = [null, false, 0];
console.log('isEmpty:', isEmpty(obj));
