/* 
    Sum of two values of an array less than another value k
    Use Sliding Window

*/

function twoSumLessThanTarget(arr, k) {

    arr.sort(function(a, b){return a - b});
    var maxSum = arr[0]

    for(let i = 0; i < arr.length; i++) {
        var right = i+1
        var currSum = arr[i] + arr[right]
        if(currSum < k) {
            maxSum = Math.max(maxSum, currSum)
        }
    }

    return maxSum
}

console.log(twoSumLessThanTarget([ 2, 8, 1, 4, 5 ], 10));