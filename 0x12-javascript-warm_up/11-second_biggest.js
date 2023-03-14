#!/usr/bin/node
const args = process.argv.slice(2);
const nums = args.map(arg => parseInt(arg)).filter(num => !isNaN(num)).sort((a, b) => b - a);

if (nums.length == 0 || nums.length == 1) {
  console.log(0);
} else {
  console.log(nums[1]);
}
