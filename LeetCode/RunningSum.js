var runningSum = function(nums) {
    let ans = []
    let sum = 0

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans.push(sum)
    }
    
    return ans;
};

var runningSum2 = function(nums) {
    let currentSum = 0
    return nums.map((num) => currentSum += num)
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum2([1,2,3,4]));



