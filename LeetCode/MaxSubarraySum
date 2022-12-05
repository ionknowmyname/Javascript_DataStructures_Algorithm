function maxSubarray(nums) {
    let currSum = -Infinity;  // Number.MIN_SAFE_INTEGER
    let maxSum = -Infinity;   // Number.MIN_SAFE_INTEGER

    for(let i = 0; i < nums.length; i++) {
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    
    return maxSum;
}

console.log(maxSubarray([2,1,-3,4]));
console.log(maxSubarray([-2,-11,-13,-2,-14,-9,-5,-15,-3]));