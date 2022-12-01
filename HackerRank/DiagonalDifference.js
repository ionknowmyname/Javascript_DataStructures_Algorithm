// return absolute difference between the sum of the two diagonals of a nXn matrix


function diagonalDifference(arr) {
    // Write your code here
    
    let x,y,z,a,b,c;
    
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = 0; j < arr[i].length; j++) {
            
    //     }
    // }

    let sum1 =0, sum2 = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i == j){ // that means on the slant down diagonal
                sum1 += arr[i][j]; 
            }

            if(i == arr.length - j- 1){ // that means on the slant up diagonal
                // OR if ((i+j) == (arr.length-1))
                sum2 += arr[i][j]; 
            }
        }
    }


    OR

    for (let i = 0; i < arr.length; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length-i-1];
    }



    /* x = arr[0][0];
    y = arr[1][1];
    z = arr[2][2];
    a = arr[0][2];
    b = arr[1][1];
    c = arr[2][0];
    
    let D = x+y+z, E = a+b+c;
    
    let ans = Math.abs(D-E); */

    let ans = Math.abs(sum1 - sum2);
    
    return ans;

}

let arr2 = [
    [15, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ];

console.log("CHECK: ", diagonalDifference(arr2));

// 14