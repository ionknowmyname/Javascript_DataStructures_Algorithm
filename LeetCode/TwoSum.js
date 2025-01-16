function twoSum(nums, target) {
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indices.has(complement)) {
            return [indices.get(complement), i]
        }

        indices.set(nums[i], i)
    }
};

let arr = [1, 5, 7, 3]

let ans = twoSum(arr, 4)
console.log("Ans is --> " + ans);