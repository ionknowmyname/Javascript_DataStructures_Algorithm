/*
    *   return a boolean indicating if it is possible to generate the target sum using numbers
    *   from the array summed up together in any order.
    *
    *   You can use an element in the array as many times as needed
    *   target number & number in the array are non negative
    *
    *   Use Dynamic Programming
    *
*/


const canSum = (targetSum, numbers) => {
    if(targetSum == 0) return true;  // take nothing from the nums array, and you'd sum up to 0
    if(targetSum < 0) return false;  // another base case for recursive call; since no -ve num, so if
        // we encounter -ve num, it means the remainder was smaller than the num in nums chosen for that
        // iteration, so return false & move to next num


    for(let num of numbers) {
        const remainder = targetSum - num;
        
        if(canSum(remainder, numbers) == true) return true;
    }

    return false
}

const canSumDP = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];

    if(targetSum == 0) return true;  
    if(targetSum < 0) return false;  


    for(let num of numbers) {
        const remainder = targetSum - num;
        
        if(canSumDP(remainder, numbers, memo) == true) {
            memo[targetSum] = true;  // save the result in memo before returning
            return true;
        }
    }

    memo[targetSum] = false; // also save the result in memo before returning
    return false
}



console.log(canSum(7, [2, 3]));  // true
console.log(canSum(7, [5, 3, 4, 7]));  // true
console.log(canSum(7, [2, 4]));  // false
console.log(canSum(8, [2, 3, 5]));  // true
console.log(canSumDP(300, [7, 14]));  // false
console.log();
console.log(canSum(300, [7, 14]));  // false