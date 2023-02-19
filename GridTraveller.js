/*
*   How many ways can you travel from the top left to bottom right in a m x n grid
* */


function gridTraveller(m, n) {

    if(m == 1 && n == 1) return 1;  // only 1 way to travel a 1x1 gird
    if(m == 0 || n == 0) return 0;   // no grid if there's a 0

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

// memoization
function gridTravellerDynamicProgramming(m, n, memo = {}) {
    const key = m + ',' + n;
    if(key in memo) return memo[key]

    if(m == 1 && n == 1) return 1;  // only 1 way to travel a 1x1 gird
    if(m == 0 || n == 0) return 0;   // no grid if there's a 0

    memo[key] = gridTravellerDynamicProgramming(m - 1, n, memo) + gridTravellerDynamicProgramming(m, n - 1, memo);

    return memo[key];
}


console.log(gridTraveller(1, 1))  // 1
console.log(gridTraveller(2, 3))  // 3
console.log(gridTraveller(3, 2))   // 3
console.log(gridTraveller(3, 3))  // 6
// console.log(gridTraveller(18, 18))   // 2333606220
console.log(gridTravellerDynamicProgramming(18, 18))