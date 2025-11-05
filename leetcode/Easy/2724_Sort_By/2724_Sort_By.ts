export {};

/*
🔢 Problem: 2724. Sort By
🔗 Link: https://leetcode.com/problems/sort-by
📘 Difficulty: Easy

 📝 description:
      Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

      You may assume that fn will never duplicate numbers for a given array.

 📌 Example:
   Example 1:
      Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
      Output: [1, 2, 3, 4, 5]
      Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

   Example 2:
      Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
      Output: [{"x": -1}, {"x": 0}, {"x": 1}]
      Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

   Example 3:
      Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
      Output: [[10, 1], [5, 2], [3, 4]]
      Explanation: arr is sorted in ascending order by number at index=1. 

*/
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;

    if (fn(arr[i]) < fn(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sortBy(left, fn), pivot, ...sortBy(right, fn)];
}

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x));

// console.log(sortBy([{x: 1}, {x: 0}, {x: -1}], (d) => d.x));

// console.log(sortBy([[3,4], [5,2], [10,1]], (x) => x[1]));
