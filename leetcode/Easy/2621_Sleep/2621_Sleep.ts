export {};

/*
🔢 Problem: 2621. Sleep
🔗 Link: https://leetcode.com/problems/sleep
📘 Difficulty: Easy

 📝 description:
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      You can return the answer in any order.

 📌 Example:
   Example 1:
      Input: millis = 100
      Output: 100
      Explanation: It should return a promise that resolves after 100ms.
      let t = Date.now();
      sleep(100).then(() => {
      console.log(Date.now() - t); // 100
      });

   Example 2:
      Input: millis = 200
      Output: 200
      Explanation: It should return a promise that resolves after 200ms.

*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis: number): Promise<void> {
  const promise: Promise<void> = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });

  return promise;
}
let t = Date.now();
sleep(2000).then(() => console.log(Date.now() - t));

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
