var pivotIndex = function(nums) {
    let leftSum = 0
    let sum = 0

    nums.forEach((num) => sum += num)

    for(let i = 0; i < nums.length; i++) {
        if(leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i]
            
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));