export {};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]): boolean {
  /*
  // Time Limit Exceeded error
   let dp: number[] = [];
  nums.forEach((num) => {
    if (!dp.includes(num)) {
      dp.push(num);
    }
  });

  return nums.length !== dp.length;
 */
   
   
   const removeDuplicate = new Set(nums);

   return removeDuplicate.size !== nums.length
};

const nums = [1, 2, 3, 1];
// const nums = [3, 2, 4];
// const nums = [3, 3];
const result = containsDuplicate(nums);
console.log(result);
