'use strict';

function getSecondLargest(nums: number[]) {

    let largest: number = 0, second: number = 0;

    if (nums.length >= 0) {
        if (nums[0] >= nums[1]) {
            largest = nums[0];
            second = nums[1];
        } else {
            largest = nums[1];
            second = nums[0];
        }
    }

    for (let index = 3; index < nums.length; index++) {
        if (largest < nums[index]) {
            second = largest;
            largest = nums[index];
        } else if (second < nums[index]) {
            second = nums[index];
        }
    }

    return second;
}

const nums = [2, 3, 6, 6, 4];
console.log(getSecondLargest(nums));
